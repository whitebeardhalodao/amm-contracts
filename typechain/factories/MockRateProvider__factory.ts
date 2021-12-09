/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockRateProvider,
  MockRateProviderInterface,
} from "../MockRateProvider";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "mockRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50670de0b6b3a764000060005560ac8061002b6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063679aefce146037578063a1cfa04114604f575b600080fd5b603d606b565b60408051918252519081900360200190f35b606960048036036020811015606357600080fd5b50356071565b005b60005490565b60005556fea2646970667358221220d0926144a667095e2c69fa7bb8483b471eae2aca3d71012ac0011fddb38e936664736f6c63430007030033";

export class MockRateProvider__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockRateProvider> {
    return super.deploy(overrides || {}) as Promise<MockRateProvider>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockRateProvider {
    return super.attach(address) as MockRateProvider;
  }
  connect(signer: Signer): MockRateProvider__factory {
    return super.connect(signer) as MockRateProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRateProviderInterface {
    return new utils.Interface(_abi) as MockRateProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRateProvider {
    return new Contract(address, _abi, signerOrProvider) as MockRateProvider;
  }
}
