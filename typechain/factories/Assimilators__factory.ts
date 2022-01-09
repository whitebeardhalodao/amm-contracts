/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Assimilators, AssimilatorsInterface } from "../Assimilators";

const _abi = [
  {
    inputs: [],
    name: "iAsmltr",
    outputs: [
      {
        internalType: "contract IAssimilator",
        name: "",
        type: "IAssimilator",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assim",
        type: "address",
      },
    ],
    name: "viewNumeraireBalance",
    outputs: [
      {
        internalType: "int128",
        name: "bal_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quoteWeight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_assim",
        type: "address",
      },
    ],
    name: "viewNumeraireBalanceLPRatio",
    outputs: [
      {
        internalType: "int128",
        name: "bal_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assim",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amt",
        type: "int128",
      },
    ],
    name: "viewRawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assim",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_baseWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quoteWeight",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "viewRawAmountLPRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61099b610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100925760003560e01c80639d9053a8116100655780639d9053a8146101cc578063a7e850b714610208578063ac969a731461025d578063c41bdc5c1461029057610092565b806305cf7bb41461009757806329931c19146100ed5780632a730efc1461015257806375bb15361461019b575b600080fd5b6100d6600480360360608110156100ad57600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff166102d8565b60408051600f9290920b8252519081900360200190f35b8180156100f957600080fd5b506101406004803603606081101561011057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135600f0b61038a565b60408051918252519081900360200190f35b81801561015e57600080fd5b506101406004803603604081101561017557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135600f0b610475565b6101a3610502565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610140600480360360408110156101e257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135600f0b610507565b81801561021457600080fd5b506101406004803603608081101561022b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101359060408101359060600135600f0b610590565b6100d66004803603602081101561027357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661063d565b610140600480360360808110156102a657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101359060408101359060600135600f0b6106d8565b604080517f05cf7bb40000000000000000000000000000000000000000000000000000000081526004810185905260248101849052306044820152905160009173ffffffffffffffffffffffffffffffffffffffff8416916305cf7bb491606480820192602092909190829003018186803b15801561035657600080fd5b505afa15801561036a573d6000803e3d6000fd5b505050506040513d602081101561038057600080fd5b5051949350505050565b600060607f6fc3905200000000000000000000000000000000000000000000000000000000846103bd600f86900b61078a565b604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182600f0b815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061045685826107d9565b806020019051602081101561046a57600080fd5b505195945050505050565b60408051600f83900b6024808301919091528251808303909101815260449091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0271c3c8000000000000000000000000000000000000000000000000000000001790526000906104ee84826107d9565b806020019051602081101561038057600080fd5b600081565b60008273ffffffffffffffffffffffffffffffffffffffff16636b677a8f836040518263ffffffff1660e01b81526004018082600f0b815260200191505060206040518083038186803b15801561055d57600080fd5b505afa158015610571573d6000803e3d6000fd5b505050506040513d602081101561058757600080fd5b50519392505050565b604080516024810185905260448101849052306064820152600f83900b6084808301919091528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fdf4efe490000000000000000000000000000000000000000000000000000000017905260009061061d86826107d9565b806020019051602081101561063157600080fd5b50519695505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff1663ac969a73306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156106a657600080fd5b505afa1580156106ba573d6000803e3d6000fd5b505050506040513d60208110156106d057600080fd5b505192915050565b604080517f011847a00000000000000000000000000000000000000000000000000000000081526004810185905260248101849052306044820152600f83900b6064820152905160009173ffffffffffffffffffffffffffffffffffffffff87169163011847a091608480820192602092909190829003018186803b15801561076057600080fd5b505afa158015610774573d6000803e3d6000fd5b505050506040513d602081101561046a57600080fd5b6000600f82900b7fffffffffffffffffffffffffffffffff8000000000000000000000000000000014156107bd57600080fd5b600082600f0b126107ce57816107d3565b816000035b92915050565b60606107fa8373ffffffffffffffffffffffffffffffffffffffff1661093a565b61084f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806109416025913960400191505060405180910390fd5b600060608473ffffffffffffffffffffffffffffffffffffffff16846040518082805190602001908083835b602083106108b857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161087b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610918576040519150601f19603f3d011682016040523d82523d6000602084013e61091d565b606091505b50915091506000821415610932573d60208201fd5b949350505050565b3b15159056fe417373696d696c61746f72732f63616c6c65652d69732d6e6f742d612d636f6e7472616374a2646970667358221220b3bfe0b5020a80b15acea8b749f852c9cd152545c7d9f9ed01a82156be83317264736f6c63430007030033";

export class Assimilators__factory extends ContractFactory {
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
  ): Promise<Assimilators> {
    return super.deploy(overrides || {}) as Promise<Assimilators>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Assimilators {
    return super.attach(address) as Assimilators;
  }
  connect(signer: Signer): Assimilators__factory {
    return super.connect(signer) as Assimilators__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssimilatorsInterface {
    return new utils.Interface(_abi) as AssimilatorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Assimilators {
    return new Contract(address, _abi, signerOrProvider) as Assimilators;
  }
}