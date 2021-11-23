/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReentrancyAttack,
  ReentrancyAttackInterface,
} from "../ReentrancyAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "data",
        type: "bytes4",
      },
    ],
    name: "callSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610229806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2df1ed14610030575b600080fd5b61006f6004803603602081101561004657600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610071565b005b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000851617815291518151600093339392918291908083835b6020831061011857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016100db565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461017a576040519150601f19603f3d011682016040523d82523d6000602084013e61017f565b606091505b50509050806101ef57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f5245454e5452414e43595f41545441434b000000000000000000000000000000604482015290519081900360640190fd5b505056fea26469706673582212204aff80468c34896931ac18cf733cbaa1659fb69abe8399fd5cd3d376d84896a664736f6c63430007030033";

export class ReentrancyAttack__factory extends ContractFactory {
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
  ): Promise<ReentrancyAttack> {
    return super.deploy(overrides || {}) as Promise<ReentrancyAttack>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReentrancyAttack {
    return super.attach(address) as ReentrancyAttack;
  }
  connect(signer: Signer): ReentrancyAttack__factory {
    return super.connect(signer) as ReentrancyAttack__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyAttackInterface {
    return new utils.Interface(_abi) as ReentrancyAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyAttack {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyAttack;
  }
}
