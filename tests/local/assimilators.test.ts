import { expect } from 'chai'
import { ethers } from 'hardhat'
import { Signer } from 'ethers'
import { setupEnvironment, TestEnv } from '../common/setupEnvironment'
import { getAssimilatorContract, getUSDCAssimilatorContract } from '../common/contractGetters'
import { mockToken } from '../constants/mockTokenList'
import calculator from '../common/helpers/calculators'
import { parseEther, parseUnits } from 'ethers/lib/utils'
import { ONE_ETHER, ONE_TO_THE_SIX } from '../constants'

describe('Assimilators', () => {
  const INPUT_AMOUNT = parseEther('100')
  let testEnv: TestEnv
  let admin: Signer
  let adminAddress: string
  let calc: ReturnType<typeof calculator>

  before('build test env', async () => {
    testEnv = await setupEnvironment()
    ;[admin] = await ethers.getSigners()
    adminAddress = await admin.getAddress()
    calc = calculator(testEnv.mockABDK)
  })

  it('Assimilator Factory is deployed properly', async () => {
    expect(testEnv.assimilatorFactory.address, 'Assimilator Factory is not deployed').to.not.equals(
      ethers.constants.AddressZero
    )
    expect(await testEnv.assimilatorFactory.usdc(), 'USDC not set').to.be.equals(testEnv.USDC.address)
    expect(await testEnv.assimilatorFactory.usdcOracle(), 'USDC Oracle not set').to.be.equals(
      testEnv.USDCOracle.address
    )
    expect(await testEnv.assimilatorFactory.usdcAssimilator(), 'USDC Assimilator not set').to.not.equals(
      ethers.constants.AddressZero
    )
  })

  it('Deploys XSGD, EURS & fxPHP assimilators from the assimilator factory', async () => {
    await expect(
      testEnv.assimilatorFactory.newBaseAssimilator(
        testEnv.XSGD.address,
        parseUnits('1', `${mockToken[1].decimal}`),
        testEnv.XSGDOracle.address
      ),
      'XSGD assimilator not created'
    ).to.emit(testEnv.assimilatorFactory, 'NewAssimilator')

    await expect(
      testEnv.assimilatorFactory.newBaseAssimilator(
        testEnv.EURS.address,
        parseUnits('1', `${mockToken[2].decimal}`),
        testEnv.EURSOracle.address
      ),
      'EURS assimilator not created'
    ).to.emit(testEnv.assimilatorFactory, 'NewAssimilator')

    await expect(
      testEnv.assimilatorFactory.newBaseAssimilator(
        testEnv.fxPHP.address,
        parseUnits('1', `${mockToken[3].decimal}`),
        testEnv.fxPHPOracle.address
      ),
      'fxPHP assimilator not created'
    ).to.emit(testEnv.assimilatorFactory, 'NewAssimilator')
  })

  it('Gets newly deployed XSGD-USD assimilator from the assimilator factory with immutable params set properly', async () => {
    const xsgdAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.XSGD.address)
    expect(xsgdAssimilatorAddress, 'XSGD-USD assimilator not created and returns zero address').to.not.equals(
      ethers.constants.AddressZero
    )

    const xsgdAssimilatorContract = await getAssimilatorContract(xsgdAssimilatorAddress)

    expect(await xsgdAssimilatorContract.usdc(), 'USDC address incorrect').to.be.equals(testEnv.USDC.address)
    expect(await xsgdAssimilatorContract.oracle(), 'XSGD Oracle address incorrect').to.be.equals(
      testEnv.XSGDOracle.address
    )
    expect(await xsgdAssimilatorContract.baseToken(), 'XSGD address incorrect').to.be.equals(testEnv.XSGD.address)
    expect(await xsgdAssimilatorContract.baseDecimals(), 'XSGD decimals incorrect').to.be.equals(
      parseUnits('1', `${mockToken[1].decimal}`)
    )
  })

  it('Gets newly deployed EURS-USD assimilator from the assimilator factory with immutable params set properly', async () => {
    const eursAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.EURS.address)
    expect(eursAssimilatorAddress, 'EURS-USD assimilator not created and returns zero address').to.not.equals(
      ethers.constants.AddressZero
    )

    const eursAssimilatorContract = await getAssimilatorContract(eursAssimilatorAddress)

    expect(await eursAssimilatorContract.usdc(), 'USDC address incorrect').to.be.equals(testEnv.USDC.address)
    expect(await eursAssimilatorContract.oracle(), 'EURS Oracle address incorrect').to.be.equals(
      testEnv.EURSOracle.address
    )
    expect(await eursAssimilatorContract.baseToken(), 'EURS address incorrect').to.be.equals(testEnv.EURS.address)
    expect(await eursAssimilatorContract.baseDecimals(), 'EURS decimals incorrect').to.be.equals(
      parseUnits('1', `${mockToken[2].decimal}`)
    )
  })

  it('Gets newly deployed fxPHP-USD assimilator from the assimilator factory with immutable params set properly', async () => {
    const fxPHPAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.fxPHP.address)
    expect(fxPHPAssimilatorAddress, 'fxPHP-USD assimilator not created and returns zero address').to.not.equals(
      ethers.constants.AddressZero
    )

    const fxPHPAssimilatorContract = await getAssimilatorContract(fxPHPAssimilatorAddress)

    expect(await fxPHPAssimilatorContract.usdc(), 'USDC address incorrect').to.be.equals(testEnv.USDC.address)
    expect(await fxPHPAssimilatorContract.oracle(), 'fxPHP Oracle address incorrect').to.be.equals(
      testEnv.fxPHPOracle.address
    )
    expect(await fxPHPAssimilatorContract.baseToken(), 'fxPHP address incorrect').to.be.equals(testEnv.fxPHP.address)
    expect(await fxPHPAssimilatorContract.baseDecimals(), 'fxPHP decimals incorrect').to.be.equals(
      parseUnits('1', `${mockToken[3].decimal}`)
    )
  })

  it('XSGD-USD assimilator calculation tests', async () => {
    const mockCurveAddress = adminAddress // illustrate calculation using current EOA account
    const xsgdAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.XSGD.address)
    const xsgdAssimilatorContract = await getAssimilatorContract(xsgdAssimilatorAddress)
    const xsgdRateFromAssimilator = await xsgdAssimilatorContract.getRate()

    const xsgdAssimilatorDecimals = await xsgdAssimilatorContract.baseDecimals()
    const baseWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 106
    const quoteWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 107

    const usdcBalance = await testEnv.USDC.balanceOf(mockCurveAddress)
    const xsgdBalance = await testEnv.XSGD.balanceOf(mockCurveAddress)

    expect(xsgdRateFromAssimilator, 'Rate from assimilator is not equal to oracle price').to.equals(
      mockToken[1].mockOraclePrice
    )

    expect(
      await xsgdAssimilatorContract.viewRawAmount(INPUT_AMOUNT),
      'View raw amount calculation is incorrect'
    ).to.equals(await calc.calculateRawAmount(INPUT_AMOUNT, xsgdAssimilatorDecimals, xsgdRateFromAssimilator))

    expect(
      await xsgdAssimilatorContract.viewRawAmountLPRatio(baseWeight, quoteWeight, adminAddress, INPUT_AMOUNT),
      'View raw amount LP ratio calculation is incorrect'
    ).to.equals(
      await calc.calculateRawAmountLpRatio(
        usdcBalance,
        baseWeight,
        quoteWeight,
        xsgdAssimilatorDecimals,
        xsgdBalance,
        INPUT_AMOUNT
      )
    )

    expect(
      await xsgdAssimilatorContract.viewNumeraireAmount(INPUT_AMOUNT),
      'View numeraire amount calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireAmount(INPUT_AMOUNT, xsgdRateFromAssimilator, xsgdAssimilatorDecimals))

    expect(
      await xsgdAssimilatorContract.viewNumeraireBalance(mockCurveAddress),
      'View numeraire balance calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalance(xsgdBalance, xsgdRateFromAssimilator, xsgdAssimilatorDecimals))

    const { amount_, balance_ } = await xsgdAssimilatorContract.viewNumeraireAmountAndBalance(
      mockCurveAddress,
      INPUT_AMOUNT
    )

    expect(amount_).to.be.equals(
      await calc.calculateNumeraireAmount(INPUT_AMOUNT, xsgdRateFromAssimilator, xsgdAssimilatorDecimals),
      'amount_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )
    expect(balance_).to.be.equals(
      await calc.calculateNumeraireBalance(xsgdBalance, xsgdRateFromAssimilator, xsgdAssimilatorDecimals),
      'balance_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )

    expect(
      await xsgdAssimilatorContract.viewNumeraireBalanceLPRatio(baseWeight, quoteWeight, mockCurveAddress),
      'View Numeraire Balance LP Ratio calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalanceLPRatio(usdcBalance, quoteWeight, xsgdBalance, baseWeight))
  })

  it('EURS-USD assimilator calculation tests', async () => {
    const mockCurveAddress = adminAddress // illustrate calculation using current EOA account
    const eursAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.EURS.address)
    const eursAssimilatorContract = await getAssimilatorContract(eursAssimilatorAddress)
    const eursRateFromAssimilator = await eursAssimilatorContract.getRate()

    const eursAssimilatorDecimals = await eursAssimilatorContract.baseDecimals()
    const baseWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 106
    const quoteWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 107

    const usdcBalance = await testEnv.USDC.balanceOf(mockCurveAddress)
    const eursBalance = await testEnv.EURS.balanceOf(mockCurveAddress)

    expect(eursRateFromAssimilator, 'Rate from assimilator is not equal to oracle price').to.equals(
      mockToken[2].mockOraclePrice
    )

    expect(
      await eursAssimilatorContract.viewRawAmount(INPUT_AMOUNT),
      'View raw amount calculation is incorrect'
    ).to.equals(await calc.calculateRawAmount(INPUT_AMOUNT, eursAssimilatorDecimals, eursRateFromAssimilator))

    expect(
      await eursAssimilatorContract.viewRawAmountLPRatio(baseWeight, quoteWeight, adminAddress, INPUT_AMOUNT),
      'View raw amount LP ratio calculation is incorrect'
    ).to.equals(
      await calc.calculateRawAmountLpRatio(
        usdcBalance,
        baseWeight,
        quoteWeight,
        eursAssimilatorDecimals,
        eursBalance,
        INPUT_AMOUNT
      )
    )

    expect(
      await eursAssimilatorContract.viewNumeraireAmount(INPUT_AMOUNT),
      'View numeraire amount calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireAmount(INPUT_AMOUNT, eursRateFromAssimilator, eursAssimilatorDecimals))

    expect(
      await eursAssimilatorContract.viewNumeraireBalance(mockCurveAddress),
      'View numeraire balance calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalance(eursBalance, eursRateFromAssimilator, eursAssimilatorDecimals))

    const { amount_, balance_ } = await eursAssimilatorContract.viewNumeraireAmountAndBalance(
      mockCurveAddress,
      INPUT_AMOUNT
    )

    expect(amount_).to.be.equals(
      await calc.calculateNumeraireAmount(INPUT_AMOUNT, eursRateFromAssimilator, eursAssimilatorDecimals),
      'amount_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )
    expect(balance_).to.be.equals(
      await calc.calculateNumeraireBalance(eursBalance, eursRateFromAssimilator, eursAssimilatorDecimals),
      'balance_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )

    expect(
      await eursAssimilatorContract.viewNumeraireBalanceLPRatio(baseWeight, quoteWeight, mockCurveAddress),
      'View Numeraire Balance LP Ratio calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalanceLPRatio(usdcBalance, quoteWeight, eursBalance, baseWeight))
  })

  it('fxPHP-USD assimilator calculation tests', async () => {
    const mockCurveAddress = adminAddress // illustrate calculation using current EOA account
    const fxPHPAssimilatorAddress = await testEnv.assimilatorFactory.getAssimilator(testEnv.fxPHP.address)
    const fxPHPAssimilatorContract = await getAssimilatorContract(fxPHPAssimilatorAddress)
    const fxPHPRateFromAssimilator = await fxPHPAssimilatorContract.getRate()

    const fxPHPAssimilatorDecimals = await fxPHPAssimilatorContract.baseDecimals()
    const baseWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 106
    const quoteWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 107

    const usdcBalance = await testEnv.USDC.balanceOf(mockCurveAddress)
    const fxPHPBalance = await testEnv.fxPHP.balanceOf(mockCurveAddress)

    expect(fxPHPRateFromAssimilator, 'Rate from assimilator is not equal to oracle price').to.equals(
      mockToken[3].mockOraclePrice
    )

    expect(
      await fxPHPAssimilatorContract.viewRawAmount(INPUT_AMOUNT),
      'View raw amount calculation is incorrect'
    ).to.equals(await calc.calculateRawAmount(INPUT_AMOUNT, fxPHPAssimilatorDecimals, fxPHPRateFromAssimilator))

    expect(
      await fxPHPAssimilatorContract.viewRawAmountLPRatio(baseWeight, quoteWeight, adminAddress, INPUT_AMOUNT),
      'View raw amount LP ratio calculation is incorrect'
    ).to.equals(
      await calc.calculateRawAmountLpRatio(
        usdcBalance,
        baseWeight,
        quoteWeight,
        fxPHPAssimilatorDecimals,
        fxPHPBalance,
        INPUT_AMOUNT
      )
    )

    expect(
      await fxPHPAssimilatorContract.viewNumeraireAmount(INPUT_AMOUNT),
      'View numeraire amount calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireAmount(INPUT_AMOUNT, fxPHPRateFromAssimilator, fxPHPAssimilatorDecimals))

    expect(
      await fxPHPAssimilatorContract.viewNumeraireBalance(mockCurveAddress),
      'View numeraire balance calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalance(fxPHPBalance, fxPHPRateFromAssimilator, fxPHPAssimilatorDecimals))

    const { amount_, balance_ } = await fxPHPAssimilatorContract.viewNumeraireAmountAndBalance(
      mockCurveAddress,
      INPUT_AMOUNT
    )

    expect(amount_).to.be.equals(
      await calc.calculateNumeraireAmount(INPUT_AMOUNT, fxPHPRateFromAssimilator, fxPHPAssimilatorDecimals),
      'amount_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )
    expect(balance_).to.be.equals(
      await calc.calculateNumeraireBalance(fxPHPBalance, fxPHPRateFromAssimilator, fxPHPAssimilatorDecimals),
      'balance_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )

    expect(
      await fxPHPAssimilatorContract.viewNumeraireBalanceLPRatio(baseWeight, quoteWeight, mockCurveAddress),
      'View Numeraire Balance LP Ratio calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalanceLPRatio(usdcBalance, quoteWeight, fxPHPBalance, baseWeight))
  })

  it('USDC-USD assimilator calculation tests', async () => {
    const mockCurveAddress = adminAddress // illustrate calculation using current EOA account
    const USDC_DECIMALS = ONE_TO_THE_SIX // assigning for reference purposes
    const usdcAssimilatorAddress = await testEnv.assimilatorFactory.usdcAssimilator()
    const usdcAssimilatorContract = await getUSDCAssimilatorContract(usdcAssimilatorAddress)
    const usdcRateFromAssimilator = await usdcAssimilatorContract.getRate()
    const usdcBalance = await testEnv.USDC.balanceOf(adminAddress)

    const baseWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 106
    const quoteWeight = await testEnv.mockABDK.mulu(parseUnits('0.5'), ONE_ETHER) // from ProportionalLiquidity line 107

    expect(usdcRateFromAssimilator).to.equals(mockToken[0].mockOraclePrice)

    expect(
      await usdcAssimilatorContract.viewRawAmount(INPUT_AMOUNT),
      'View raw amount calculation is incorrect'
    ).to.equals(await calc.calculateRawAmount(INPUT_AMOUNT, USDC_DECIMALS, usdcRateFromAssimilator))

    expect(
      await usdcAssimilatorContract.viewRawAmountLPRatio(baseWeight, quoteWeight, mockCurveAddress, INPUT_AMOUNT),
      'View raw amount LP ratio calculation is incorrect'
    ).to.equals(await testEnv.mockABDK.mulu(INPUT_AMOUNT, USDC_DECIMALS))

    expect(
      await usdcAssimilatorContract.viewNumeraireAmount(INPUT_AMOUNT),
      'View numeraire amount calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireAmount(INPUT_AMOUNT, usdcRateFromAssimilator, USDC_DECIMALS))

    expect(
      await usdcAssimilatorContract.viewNumeraireBalance(mockCurveAddress),
      'View numeraire balance calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalance(usdcBalance, usdcRateFromAssimilator, USDC_DECIMALS))

    const { amount_, balance_ } = await usdcAssimilatorContract.viewNumeraireAmountAndBalance(
      mockCurveAddress,
      INPUT_AMOUNT
    )

    expect(amount_).to.be.equals(
      await calc.calculateNumeraireAmount(INPUT_AMOUNT, usdcRateFromAssimilator, USDC_DECIMALS),
      'amount_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )
    expect(balance_).to.be.equals(
      await calc.calculateNumeraireBalance(usdcBalance, usdcRateFromAssimilator, USDC_DECIMALS),
      'balance_ in viewNumeraireAmountAndBalance calculation is incorrect'
    )

    expect(
      await usdcAssimilatorContract.viewNumeraireBalanceLPRatio(baseWeight, quoteWeight, mockCurveAddress),
      'View Numeraire Balance LP Ratio calculation is incorrect'
    ).to.equals(await calc.calculateNumeraireBalanceLPRatio(usdcBalance, quoteWeight, usdcBalance, baseWeight))
  })
})