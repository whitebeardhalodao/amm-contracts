// SPDX-License-Identifier: MIT

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.7.3;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import '../core/lib/ABDKMath64x64.sol';
import '../core/interfaces/IAssimilator.sol';
import '../core/interfaces/IOracle.sol';

import '../interfaces/IVaultPoolBalances.sol';

import 'hardhat/console.sol';

contract BaseToUsdAssimilator is IAssimilator {
    using ABDKMath64x64 for int128;
    using ABDKMath64x64 for uint256;

    using SafeMath for uint256;

    IERC20 public immutable usdc;
    IOracle public immutable oracle;
    IERC20 public immutable baseToken;
    uint256 public immutable baseDecimals;

    constructor(
        uint256 _baseDecimals,
        IERC20 _baseToken,
        IERC20 _quoteToken,
        IOracle _oracle
    ) {
        baseDecimals = _baseDecimals;
        baseToken = _baseToken;
        usdc = _quoteToken;
        oracle = _oracle;
    }

    function getRate() public view override returns (uint256) {
        (, int256 price, , , ) = oracle.latestRoundData();
        return uint256(price);
    }

    // takes raw baseToken amount, transfers it in, calculates corresponding numeraire amount and returns it
    function intakeRawAndGetBalance(uint256 _amount) external override returns (int128 amount_, int128 balance_) {
        bool _transferSuccess = baseToken.transferFrom(msg.sender, address(this), _amount);

        require(_transferSuccess, 'Curve/baseToken-transfer-from-failed');

        uint256 _balance = baseToken.balanceOf(address(this));

        uint256 _rate = getRate();

        balance_ = ((_balance * _rate) / 1e8).divu(baseDecimals);

        amount_ = ((_amount * _rate) / 1e8).divu(baseDecimals);
    }

    // takes raw baseToken amount, transfers it in, calculates corresponding numeraire amount and returns it
    function intakeRaw(uint256 _amount) external override returns (int128 amount_) {
        bool _transferSuccess = baseToken.transferFrom(msg.sender, address(this), _amount);

        require(_transferSuccess, 'Curve/baseToken-transfer-from-failed');

        uint256 _rate = getRate();

        amount_ = ((_amount * _rate) / 1e8).divu(baseDecimals);
    }

    // takes a numeraire amount, calculates the raw amount of baseToken, transfers it in and returns the corresponding raw amount
    function intakeNumeraire(int128 _amount) external override returns (uint256 amount_) {
        uint256 _rate = getRate();

        amount_ = (_amount.mulu(baseDecimals) * 1e8) / _rate;

        bool _transferSuccess = baseToken.transferFrom(msg.sender, address(this), amount_);

        require(_transferSuccess, 'Curve/baseToken-transfer-from-failed');
    }

    // takes a numeraire amount, calculates the raw amount of baseToken, transfers it in and returns the corresponding raw amount
    function intakeNumeraireLPRatio(
        uint256 _baseWeight,
        uint256 _quoteWeight,
        address _addr,
        int128 _amount
    ) external override returns (uint256 amount_) {
        uint256 _baseTokenBal = baseToken.balanceOf(_addr);

        if (_baseTokenBal <= 0) return 0;

        // base decimals
        _baseTokenBal = _baseTokenBal.mul(1e18).div(_baseWeight);

        // 1e6
        uint256 _usdcBal = usdc.balanceOf(_addr).mul(1e18).div(_quoteWeight);

        // Rate is in 1e6
        uint256 _rate = _usdcBal.mul(baseDecimals).div(_baseTokenBal);

        amount_ = (_amount.mulu(baseDecimals) * 1e6) / _rate;

        bool _transferSuccess = baseToken.transferFrom(msg.sender, address(this), amount_);

        require(_transferSuccess, 'Curve/baseToken-transfer-from-failed');
    }

    // takes a raw amount of baseToken and transfers it out, returns numeraire value of the raw amount
    function outputRawAndGetBalance(address _dst, uint256 _amount)
        external
        override
        returns (int128 amount_, int128 balance_)
    {
        uint256 _rate = getRate();

        uint256 _baseTokenAmount = ((_amount) * _rate) / 1e8;

        bool _transferSuccess = baseToken.transfer(_dst, _baseTokenAmount);

        require(_transferSuccess, 'Curve/baseToken-transfer-failed');

        uint256 _balance = baseToken.balanceOf(address(this));

        amount_ = _baseTokenAmount.divu(baseDecimals);

        balance_ = ((_balance * _rate) / 1e8).divu(baseDecimals);
    }

    // takes a raw amount of baseToken and transfers it out, returns numeraire value of the raw amount
    function outputRaw(address _dst, uint256 _amount) external override returns (int128 amount_) {
        uint256 _rate = getRate();

        uint256 _baseTokenAmount = (_amount * _rate) / 1e8;

        bool _transferSuccess = baseToken.transfer(_dst, _baseTokenAmount);

        require(_transferSuccess, 'Curve/baseToken-transfer-failed');

        amount_ = _baseTokenAmount.divu(baseDecimals);
    }

    // takes a numeraire value of baseToken, figures out the raw amount, transfers raw amount out, and returns raw amount
    function outputNumeraire(address _dst, int128 _amount) external override returns (uint256 amount_) {
        uint256 _rate = getRate();

        amount_ = (_amount.mulu(baseDecimals) * 1e8) / _rate;

        bool _transferSuccess = baseToken.transfer(_dst, amount_);

        require(_transferSuccess, 'Curve/baseToken-transfer-failed');
    }

    // takes a numeraire amount and returns the raw amount
    function viewRawAmount(int128 _amount) external view override returns (uint256 amount_) {
        uint256 _rate = getRate();

        amount_ = (_amount.mulu(baseDecimals) * 1e8) / _rate;
    }

    // function assignBalances(IERC20[] memory tokens, address quoteToken)
    //     internal
    //     view
    //     override
    //     returns (uint256 baseTokenBal, uint256 quoteTokenBal)
    // {}

    function viewRawAmountLPRatio(
        uint256 _baseWeight,
        uint256 _quoteWeight,
        address _addr,
        int128 _amount,
        address vault,
        bytes32 poolId
    ) external view override returns (uint256 amount_) {
        // 1e6
        (IERC20[] memory tokens, uint256[] memory balances, ) = IVaultPoolBalances(vault).getPoolTokens(poolId);
        console.log('viewRawAmountLPRatio: tokens[0] %s, token[1] %s', address(tokens[0]), address(tokens[1]));
        console.log('viewRawAmountLPRatio: balances[0] %s, balances[1] %s', balances[0], balances[1]);
        console.log('baseDecimals %s', baseDecimals);
        console.log('_baseWeight %s', _baseWeight);
        console.log('_quoteWeight %s', _quoteWeight);

        uint256 _baseTokenBal = 0;
        uint256 _usdcBal = 0;

        if (address(tokens[0]) == address(usdc)) {
            console.log('tokens[0] is usdc %s', address(tokens[0]));

            _baseTokenBal = balances[1];
            _usdcBal = balances[0];
        } else if (address(tokens[1]) == address(usdc)) {
            console.log('tokens[1] is usdc %s', address(tokens[1]));

            _baseTokenBal = balances[0];
            _usdcBal = balances[1];
        } else {
            revert('viewRawAmountLPRatio: usdc is not present in token array returned by Vault.getPoolTokens method');
        }

        if (_baseTokenBal <= 0) return 0;
        console.log('_baseTokenBal is %s. _usdcBal is %s', _baseTokenBal, _usdcBal);

        // base decimals
        _baseTokenBal = _baseTokenBal.mul(1e18).div(_baseWeight);
        console.log('_baseTokenBal divided by _baseWeight: %s', _baseTokenBal);

        _usdcBal = _usdcBal.mul(1e18).div(_quoteWeight);
        uint256 _rate = _usdcBal.mul(baseDecimals).div(_baseTokenBal);

        amount_ = (_amount.mulu(baseDecimals) * 1e6) / _rate;

        console.log('amount_ %s', amount_);
    }

    // takes a raw amount and returns the numeraire amount
    function viewNumeraireAmount(uint256 _amount) external view override returns (int128 amount_) {
        uint256 _rate = getRate();
        amount_ = ((_amount * _rate) / 1e8).divu(baseDecimals);
    }

    // views the numeraire value of the current balance of the reserve, in this case baseToken
    function viewNumeraireBalance(
        address _addr,
        address vault,
        bytes32 poolId
    ) external view override returns (int128 balance_) {
        uint256 _rate = getRate();

        (IERC20[] memory tokens, uint256[] memory balances, ) = IVaultPoolBalances(vault).getPoolTokens(poolId);
        console.log(
            'viewNumeraireBalance: token[0] address %s. token[1] address %s',
            address(tokens[0]),
            address(tokens[1])
        );

        uint256 baseTokenBal = 0;

        if (address(tokens[0]) == address(usdc)) {
            console.log('viewNumeraireBalance: token[0] address is usdc');
            baseTokenBal = balances[1];
        } else if (address(tokens[1]) == address(usdc)) {
            console.log('viewNumeraireBalance: token[1] address is usdc');
            baseTokenBal = balances[0];
        } else {
            revert('usdc is not present in token array returned by Vault.getPoolTokens method');
        }

        if (baseTokenBal <= 0) return ABDKMath64x64.fromUInt(0);
        console.log('baseTokenBal %s', baseTokenBal);

        balance_ = ((baseTokenBal * _rate) / 1e8).divu(baseDecimals);
    }

    // views the numeraire value of the current balance of the reserve, in this case baseToken
    // called for swaps
    function viewNumeraireAmountAndBalance(
        uint256 _amount,
        address vault,
        bytes32 poolId
    ) external view override returns (int128 amount_, int128 balance_) {
        uint256 _rate = getRate();

        amount_ = ((_amount * _rate) / 1e8).divu(baseDecimals);

        uint256 baseTokenBal = 0;

        (IERC20[] memory tokens, uint256[] memory balances, ) = IVaultPoolBalances(vault).getPoolTokens(poolId);

        if (address(tokens[0]) == address(usdc)) {
            console.log('viewNumeraireAmountAndBalance: token[0] address is usdc');
            baseTokenBal = balances[1];
            console.log('baseTokenBal %s', baseTokenBal);
        } else if (address(tokens[1]) == address(usdc)) {
            console.log('viewNumeraireAmountAndBalance: token[1] address is usdc');
            baseTokenBal = balances[0];
            console.log('baseTokenBal %s', baseTokenBal);
        } else {
            revert('baseToken is not present in token array returned by Vault.getPoolTokens method');
        }

        balance_ = ((baseTokenBal * _rate) / 1e8).divu(baseDecimals);
    }

    // views the numeraire value of the current balance of the reserve, in this case baseToken
    // instead of calculating with chainlink's "rate" it'll be determined by the existing
    // token ratio. This is in here to prevent LPs from losing out on future oracle price updates
    function viewNumeraireBalanceLPRatio(
        uint256 _baseWeight,
        uint256 _quoteWeight,
        address _addr,
        address vault,
        bytes32 poolId
    ) external view override returns (int128 balance_) {
        (IERC20[] memory tokens, uint256[] memory balances, ) = IVaultPoolBalances(vault).getPoolTokens(poolId);
        console.log(
            'viewNumeraireBalanceLPRatio: token[0] address %s. token[1] address %s',
            address(tokens[0]),
            address(tokens[1])
        );

        uint256 baseTokenBal = 0;
        uint256 usdcBal = 0;

        if (address(tokens[0]) == address(usdc)) {
            console.log(
                'viewNumeraireBalanceLPRatio: token[0] address %s. usdc address %s',
                address(tokens[0]),
                address(usdc)
            );

            baseTokenBal = balances[1];
            usdcBal = balances[0];
        } else if (address(tokens[1]) == address(usdc)) {
            console.log(
                'viewNumeraireBalanceLPRatio: token[1] address %s is usdc address %s',
                address(tokens[1]),
                address(usdc)
            );

            baseTokenBal = balances[0];
            usdcBal = balances[1];
        } else {
            revert('baseToken is not present in token array returned by Vault.getPoolTokens method');
        }

        if (baseTokenBal <= 0) return ABDKMath64x64.fromUInt(0);
        console.log('_baseTokenBal %s', baseTokenBal);

        usdcBal = usdcBal.mul(1e18).div(_quoteWeight);
        uint256 _rate = usdcBal.mul(1e18).div(baseTokenBal.mul(1e18).div(_baseWeight));
        console.log('_rate %s', _rate);

        balance_ = ((baseTokenBal * _rate) / 1e6).divu(1e18);
    }
}
