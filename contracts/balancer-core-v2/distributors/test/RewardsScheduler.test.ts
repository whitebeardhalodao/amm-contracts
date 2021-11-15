import { Contract, BigNumber } from 'ethers';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

import Token from '@balancer-labs/v2-helpers/src/models/tokens/Token';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';

import { fp } from '@balancer-labs/v2-helpers/src/numbers';

import { deployedAt } from '@balancer-labs/v2-helpers/src/contract';
import { expectBalanceChange } from '@balancer-labs/v2-helpers/src/test/tokenBalance';
import * as expectEvent from '@balancer-labs/v2-helpers/src/test/expectEvent';
import { advanceTime, currentTimestamp } from '@balancer-labs/v2-helpers/src/time';
import { setup, rewardsDuration } from './MultiRewardsSharedSetup';

describe('Rewards Scheduler', () => {
  let admin: SignerWithAddress, lp: SignerWithAddress, rewarder: SignerWithAddress;

  let rewardTokens: TokenList;
  let vault: Contract;
  let stakingContract: Contract;
  let rewardsScheduler: Contract;
  let rewardsToken: Token;
  let pool: Contract;

  sharedBeforeEach('set up asset manager and mock callback', async () => {
    const { contracts, users } = await setup();

    pool = contracts.pool;
    vault = contracts.vault;
    stakingContract = contracts.stakingContract;
    rewardsToken = contracts.rewardTokens.DAI;
    rewardTokens = contracts.rewardTokens;

    admin = users.admin;
    lp = users.lp;
    rewarder = users.rewarder;

    const rewardsSchedulerAddress = await stakingContract.rewardsScheduler();
    rewardsScheduler = await deployedAt('RewardsScheduler', rewardsSchedulerAddress);

    await rewardTokens.approve({ to: rewardsScheduler.address, from: [rewarder] });

    await stakingContract.connect(admin).whitelistRewarder(pool.address, rewardsToken.address, rewarder.address);
    await stakingContract.connect(rewarder).addReward(pool.address, rewardsToken.address, rewardsDuration);
  });

  it('allows an whitelisted rewarder to schedule a reward', async () => {
    const time = (await currentTimestamp()).add(3600 * 24);
    const rewardAmount = fp(1);

    await expectBalanceChange(
      () => rewardsScheduler.connect(rewarder).scheduleReward(pool.address, rewardsToken.address, rewardAmount, time),
      rewardTokens,
      [{ account: rewardsScheduler.address, changes: { DAI: rewardAmount } }]
    );
  });

  it('emits RewardScheduled', async () => {
    const time = (await currentTimestamp()).add(3600 * 24);
    const rewardAmount = fp(1);

    const receipt = await (
      await rewardsScheduler.connect(rewarder).scheduleReward(pool.address, rewardsToken.address, rewardAmount, time)
    ).wait();

    const rewardId = await rewardsScheduler.getRewardId(pool.address, rewardsToken.address, rewarder.address, time);

    expectEvent.inReceipt(receipt, 'RewardScheduled', {
      rewardId,
      rewarder: rewarder.address,
      rewardsToken: rewardsToken.address,
      startTime: time,
      amount: rewardAmount,
    });
  });

  it('prevents a non whitelisted rewarder to schedule a reward', async () => {
    const time = (await currentTimestamp()).add(3600 * 24);
    const rewardAmount = fp(1);
    await expect(
      rewardsScheduler.connect(lp).scheduleReward(pool.address, rewardsToken.address, rewardAmount, time)
    ).to.be.revertedWith('Only whitelisted rewarders can schedule reward');
  });

  describe('with a scheduled reward', () => {
    const rewardAmount = fp(1);
    let rewardId: string;
    let time: BigNumber;

    sharedBeforeEach(async () => {
      // reward duration is important.  These tests assume a very short duration
      time = (await currentTimestamp()).add(3600 * 24);
      await rewardsScheduler.connect(rewarder).scheduleReward(pool.address, rewardsToken.address, rewardAmount, time);

      rewardId = await rewardsScheduler.getRewardId(pool.address, rewardsToken.address, rewarder.address, time);
    });

    it('doesnt reward before time has passed', async () => {
      await expect(rewardsScheduler.connect(lp).startRewards([rewardId])).to.be.revertedWith(
        'Reward start time is in the future'
      );
    });

    it('responds to getScheduledRewardInfo', async () => {
      const response = await rewardsScheduler.getScheduledRewardInfo(rewardId);

      expect(response.stakingToken).to.equal(pool.address);
      expect(response.rewardsToken).to.equal(rewardsToken.address);
      expect(response.startTime).to.equal(time);
      expect(response.rewarder).to.equal(rewarder.address);
      expect(response.amount).to.equal(rewardAmount);
      expect(response.status).to.equal(1);
    });

    describe('when time has passed', async () => {
      sharedBeforeEach(async () => {
        await advanceTime(3600 * 25);
      });

      it('allows anyone to poke the contract to notify the staking contract and transfer rewards', async () => {
        const expectedReward = fp(1);

        await expectBalanceChange(
          () => rewardsScheduler.connect(lp).startRewards([rewardId]),
          rewardTokens,
          [{ account: stakingContract.address, changes: { DAI: ['very-near', expectedReward] } }],
          vault
        );
      });

      it('emits RewardStarted', async () => {
        const receipt = await (await rewardsScheduler.connect(lp).startRewards([rewardId])).wait();

        expectEvent.inReceipt(receipt, 'RewardStarted', {
          rewardId,
          rewarder: rewarder.address,
          stakingToken: pool.address,
          rewardsToken: rewardsToken.address,
          startTime: time,
          amount: rewardAmount,
        });
      });

      it('emits RewardAdded in MultiRewards', async () => {
        const receipt = await (await rewardsScheduler.connect(lp).startRewards([rewardId])).wait();

        expectEvent.inIndirectReceipt(receipt, stakingContract.interface, 'RewardAdded', {
          rewardsToken: rewardsToken.address,
          amount: rewardAmount,
        });
      });

      describe('and a reward has been started', async () => {
        sharedBeforeEach(async () => {
          await rewardsScheduler.connect(lp).startRewards([rewardId]);
        });

        it('cannot be started again', async () => {
          await expect(rewardsScheduler.connect(lp).startRewards([rewardId])).to.be.revertedWith(
            'Reward cannot be started'
          );
        });

        it('has reward status set to STARTED', async () => {
          const response = await rewardsScheduler.getScheduledRewardInfo(rewardId);
          expect(response.status).to.equal(2);
        });
      });
    });
  });
});
