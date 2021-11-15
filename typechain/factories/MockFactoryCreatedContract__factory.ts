/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockFactoryCreatedContract,
  MockFactoryCreatedContractInterface,
} from "../MockFactoryCreatedContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101073803806101078339818101604052602081101561003357600080fd5b505180610075576040805162461bcd60e51b815260206004820152600b60248201526a1393d397d6915493d7d25160aa1b604482015290519081900360640190fd5b6000556081806100866000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635d1ca63114602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6000549056fea2646970667358221220c50b8a24bb69c1c1b961abf3f15273a6c8f7ccdfb0f9d4b041d9bbc0de8112fb64736f6c63430007010033";

export class MockFactoryCreatedContract__factory extends ContractFactory {
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
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockFactoryCreatedContract> {
    return super.deploy(
      id,
      overrides || {}
    ) as Promise<MockFactoryCreatedContract>;
  }
  getDeployTransaction(
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(id, overrides || {});
  }
  attach(address: string): MockFactoryCreatedContract {
    return super.attach(address) as MockFactoryCreatedContract;
  }
  connect(signer: Signer): MockFactoryCreatedContract__factory {
    return super.connect(signer) as MockFactoryCreatedContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFactoryCreatedContractInterface {
    return new utils.Interface(_abi) as MockFactoryCreatedContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFactoryCreatedContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFactoryCreatedContract;
  }
}
