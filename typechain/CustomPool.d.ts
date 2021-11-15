/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CustomPoolInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getPausedState()": FunctionFragment;
    "getPoolId()": FunctionFragment;
    "getScalingFactors()": FunctionFragment;
    "getSwapFeePercentage()": FunctionFragment;
    "getVault()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "setAssetManagerPoolConfig(address,bytes)": FunctionFragment;
    "setPaused(bool)": FunctionFragment;
    "setSwapFeePercentage(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPausedState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getScalingFactors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "onExitPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onJoinPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap",
    values: [
      {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryExit",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryJoin",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetManagerPoolConfig",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setSwapFeePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPausedState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getScalingFactors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onExitPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onJoinPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queryExit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queryJoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAssetManagerPoolConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSwapFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "PausedStateChanged(bool)": EventFragment;
    "SwapFeePercentageChanged(uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedStateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapFeePercentageChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type PausedStateChangedEvent = TypedEvent<
  [boolean] & { paused: boolean }
>;

export type SwapFeePercentageChangedEvent = TypedEvent<
  [BigNumber] & { swapFeePercentage: BigNumber }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class CustomPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CustomPoolInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getPausedState(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    getPoolId(overrides?: CallOverrides): Promise<[string]>;

    getScalingFactors(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onSwap(
      request: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      balanceTokenIn: BigNumberish,
      balanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAssetManagerPoolConfig(
      token: string,
      poolConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSwapFeePercentage(
      swapFeePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getActionId(selector: BytesLike, overrides?: CallOverrides): Promise<string>;

  getAuthorizer(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getPausedState(
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      paused: boolean;
      pauseWindowEndTime: BigNumber;
      bufferPeriodEndTime: BigNumber;
    }
  >;

  getPoolId(overrides?: CallOverrides): Promise<string>;

  getScalingFactors(overrides?: CallOverrides): Promise<BigNumber[]>;

  getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  getVault(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  onExitPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onJoinPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onSwap(
    request: {
      kind: BigNumberish;
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      poolId: BytesLike;
      lastChangeBlock: BigNumberish;
      from: string;
      to: string;
      userData: BytesLike;
    },
    balanceTokenIn: BigNumberish,
    balanceTokenOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryExit(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryJoin(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAssetManagerPoolConfig(
    token: string,
    poolConfig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaused(
    paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSwapFeePercentage(
    swapFeePercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAuthorizer(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getPausedState(
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paused: boolean;
        pauseWindowEndTime: BigNumber;
        bufferPeriodEndTime: BigNumber;
      }
    >;

    getPoolId(overrides?: CallOverrides): Promise<string>;

    getScalingFactors(overrides?: CallOverrides): Promise<BigNumber[]>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    onSwap(
      request: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      balanceTokenIn: BigNumberish,
      balanceTokenOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { bptIn: BigNumber; amountsOut: BigNumber[] }
    >;

    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { bptOut: BigNumber; amountsIn: BigNumber[] }
    >;

    setAssetManagerPoolConfig(
      token: string,
      poolConfig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setPaused(paused: boolean, overrides?: CallOverrides): Promise<void>;

    setSwapFeePercentage(
      swapFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "PausedStateChanged(bool)"(
      paused?: null
    ): TypedEventFilter<[boolean], { paused: boolean }>;

    PausedStateChanged(
      paused?: null
    ): TypedEventFilter<[boolean], { paused: boolean }>;

    "SwapFeePercentageChanged(uint256)"(
      swapFeePercentage?: null
    ): TypedEventFilter<[BigNumber], { swapFeePercentage: BigNumber }>;

    SwapFeePercentageChanged(
      swapFeePercentage?: null
    ): TypedEventFilter<[BigNumber], { swapFeePercentage: BigNumber }>;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizer(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getPausedState(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    getScalingFactors(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onSwap(
      request: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      balanceTokenIn: BigNumberish,
      balanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAssetManagerPoolConfig(
      token: string,
      poolConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSwapFeePercentage(
      swapFeePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getActionId(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPausedState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getScalingFactors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSwapFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onSwap(
      request: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      balanceTokenIn: BigNumberish,
      balanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAssetManagerPoolConfig(
      token: string,
      poolConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaused(
      paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSwapFeePercentage(
      swapFeePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
