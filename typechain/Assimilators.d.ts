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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AssimilatorsInterface extends ethers.utils.Interface {
  functions: {
    "iAsmltr()": FunctionFragment;
    "viewNumeraireBalance(address)": FunctionFragment;
    "viewNumeraireBalanceLPRatio(uint256,uint256,address)": FunctionFragment;
    "viewRawAmount(address,int128)": FunctionFragment;
    "viewRawAmountLPRatio(address,uint256,uint256,int128)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "iAsmltr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewNumeraireBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewNumeraireBalanceLPRatio",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewRawAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewRawAmountLPRatio",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "iAsmltr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewNumeraireBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewNumeraireBalanceLPRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewRawAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewRawAmountLPRatio",
    data: BytesLike
  ): Result;

  events: {};
}

export class Assimilators extends BaseContract {
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

  interface: AssimilatorsInterface;

  functions: {
    iAsmltr(overrides?: CallOverrides): Promise<[string]>;

    viewNumeraireBalance(
      _assim: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { bal_: BigNumber }>;

    viewNumeraireBalanceLPRatio(
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _assim: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { bal_: BigNumber }>;

    viewRawAmount(
      _assim: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount_: BigNumber }>;

    viewRawAmountLPRatio(
      _assim: string,
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount_: BigNumber }>;
  };

  iAsmltr(overrides?: CallOverrides): Promise<string>;

  viewNumeraireBalance(
    _assim: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewNumeraireBalanceLPRatio(
    _baseWeight: BigNumberish,
    _quoteWeight: BigNumberish,
    _assim: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewRawAmount(
    _assim: string,
    _amt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewRawAmountLPRatio(
    _assim: string,
    _baseWeight: BigNumberish,
    _quoteWeight: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    iAsmltr(overrides?: CallOverrides): Promise<string>;

    viewNumeraireBalance(
      _assim: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewNumeraireBalanceLPRatio(
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _assim: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewRawAmount(
      _assim: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewRawAmountLPRatio(
      _assim: string,
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    iAsmltr(overrides?: CallOverrides): Promise<BigNumber>;

    viewNumeraireBalance(
      _assim: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewNumeraireBalanceLPRatio(
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _assim: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewRawAmount(
      _assim: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewRawAmountLPRatio(
      _assim: string,
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    iAsmltr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    viewNumeraireBalance(
      _assim: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewNumeraireBalanceLPRatio(
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _assim: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewRawAmount(
      _assim: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewRawAmountLPRatio(
      _assim: string,
      _baseWeight: BigNumberish,
      _quoteWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
