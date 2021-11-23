/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Exiter, ExiterInterface } from "../Exiter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "ensurePoolTokenSetSaved",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "poolHasToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "poolTokenAtIndex",
    outputs: [
      {
        internalType: "address",
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
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "poolTokensLength",
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
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "savePoolTokenSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161113c38038061113c83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6110a3610099600039806102a852806104c2528061065952506110a36000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637ab322301161005b5780637ab32230146100d3578063dfad281c146100e6578063e1c2341014610106578063fbfa77cf146101265761007d565b806329d76f291461008257806343f28ddd1461009757806355c524c1146100c0575b600080fd5b610095610090366004610c47565b61012e565b005b6100aa6100a5366004610c47565b610150565b6040516100b79190610ef4565b60405180910390f35b6100956100ce366004610cc7565b61016f565b6100956100e1366004610c47565b610268565b6100f96100f4366004610ca6565b610487565b6040516100b79190610ec8565b610119610114366004610c77565b6104a8565b6040516100b79190610ee9565b6100f96104c0565b60008181526001602052604090205460ff1661014d5761014d81610268565b50565b6000818152602081905260408120610167906104e4565b90505b919050565b610177610ac0565b61018382840184610d34565b905060005b815151811015610262576000826000015182815181106101a457fe5b60200260200101519050600081905060008173ffffffffffffffffffffffffffffffffffffffff166338fff2d06040518163ffffffff1660e01b815260040160206040518083038186803b1580156101fb57600080fd5b505afa15801561020f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102339190610c5f565b905061023e8161012e565b6000839050610252818388602001516104e8565b5050600190920191506101889050565b50505050565b6040517ff94d466800000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f94d4668906102dd908590600401610ef4565b60006040518083038186803b1580156102f557600080fd5b505afa158015610309573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261034f9190810190610b7b565b505060008381526001602052604090205490915060ff16156103fb576000828152602081905260408120610382906104e4565b905060005b818110156103f45760008481526020819052604081208284037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191906103ce90836106d1565b60008781526020819052604090209091506103e9908261070b565b505050600101610387565b5050610436565b600082815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790555b60005b81518110156104825761047982828151811061045157fe5b60200260200101516000808681526020019081526020016000206108b990919063ffffffff16565b50600101610439565b505050565b600082815260208190526040812061049f9083610941565b90505b92915050565b600082815260208190526040812061049f908361095d565b7f000000000000000000000000000000000000000000000000000000000000000081565b5490565b60606104f38361098b565b90506060815167ffffffffffffffff8111801561050f57600080fd5b50604051908082528060200260200182016040528015610539578160200160208202803683370190505b50905060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105779190610ec8565b60206040518083038186803b15801561058f57600080fd5b505afa1580156105a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c79190610c5f565b905060606001826040516020016105df929190610ff1565b604051602081830303815290604052905060006105fa610ad8565b506040805160808101825286815260208101869052808201849052821515606082015290517f8bdb391300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638bdb391390610694908b9030908c908790600401610efd565b600060405180830381600087803b1580156106ae57600080fd5b505af11580156106c2573d6000803e3d6000fd5b50505050505050505050505050565b60008260000182815481106106e257fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169392505050565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260018301602052604081205480156108af5783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808301910180821461081457600086600001828154811061077957fe5b600091825260209091200154875473ffffffffffffffffffffffffffffffffffffffff909116915081908890859081106107af57fe5b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905592909116815260018881019092526040902090830190555b855486908061081f57fe5b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff871682526001888101909152604082209190915593506104a292505050565b60009150506104a2565b60006108c5838361095d565b61093957508154600180820184556000848152602080822090930180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8616908117909155855490825282860190935260409020919091556104a2565b5060006104a2565b81546000906109539083106064610a41565b61049f83836106d1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001919091016020526040902054151590565b6060600061099883610150565b90508067ffffffffffffffff811180156109b157600080fd5b506040519080825280602002602001820160405280156109db578160200160208202803683370190505b50915060005b81811015610a3a576000848152602081905260409020610a0190826106d1565b838281518110610a0d57fe5b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101526001016109e1565b5050919050565b81610a4f57610a4f81610a53565b5050565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b60408051808201909152606081526000602082015290565b60405180608001604052806060815260200160608152602001606081526020016000151581525090565b803561016a8161104b565b600082601f830112610b1d578081fd5b8151610b30610b2b8261102d565b611009565b818152915060208083019084810181840286018201871015610b5157600080fd5b60005b84811015610b7057815184529282019290820190600101610b54565b505050505092915050565b600080600060608486031215610b8f578283fd5b835167ffffffffffffffff80821115610ba6578485fd5b818601915086601f830112610bb9578485fd5b8151610bc7610b2b8261102d565b80828252602080830192508086018b828387028901011115610be757898afd5b8996505b84871015610c12578051610bfe8161104b565b845260019690960195928101928101610beb565b508901519097509350505080821115610c29578384fd5b50610c3686828701610b0d565b925050604084015190509250925092565b600060208284031215610c58578081fd5b5035919050565b600060208284031215610c70578081fd5b5051919050565b60008060408385031215610c89578182fd5b823591506020830135610c9b8161104b565b809150509250929050565b60008060408385031215610cb8578182fd5b50508035926020909101359150565b60008060208385031215610cd9578182fd5b823567ffffffffffffffff80821115610cf0578384fd5b818501915085601f830112610d03578384fd5b813581811115610d11578485fd5b866020828501011115610d22578485fd5b60209290920196919550909350505050565b60006020808385031215610d46578182fd5b823567ffffffffffffffff80821115610d5d578384fd5b9084019060408287031215610d70578384fd5b604051604081018181108382111715610d8557fe5b604052823582811115610d96578586fd5b83019150601f82018713610da8578485fd5b8135610db6610b2b8261102d565b81815285810190848701878402860188018b1015610dd2578889fd5b8895505b83861015610dfd578035610de98161104b565b835260019590950194918701918701610dd6565b50835250610e0e9050838501610b02565b848201528094505050505092915050565b6000815180845260208085019450808401835b83811015610e4e57815187529582019590820190600101610e32565b509495945050505050565b15159052565b60008151808452815b81811015610e8457602081850181015186830182015201610e68565b81811115610e955782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000858252602073ffffffffffffffffffffffffffffffffffffffff80871682850152808616604085015260806060850152610100840185516080808701528181518084526101208801915085830193508692505b80831015610f7457835185168252928501926001929092019190850190610f52565b508488015194507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff809350838782030160a0880152610fb28186610e1f565b94505050506040850151818584030160c0860152610fd08382610e5f565b925050506060840151610fe660e0850182610e59565b509695505050505050565b6040810160038410610fff57fe5b9281526020015290565b60405181810167ffffffffffffffff8111828210171561102557fe5b604052919050565b600067ffffffffffffffff82111561104157fe5b5060209081020190565b73ffffffffffffffffffffffffffffffffffffffff8116811461014d57600080fdfea2646970667358221220c72652481baf47a74ba6fbcdf56e17a31dbfc692083f7ec646a62adce9295dcf64736f6c63430007030033";

export class Exiter__factory extends ContractFactory {
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
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Exiter> {
    return super.deploy(_vault, overrides || {}) as Promise<Exiter>;
  }
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  attach(address: string): Exiter {
    return super.attach(address) as Exiter;
  }
  connect(signer: Signer): Exiter__factory {
    return super.connect(signer) as Exiter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExiterInterface {
    return new utils.Interface(_abi) as ExiterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Exiter {
    return new Contract(address, _abi, signerOrProvider) as Exiter;
  }
}
