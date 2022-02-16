// SPDX-License-Identifier: MIT
pragma solidity ^0.7.1;
pragma experimental ABIEncoderV2;

import './amm-v1/ProportionalLiquidity.sol';
import './amm-v1/Assimilators.sol';
import './amm-v1/interfaces/IOracle.sol';
import './amm-v1/lib/ABDKMath64x64.sol';
import './amm-v1/CurveMath.sol';
import './amm-v1/Swaps.sol';

import '@openzeppelin/contracts/math/SafeMath.sol';
import "@balancer-labs/v2-vault/contracts/interfaces/IBasePool.sol";

import {BaseMinimalSwapInfoPool} from '@balancer-labs/v2-pool-utils/contracts/BaseMinimalSwapInfoPool.sol';
import {BasePool} from '@balancer-labs/v2-pool-utils/contracts/BaseMinimalSwapInfoPool.sol';
import {IVault} from "@balancer-labs/v2-vault/contracts/interfaces/IVault.sol";


// TODO
contract FXPool is BaseMinimalSwapInfoPool {


	//using LogExpMath for uint256;
	//using FixedPoint for uint256;
	// using ABDKMath64x64 for uint256;
	
	using ABDKMath64x64 for int128;
	using SafeMath for uint256;

	int128 private constant ONE_WEI = 0x12;

	// The Balancer pool data
	// Note we change style to match Balancer's custom getter

	uint256 internal immutable _scalingFactor0;
	uint256 internal immutable _scalingFactor1;

	ProportionalLiquidity proportionalLiquidity;
	AmmV1Swaps swaps;

	// Note Start of Storage variables

	struct Assimilator {
		address addr;
		uint8 ix;
	}

	// Start Curve variables
	uint256 public alpha;
	uint256 public beta;
	uint256 public delta;
	uint256 public epsilon;
	uint256 public lambda;
	uint256[] public weights;
	// Assets and their assimilators
	Assimilator[] public assets;
	mapping(address => Assimilator) private assimilators;
	// Oracles to determine the price
	// Note that 0'th index should always be USDC 1e18
	// Oracle's pricing should be denominated in Currency/USDC
	mapping(address => IOracle) public oracles;
	// End Curve variables

	address[] public derivatives;
	address[] public numeraires;
	address[] public reserves;

	// Curve operational state
	bool public frozen = false;
	bool public emergency = false;
	bool public whitelistingStage = true;
	bool internal notEntered = true;

	// Note end of Storage variables

	event ParametersSet(
		uint256 alpha,
		uint256 beta,
		uint256 delta,
		uint256 epsilon,
		uint256 lambda
	);

	event AssetIncluded(address indexed numeraire, address indexed reserve, uint256 weight);

	event AssimilatorIncluded(
		address indexed derivative,
		address indexed numeraire,
		address indexed reserve,
		address assimilator
	);

	event TestingSwapGivenIn(uint256 calculatedAmount);

	/// @param vault The balancer vault
	/// @param name The balancer pool token name
	/// @param symbol The balancer pool token symbol
	constructor(
		IVault vault,
		string memory name,
		string memory symbol,
		IERC20[] memory tokens,
		address[] memory _assets,
		uint256[] memory _assetWeights,
		uint256 swapFeePercentage,
		uint256 pauseWindowDuration,
		uint256 bufferPeriodDuration,
		ProportionalLiquidity proportionalLiquidty_,
		AmmV1Swaps swaps_
	)
		BasePool(
			vault,
			IVault.PoolSpecialization.MINIMAL_SWAP_INFO,
			name,
			symbol,
			tokens,
			new address[](tokens.length),
			swapFeePercentage,
			pauseWindowDuration,
			bufferPeriodDuration,
			msg.sender
		)
	{
		_scalingFactor0 = _computeScalingFactor(tokens[0]);
		_scalingFactor1 = _computeScalingFactor(tokens[1]);

		proportionalLiquidity = proportionalLiquidty_;
		swaps = swaps_;

		// address[] memory tokenAddresses = new address[](tokens.length);
		// for (uint128 i = 0; i < tokens.length; i++) {
		// 	tokenAddresses[i] = address(tokens[i]);
		// }

		initialize(_assets, _assetWeights);
	}

	/** Initialization */

	function initialize(address[] memory _assets, uint256[] memory _assetWeights) private {
		require(_assetWeights.length == 2, 'Curve/assetWeights-must-be-length-two');
		require(_assets.length % 5 == 0, 'Curve/assets-must-be-divisible-by-five');

		for (uint256 i = 0; i < _assetWeights.length; i++) {
			uint256 ix = i * 5;

			numeraires.push(_assets[ix]);
			derivatives.push(_assets[ix]);

			reserves.push(_assets[2 + ix]);
			if (_assets[ix] != _assets[2 + ix]) derivatives.push(_assets[2 + ix]);

			includeAsset(
				_assets[ix], // numeraire
				_assets[1 + ix], // numeraire assimilator
				_assets[2 + ix], // reserve
				_assets[3 + ix], // reserve assimilator
				_assets[4 + ix], // reserve approve to
				_assetWeights[i]
			);

			// TEST
			// alpha = 5;
		}
	}

	// function previewProportionalDeposit(,,,) external view returns (uint256) {

	// }

	function includeAsset(
		address _numeraire,
		address _numeraireAssim,
		address _reserve,
		address _reserveAssim,
		address _reserveApproveTo,
		uint256 _weight
	) private {
		// TODO: Make sure to require caller is Orchestrator
		require(_numeraire != address(0), 'Curve/numeraire-cannot-be-zeroth-address');

		require(
			_numeraireAssim != address(0),
			'Curve/numeraire-assimilator-cannot-be-zeroth-address'
		);

		require(_reserve != address(0), 'Curve/reserve-cannot-be-zeroth-address');

		require(_reserveAssim != address(0), 'Curve/reserve-assimilator-cannot-be-zeroth-address');

		require(_weight < 1e18, 'Curve/weight-must-be-less-than-one');

		if (_numeraire != _reserve) IERC20(_numeraire).approve(_reserveApproveTo, uint256(-1));

		// Assimilator storage _numeraireAssimilator = assimilators[_numeraire];

		// _numeraireAssimilator.addr = _numeraireAssim;

		// _numeraireAssimilator.ix = uint8(assets.length);

		// Assimilator storage _reserveAssimilator = assimilators[_reserve];

		// _reserveAssimilator.addr = _reserveAssim;

		// _reserveAssimilator.ix = uint8(assets.length);

		Assimilator memory _numeraireAssimilator = Assimilator({
			addr: _numeraireAssim,
			ix: uint8(assets.length)
		});

		assimilators[_numeraire] = _numeraireAssimilator;


		Assimilator memory _reserveAssimilator = Assimilator({
			addr: _reserveAssim,
			ix: uint8(assets.length)
		});

		assimilators[_reserve] = _reserveAssimilator;

		// uint256 __weight = _weight.div(1e18).add(uint256(1).div(1e18));
		// uint256 a = _weight.div(1e18);
		// uint256 __weight = a.add(1);

		uint256 __weight = _weight.div(1e18) + uint256(1).div(1e18);

		weights.push(__weight);

		assets.push(_numeraireAssimilator);
		// assets.push(_reserveAssimilator); // commented out cause was not added in original code



		emit AssetIncluded(_numeraire, _reserve, _weight);

		emit AssimilatorIncluded(_numeraire, _numeraire, _reserve, _numeraireAssim);

		if (_numeraireAssim != _reserveAssim) {
			emit AssimilatorIncluded(_reserve, _numeraire, _reserve, _reserveAssim);
		}
	}

	function setParams(
		uint256 _alpha,
		uint256 _beta,
		uint256 _feeAtHalt,
		uint256 _epsilon,
		uint256 _lambda
	) public {
		require(0 < _alpha && _alpha < 1e18, 'Curve/parameter-invalid-alpha');

		require(_beta < _alpha, 'Curve/parameter-invalid-beta');

		require(_feeAtHalt <= 5e17, 'Curve/parameter-invalid-max');

		require(_epsilon <= 1e16, 'Curve/parameter-invalid-epsilon');

		require(_lambda <= 1e18, 'Curve/parameter-invalid-lambda');

		FXPool pool = FXPool(address(this));

		uint256 _omega = getFee(pool);

		alpha = (_alpha + 1).div(1e18);

		beta = (_beta + 1).div(1e18);

		// uint256 minued = alpha.sub(beta);
		uint256 minued = alpha - beta;

		delta = (_feeAtHalt).div(1e18).div(uint256(2).mul(minued)) + 1;

		epsilon = (_epsilon + 1).div(1e18);

		lambda = (_lambda + 1).div(1e18);

		uint256 _psi = getFee(pool);

		require(_omega >= _psi, 'Curve/parameters-increase-fee');

		emit ParametersSet(_alpha, _beta, delta.mul(1e18), _epsilon, _lambda);
	}

	function getFee(FXPool pool) private returns (uint256 fee_) {
		uint256 _gLiq;

		// Always pairs
		uint256[] memory _bals = new uint256[](2);

		for (uint256 i = 0; i < _bals.length; i++) {
			address assimilatorAddress = pool.getAsset(i).addr;
			uint256 _bal = Assimilators.viewNumeraireBalance(assimilatorAddress);

			_bals[i] = _bal;

			_gLiq += _bal;
		}

		fee_ = CurveMath.calculateFee(_gLiq, _bals, beta, delta, weights);
	}

	function _getTotalTokens() internal view override returns (uint256) {
		return 2;
	}

	function _getMaxTokens() internal pure override returns (uint256) {
		return 2;
	}

	function _scalingFactor(IERC20 token) internal view override returns (uint256) {
		return _computeScalingFactor(token);
	}

	function _scalingFactors() internal view override returns (uint256[] memory) {
		uint256[] memory scalingFactors = new uint256[](2);

		{
			scalingFactors[0] = _scalingFactor0;
			scalingFactors[1] = _scalingFactor1;
		}

		return scalingFactors;
	}

	// ADD ONS

	function getWeightsLength() public view returns (uint256) {
		return weights.length;
	}

	function getWeights() public view returns (uint256[] memory) {
		return weights;
	}

	function getWeight(uint256 index) public view returns (uint256) {
		return weights[index];
	}

	function getAssets() public view returns (Assimilator[] memory) {
		return assets;
	}

	function getAssetsLength() public view returns (uint256) {
		return assets.length;
	}

	function getAsset(uint256 index) public view returns (Assimilator memory) {
		return assets[index];
	}

	function getAssimilator(address assim) public view returns (Assimilator memory) {
		return assimilators[assim];
	}

	function setAssimilator(address assimAddress, Assimilator memory assimilator) external {
		assimilators[assimAddress] = assimilator;
	}

	function _onInitializePool(
		bytes32 poolId,
		address sender,
		address recipient,
		uint256[] memory scalingFactors,
		bytes memory userData
	) internal override returns (uint256 bptAmountOut, uint256[] memory amountsIn) {

		uint256[] memory maxAmountsIn = abi.decode(userData, (uint256[]));

		require(
			maxAmountsIn.length == _getTotalTokens(),
			'Invalid length of maxAmountsIn payload.'
		);

		bptAmountOut = 3000000000000000;

		amountsIn = new uint256[](2);
		amountsIn[0] = maxAmountsIn[0];
		amountsIn[1] = maxAmountsIn[1];

		// CALL VIEW PROPORTIONAL DEPOSIT
		// () = proportionalLiquidity.viewProportionalDeposit();

		// (uint256 curves, uint256[] memory deposits) = proportionalLiquidity.viewProportionalDeposit(
		// 	FXPool(address(this)),
		// 	maxAmountsIn[0]
		// );

		// // bptAmountOut = curves;
		// bptAmountOut = curves;

		// amountsIn = new uint256[](2);
		// amountsIn[0] = deposits[0];
		// amountsIn[1] = deposits[1];
	}

	function _onJoinPool(
		bytes32 poolId,
		address sender,
		address recipient,
		uint256[] memory balances,
		uint256 lastChangeBlock,
		uint256 protocolSwapFeePercentage,
		uint256[] memory scalingFactors,
		bytes memory userData
	)
		internal
		override
		returns (
			uint256 bptAmountOut,
			uint256[] memory amountsIn,
			uint256[] memory dueProtocolFeeAmounts
		)
	{
		uint256[] memory maxAmountsIn = abi.decode(userData, (uint256[]));
		require(balances.length == 2 && maxAmountsIn.length == 2, 'Invalid format');

		(uint256 curves, uint256[] memory deposits) = proportionalLiquidity.viewProportionalDeposit(
			FXPool(address(this)),
			maxAmountsIn[0]
		);

		// bptAmountOut = curves;
		bptAmountOut = curves;

		amountsIn = new uint256[](2);
		amountsIn[0] = deposits[0];
		amountsIn[1] = deposits[1];

		{
			dueProtocolFeeAmounts = new uint256[](2);
			dueProtocolFeeAmounts[0] = 0;
			dueProtocolFeeAmounts[1] = 0;
		}

	}

	function _onExitPool(
		bytes32 poolId,
		address sender,
		address recipient,
		uint256[] memory balances,
		uint256 lastChangeBlock,
		uint256 protocolSwapFeePercentage,
		uint256[] memory scalingFactors,
		bytes memory userData
	)
		internal
		override
		returns (
			uint256 bptAmountIn,
			uint256[] memory amountsOut,
			uint256[] memory dueProtocolFeeAmounts
		)
	{
		uint256[] memory minAmountsOut = abi.decode(userData, (uint256[]));
		require(balances.length == 2 && minAmountsOut.length == 2, 'Invalid format');

		bptAmountIn = 100000000; // amount of BPT token to be burned

		{
			dueProtocolFeeAmounts = new uint256[](2);
			dueProtocolFeeAmounts[0] = 0;
			dueProtocolFeeAmounts[1] = 0;
		}

		{
			amountsOut = new uint256[](2);

			amountsOut[0] = minAmountsOut[0];
			amountsOut[1] = minAmountsOut[1];
		}
	}

	/**
	 * @dev Called when a swap with the Pool occurs, where the amount of tokens entering the Pool is known.
	 *
	 * @return the amount of tokens that will be taken from the Pool in return.
	 */
	function _onSwapGivenIn(
		SwapRequest memory swapRequest,
		uint256 balanceTokenIn,
		uint256 balanceTokenOut
	) internal override returns (uint256) {
		// return swapRequest.amount;
		// IERC20 baseToken = IERC20(swapRequest.tokenIn);
		// baseToken.transferFrom(msg.sender, address(this), swapRequest.amount);

		// (uint256 tAmt_) = swaps.originSwap(
		// 	FXPool(address(this)),
		// 	address(swapRequest.tokenIn),
		// 	address(swapRequest.tokenOut),
		// 	swapRequest.amount,
		// 	msg.sender
		// );

		// return tAmt_;
		CurveMath.Liquidity memory liquidity = CurveMath.Liquidity({
			// oGLiq: ABDKMath64x64.fromInt(ABDKMath64x64.fromUInt(balanceTokenIn)),
			// nGLiq: ABDKMath64x64.fromInt(ABDKMath64x64.fromUInt(balanceTokenOut))
			// oGLiq: ABDKMath64x64.fromUInt(balanceTokenIn / 10 ** 12 ), // or 10 ** 18
			// nGLiq: ABDKMath64x64.fromUInt(balanceTokenOut / 10 ** 12)
			// oGLiq: ABDKMath64x64.fromUInt(1),
			// nGLiq: ABDKMath64x64.fromUInt(1)
			oGLiq: balanceTokenIn,
			nGLiq: balanceTokenOut
		});

		uint256 tAmt_ = swaps.viewOriginSwap(
			FXPool(address(this)),
			liquidity,
			address(swapRequest.tokenIn),
			address(swapRequest.tokenOut),
			swapRequest.amount
		);

		emit TestingSwapGivenIn(tAmt_);

		return tAmt_;
		// return swapRequest.amount;

		// return 1;
	}

	/**
	 * @dev Called when a swap with the Pool occurs, where the amount of tokens exiting the Pool is known.
	 *
	 * @return the amount of tokens that will be granted to the Pool in return.
	 */
	function _onSwapGivenOut(
		SwapRequest memory swapRequest,
		uint256 balanceTokenIn,
		uint256 balanceTokenOut
	) internal override returns (uint256) {
		return swapRequest.amount;
	}

	/**
	 * @dev Called whenever a swap fee is charged. Implementations should call their parents via super, to ensure all
	 * implementations in the inheritance tree are called.
	 *
	 * Callers must call one of the three `_processSwapFeeAmount` functions when swap fees are computed,
	 * and upscale `amount`.
	 */
	 
	 // called internally?
//	function _processSwapFeeAmount(
//		uint256 index, /*index*/
//		uint256 amount /*amount*/
//	) internal  {
//		// solhint-disable-previous-line no-empty-blocks
//		super._processSwapFeeAmount(index, amount);
//	}
	


}
