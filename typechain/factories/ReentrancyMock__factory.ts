/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReentrancyMock,
  ReentrancyMockInterface,
} from "../ReentrancyMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "callback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ReentrancyAttack",
        name: "attacker",
        type: "address",
      },
    ],
    name: "countAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "countLocalRecursive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "countThisRecursive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600081815590556104d1806100296000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638c5344fa116100505780638c5344fa1461009057806396ffa690146100ad578063b672ad8b146100ca57610067565b8063083b27321461006c57806361bc221a14610076575b600080fd5b6100746100fd565b005b61007e610117565b60408051918252519081900360200190f35b610074600480360360208110156100a657600080fd5b503561011d565b610074600480360360208110156100c357600080fd5b50356102ef565b610074600480360360208110156100e057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610311565b6101056103f2565b61010d61040b565b610115610415565b565b60015481565b6101256103f2565b80156102e45761013361040b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830160248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8c5344fa0000000000000000000000000000000000000000000000000000000017815291518151600093309392918291908083835b6020831061020b57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016101ce565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461026d576040519150601f19603f3d011682016040523d82523d6000602084013e610272565b606091505b50509050806102e257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5245454e5452414e43595f4d4f434b0000000000000000000000000000000000604482015290519081900360640190fd5b505b6102ec610415565b50565b6102f76103f2565b80156102e45761030561040b565b6102e4600182036102ef565b6103196103f2565b61032161040b565b604080517f0a2df1ed0000000000000000000000000000000000000000000000000000000081527f083b273200000000000000000000000000000000000000000000000000000000600482015290517f083b2732f78169bfaad6b407fa338cc97d697ed69d3915a18239cc111d51a4029173ffffffffffffffffffffffffffffffffffffffff841691630a2df1ed9160248082019260009290919082900301818387803b1580156103d157600080fd5b505af11580156103e5573d6000803e3d6000fd5b50505050506102ec610415565b6104046002600054141561019061041c565b6002600055565b6001805481019055565b6001600055565b8161042a5761042a8161042e565b5050565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea264697066735822122099627d21a1030d767985ec432af9fcdbc0a5a6786fd9f84315d3410a6bca68be64736f6c63430007010033";

export class ReentrancyMock__factory extends ContractFactory {
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
  ): Promise<ReentrancyMock> {
    return super.deploy(overrides || {}) as Promise<ReentrancyMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReentrancyMock {
    return super.attach(address) as ReentrancyMock;
  }
  connect(signer: Signer): ReentrancyMock__factory {
    return super.connect(signer) as ReentrancyMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyMockInterface {
    return new utils.Interface(_abi) as ReentrancyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyMock {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyMock;
  }
}
