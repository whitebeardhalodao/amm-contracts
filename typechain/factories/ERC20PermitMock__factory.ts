/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PermitMock,
  ERC20PermitMockInterface,
} from "../ERC20PermitMock";

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
        name: "subtractedValue",
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
  "0x6101006040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b50604051620011d2380380620011d2833981810160405260408110156200005c57600080fd5b81019080805160405193929190846401000000008211156200007d57600080fd5b9083019060208201858111156200009357600080fd5b8251640100000000811182820188101715620000ae57600080fd5b82525081516020918201929091019080838360005b83811015620000dd578181015183820152602001620000c3565b50505050905090810190601f1680156200010b5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012f57600080fd5b9083019060208201858111156200014557600080fd5b82516401000000008111828201881017156200016057600080fd5b82525081516020918201929091019080838360005b838110156200018f57818101518382015260200162000175565b50505050905090810190601f168015620001bd5780820380516001836020036101000a031916815260200191505b506040525050508180604051806040016040528060018152602001603160f81b81525084848160039080519060200190620001fa92919062000260565b5080516200021090600490602084019062000260565b50506005805460ff19166012179055508151602092830120608052805191012060a05250507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60c05250620002fc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a357805160ff1916838001178555620002d3565b82800160010185558215620002d3579182015b82811115620002d3578251825591602001919060010190620002b6565b50620002e1929150620002e5565b5090565b5b80821115620002e15760008155600101620002e6565b60805160a05160c05160e051610ea0620003326000398061077a525080610af7525080610b39525080610b185250610ea06000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d71461036d578063a9059cbb146103a6578063d505accf146103df578063dd62ed3e1461043d57610100565b806370a08231146102c65780637ecebe00146102f957806395d89b411461032c5780639dc29fac1461033457610100565b8063313ce567116100d3578063313ce5671461022c5780633644e5151461024a578063395093511461025257806340c10f191461028b57610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101cf57806323b872dd146101e9575b600080fd5b61010d610478565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561052c565b604080519115158252519081900360200190f35b6101d7610542565b60408051918252519081900360200190f35b6101bb600480360360608110156101ff57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610548565b6102346105a9565b6040805160ff9092168252519081900360200190f35b6101d76105b2565b6101bb6004803603604081101561026857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105c1565b6102c4600480360360408110156102a157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610604565b005b6101d7600480360360208110156102dc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610612565b6101d76004803603602081101561030f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661063a565b61010d610662565b6102c46004803603604081101561034a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106e1565b6101bb6004803603604081101561038357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106eb565b6101bb600480360360408110156103bc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610731565b6102c4600480360360e08110156103f557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561073e565b6101d76004803603604081101561045357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661090d565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105225780601f106104f757610100808354040283529160200191610522565b820191906000526020600020905b81548152906001019060200180831161050557829003601f168201915b5050505050905090565b6000610539338484610945565b50600192915050565b60025490565b60006105558484846109b4565b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203380855292529091205461059f91869161059a908661019e610add565b610945565b5060019392505050565b60055460ff1690565b60006105bc610af3565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161053991859061059a9086610bbe565b61060e8282610bd7565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b73ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105225780601f106104f757610100808354040283529160200191610522565b61060e8282610c86565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161053991859061059a908661019f610add565b60006105393384846109b4565b61074c8442111560d1610d71565b73ffffffffffffffffffffffffffffffffffffffff80881660008181526006602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e090940190528251920191909120906107e582610d7f565b9050600060018288888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610843573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191506108ca905073ffffffffffffffffffffffffffffffffffffffff8216158015906108c257508b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6101f8610d71565b73ffffffffffffffffffffffffffffffffffffffff8b1660009081526006602052604090206001850190556109008b8b8b610945565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6109d873ffffffffffffffffffffffffffffffffffffffff84161515610198610d71565b6109fc73ffffffffffffffffffffffffffffffffffffffff83161515610199610d71565b610a07838383610de6565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054610a3a90826101a0610add565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610a769082610bbe565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610aec8484111583610d71565b5050900390565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610b60610deb565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405160208183030381529060405280519060200120905090565b6000828201610bd08482101583610d71565b9392505050565b610be360008383610de6565b600254610bf09082610bbe565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610c239082610bbe565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610caa73ffffffffffffffffffffffffffffffffffffffff8316151561019b610d71565b610cb682600083610de6565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610ce990826101a1610add565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254610d1c9082610def565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b8161060e5761060e81610dfd565b6000610d89610af3565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b505050565b4690565b6000610bd083836001610add565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea26469706673582212206d01c1903f58abe6188fbcd146e8a9a34ad89de687d8ebccfc1adac54a8fb34e64736f6c63430007030033";

export class ERC20PermitMock__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20PermitMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20PermitMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20PermitMock {
    return super.attach(address) as ERC20PermitMock;
  }
  connect(signer: Signer): ERC20PermitMock__factory {
    return super.connect(signer) as ERC20PermitMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PermitMockInterface {
    return new utils.Interface(_abi) as ERC20PermitMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PermitMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20PermitMock;
  }
}
