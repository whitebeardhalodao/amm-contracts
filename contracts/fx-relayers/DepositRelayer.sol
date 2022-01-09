pragma solidity ^0.7.1;
pragma experimental ABIEncoderV2;

import '../balancer-core-v2/vault/contracts/interfaces/IVault.sol';

import '../amm-v1/interfaces/IAssimilator.sol';
import '../amm-v1/ProportionalLiquidity.sol';
import '../amm-v1/lib/ABDKMath64x64.sol';

import '../FXPool.sol';

contract DepositRelayer {
	IVault private constant vault = IVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);
	ProportionalLiquidity proportionalLiquidity;

  int128 private constant ONE = 0x10000000000000000;

	event GetBaseNumeraire(uint256 baseNumeraire);
	event GetWeight(int128 weight);
	event GetToUint(uint256 result);
	event TestDeposit(uint256 lpTokens, uint256[] requiredTokens);

	constructor(ProportionalLiquidity _proportionalLiquidity) {
		proportionalLiquidity = _proportionalLiquidity;
	}

	function _deposit(
		bytes32 poolId,
		address sender,
		address recipient,
		uint256 amount
	) internal returns (uint256, uint256[] memory) {
		(IERC20[] memory tokens, uint256[] memory balances, ) = vault.getPoolTokens(poolId);

		(address poolAddress, ) = vault.getPool(poolId);

		FXPool fxPool = FXPool(poolAddress);

		// Get rates by using assimilators of assets
		IAssimilator _baseAssimilator = IAssimilator(fxPool.getAssimilator(address(tokens[0])).addr);
		// IAssimilator _quoteAssimilator = fxPool.getAssimilator(tokens[1]); // USDC

		uint256 baseRate = _baseAssimilator.getRate();

		uint256 baseNumeraire = amount * (baseRate);
		emit GetBaseNumeraire(baseNumeraire);

		// Get base weight
    uint256 baseWeight = fxPool.getWeight(0);
		emit GetWeight(baseWeight);

    // uint256 totalNumeraire = baseNumeraire * (ONE / baseWeight);
		uint256 x = uint256(baseWeight);
		emit GetToUint(x);
    uint256 totalNumeraire = baseNumeraire * ABDKMath64x64.toUInt(ONE / baseWeight);
		// uint256 totalNumeraire = baseNumeraire * x;
    


		(uint256 lpTokens, uint256[] memory requiredTokens) = proportionalLiquidity
			.viewProportionalDeposit(FXPool(poolAddress), totalNumeraire);

		emit TestDeposit(lpTokens, requiredTokens);

		return (lpTokens, requiredTokens);
	}

	function multiSidedDeposit(bytes32 poolId, address[] memory tokens, uint256[] memory amounts) external returns (uint256, uint256[] memory) {
		
	}

	function singleSidedDeposit(bytes32 poolId, address token, uint256 amount) external returns (uint256, uint256[] memory) {

	}

	function viewDeposit(bytes32 poolId, uint256 amount) external returns (uint256, uint256[] memory) {
		(uint256 lpTokens, uint256[] memory requiredTokens) = _deposit(poolId, msg.sender, msg.sender, amount);

		return (lpTokens, requiredTokens);
	}
}