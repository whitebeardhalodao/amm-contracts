/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockBalancerPoolToken,
  MockBalancerPoolTokenInterface,
} from "../MockBalancerPoolToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b50604051620013ee380380620013ee833981810160405260608110156200005c57600080fd5b81019080805160405193929190846401000000008211156200007d57600080fd5b9083019060208201858111156200009357600080fd5b8251640100000000811182820188101715620000ae57600080fd5b82525081516020918201929091019080838360005b83811015620000dd578181015183820152602001620000c3565b50505050905090810190601f1680156200010b5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012f57600080fd5b9083019060208201858111156200014557600080fd5b82516401000000008111828201881017156200016057600080fd5b82525081516020918201929091019080838360005b838110156200018f57818101518382015260200162000175565b50505050905090810190601f168015620001bd5780820380516001836020036101000a031916815260200191505b50604081815260209283015182820190915260018252603160f81b83830152865190945086935085928592859283928391879162000201916003918501906200027e565b508051620002179060049060208401906200027e565b505060058054601260ff19909116179055508151602092830120608052805191012060a052507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60c05260601b6001600160601b03191661010052506200031a9350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002c157805160ff1916838001178555620002f1565b82800160010185558215620002f1579182015b82811115620002f1578251825591602001919060010190620002d4565b50620002ff92915062000303565b5090565b5b80821115620002ff576000815560010162000304565b60805160a05160c05160e0516101005160601c6110916200035d60003980610701525080610833525080610be2525080610c24525080610c0352506110916000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b25780639dc29fac11610081578063a9059cbb11610066578063a9059cbb146103f2578063d505accf1461042b578063dd62ed3e146104895761011b565b80639dc29fac14610380578063a457c2d7146103b95761011b565b806370a08231146102e15780637ecebe00146103145780638d928af81461034757806395d89b41146103785761011b565b8063313ce567116100ee578063313ce567146102475780633644e51514610265578063395093511461026d57806340c10f19146102a65761011b565b806306fdde0314610120578063095ea7b31461019d57806318160ddd146101ea57806323b872dd14610204575b600080fd5b6101286104c4565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016257818101518382015260200161014a565b50505050905090810190601f16801561018f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101d6600480360360408110156101b357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610578565b604080519115158252519081900360200190f35b6101f261058f565b60408051918252519081900360200190f35b6101d66004803603606081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610595565b61024f610641565b6040805160ff9092168252519081900360200190f35b6101f261064a565b6101d66004803603604081101561028357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610659565b6102df600480360360408110156102bc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106a1565b005b6101f2600480360360208110156102f757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106af565b6101f26004803603602081101561032a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106d7565b61034f6106ff565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610128610723565b6102df6004803603604081101561039657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107a2565b6101d6600480360360408110156103cf57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107ac565b6101d66004803603604081101561040857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107ea565b6102df600480360360e081101561044157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356107f7565b6101f26004803603604081101561049f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166109c6565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b5050505050905090565b6000610585338484610a3b565b5060015b92915050565b60025490565b6000806105a285336109c6565b90506105d33373ffffffffffffffffffffffffffffffffffffffff871614806105cb5750838210155b61019e610aaa565b6105de858585610ab8565b3373ffffffffffffffffffffffffffffffffffffffff86161480159061062457507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114155b15610636576106368533858403610a3b565b506001949350505050565b60055460ff1690565b6000610654610bde565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161058591859061069c9086610ca9565b610a3b565b6106ab8282610d24565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b73ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b7f000000000000000000000000000000000000000000000000000000000000000090565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561056e5780601f106105435761010080835404028352916020019161056e565b6106ab8282610d2e565b6000806107b933856109c6565b90508083106107d3576107ce33856000610a3b565b6107e0565b6107e03385858403610a3b565b5060019392505050565b6000610585338484610ab8565b6108058442111560d1610aaa565b73ffffffffffffffffffffffffffffffffffffffff80881660008181526006602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e0909401905282519201919091209061089e82610d38565b9050600060018288888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156108fc573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001519150610983905073ffffffffffffffffffffffffffffffffffffffff82161580159061097b57508b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6101f8610aaa565b73ffffffffffffffffffffffffffffffffffffffff8b1660009081526006602052604090206001850190556109b98b8b8b610a3b565b5050505050505050505050565b60006109d06106ff565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a2a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610589565b610a348383610d9f565b9050610589565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b816106ab576106ab81610dd7565b610adc73ffffffffffffffffffffffffffffffffffffffff84161515610198610aaa565b610b0073ffffffffffffffffffffffffffffffffffffffff83161515610199610aaa565b610b0b838383610e44565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054610b3b9082610e49565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610b779082610ca9565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c4b610ec0565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405160208183030381529060405280519060200120905090565b600082820183811015610d1d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6106ab8282610ec4565b6106ab8282610f73565b6000610d42610bde565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b505050565b600082821115610eba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b4690565b610ed060008383610e44565b600254610edd9082610ca9565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610f109082610ca9565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610f9773ffffffffffffffffffffffffffffffffffffffff8316151561019b610aaa565b610fa382600083610e44565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610fd39082610e49565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020556002546110069082610e49565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fea26469706673582212207ab5adf7c08d3ce3a5c37cdef03655485bc4daf173be2f89ae9e43e75b3e804164736f6c63430007030033";

export class MockBalancerPoolToken__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockBalancerPoolToken> {
    return super.deploy(
      name,
      symbol,
      vault,
      overrides || {}
    ) as Promise<MockBalancerPoolToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, vault, overrides || {});
  }
  attach(address: string): MockBalancerPoolToken {
    return super.attach(address) as MockBalancerPoolToken;
  }
  connect(signer: Signer): MockBalancerPoolToken__factory {
    return super.connect(signer) as MockBalancerPoolToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockBalancerPoolTokenInterface {
    return new utils.Interface(_abi) as MockBalancerPoolTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBalancerPoolToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockBalancerPoolToken;
  }
}
