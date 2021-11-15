/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDistributorCallback,
  IDistributorCallbackInterface,
} from "../IDistributorCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callbackData",
        type: "bytes",
      },
    ],
    name: "distributorCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDistributorCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IDistributorCallbackInterface {
    return new utils.Interface(_abi) as IDistributorCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDistributorCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDistributorCallback;
  }
}
