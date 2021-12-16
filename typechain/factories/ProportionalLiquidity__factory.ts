/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProportionalLiquidity,
  ProportionalLiquidityInterface,
} from "../ProportionalLiquidity";

const _abi = [
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
    name: "ONE",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE_WEI",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FXPool",
        name: "curve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_withdrawal",
        type: "uint256",
      },
    ],
    name: "emergencyProportionalWithdraw",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FXPool",
        name: "curve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
    ],
    name: "proportionalDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "curves_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FXPool",
        name: "curve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_withdrawal",
        type: "uint256",
      },
    ],
    name: "proportionalWithdraw",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FXPool",
        name: "curve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
    ],
    name: "viewProportionalDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "curves_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract FXPool",
        name: "curve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_withdrawal",
        type: "uint256",
      },
    ],
    name: "viewProportionalWithdraw",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506127f2806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c2ee3a081161005b578063c2ee3a08146100e1578063c7cd763e146100e9578063d73b145d146100fc578063efe5049c1461010f5761007d565b806350b16c2f146100825780636e38abdf146100ab578063b909f732146100cc575b600080fd5b610095610090366004612479565b610122565b6040516100a2919061265a565b60405180910390f35b6100be6100b9366004612479565b61046a565b6040516100a292919061274a565b6100d4610a7d565b6040516100a2919061266d565b6100d4610a82565b6100956100f7366004612479565b610a8f565b61009561010a366004612479565b610d62565b6100be61011d366004612479565b611027565b606060008373ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561016c57600080fd5b505afa158015610180573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a49190612522565b9050600060606101b386611622565b9150915060608367ffffffffffffffff811180156101d057600080fd5b506040519080825280602002602001820160405280156101fa578160200160208202803683370190505b509050600061028f670de0b6b3a76400008973ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b505afa158015610265573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102899190612522565b9061187f565b905060006102a588670de0b6b3a764000061187f565b905060006102b7600f83900b846118cf565b905060005b87811015610441576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8d169063eac8f5b8906103199085906004016126c7565b604080518083038186803b15801561033057600080fd5b505afa158015610344573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036891906124c5565b60000151905073__$28039fd024dee0e5c388b469625a331089$__6329931c1982336103b3878c888151811061039a57fe5b6020026020010151600f0b61194390919063ffffffff16565b6040518463ffffffff1660e01b81526004016103d1939291906125c7565b60206040518083038186803b1580156103e957600080fd5b505af41580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104219190612522565b86838151811061042d57fe5b6020908102919091010152506001016102bc565b5061045a8a8461045385600f0b61199a565b89896119d4565b5091955050505050505b92915050565b600060608161048184670de0b6b3a764000061187f565b905060008573ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104cb57600080fd5b505afa1580156104df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105039190612522565b905060608167ffffffffffffffff8111801561051e57600080fd5b50604051908082528060200260200182016040528015610548578160200160208202803683370190505b5090506000606061055889611e04565b91509150600060606105698b611622565b9150915083600f0b6000141561076a5760005b8681101561076457600061061d8d73ffffffffffffffffffffffffffffffffffffffff1663b5f163ff846040518263ffffffff1660e01b81526004016105c291906126c7565b60206040518083038186803b1580156105da57600080fd5b505afa1580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061291906124a4565b600f8b900b90611943565b905060008d73ffffffffffffffffffffffffffffffffffffffff1663eac8f5b8846040518263ffffffff1660e01b815260040161065a91906126c7565b604080518083038186803b15801561067157600080fd5b505afa158015610685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a991906124c5565b51905073__$28039fd024dee0e5c388b469625a331089$__632a730efc826106d6600f86900b60126120fc565b6040518363ffffffff1660e01b81526004016106f39291906125fb565b60206040518083038186803b15801561070b57600080fd5b505af415801561071f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107439190612522565b88848151811061074f57fe5b6020908102919091010152505060010161057c565b506109d9565b600061077a600f89900b866118cf565b9050600061081d670de0b6b3a76400008e73ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60006040518263ffffffff1660e01b81526004016107c491906126c7565b60206040518083038186803b1580156107dc57600080fd5b505afa1580156107f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081491906124a4565b600f0b90612150565b90506000610867670de0b6b3a76400008f73ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60016040518263ffffffff1660e01b81526004016107c491906126c7565b905060005b898110156109d45760008f73ffffffffffffffffffffffffffffffffffffffff1663eac8f5b8836040518263ffffffff1660e01b81526004016108af91906126c7565b604080518083038186803b1580156108c657600080fd5b505afa1580156108da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fe91906124c5565b6000015190506000610916868a858151811061039a57fe5b905073__$28039fd024dee0e5c388b469625a331089$__63a7e850b7838787610944600f87900b60126120fc565b6040518563ffffffff1660e01b81526004016109639493929190612624565b60206040518083038186803b15801561097b57600080fd5b505af415801561098f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b39190612522565b8b84815181106109bf57fe5b6020908102919091010152505060010161086c565b505050505b6000610a2d670de0b6b3a76400008d73ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b9050876000600f83900b1315610a5e57610a4b600f8a900b876118cf565b9050610a5b600f82900b83611943565b90505b610a6b8d838387876119d4565b50949750505050505050509250929050565b601281565b6801000000000000000081565b606060008373ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ad957600080fd5b505afa158015610aed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b119190612522565b90506060610b1e85611622565b91505060608267ffffffffffffffff81118015610b3a57600080fd5b50604051908082528060200260200182016040528015610b64578160200160208202803683370190505b5090506000610bbb670de0b6b3a76400008873ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b90506000610bd187670de0b6b3a764000061187f565b90506000610be3600f83900b846118cf565b905060005b86811015610d54576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8c169063eac8f5b890610c459085906004016126c7565b604080518083038186803b158015610c5c57600080fd5b505afa158015610c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9491906124c5565b60000151905073__$28039fd024dee0e5c388b469625a331089$__6329931c198233610cc6878c888151811061039a57fe5b6040518463ffffffff1660e01b8152600401610ce4939291906125c7565b60206040518083038186803b158015610cfc57600080fd5b505af4158015610d10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d349190612522565b868381518110610d4057fe5b602090810291909101015250600101610be8565b509298975050505050505050565b606060008373ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dac57600080fd5b505afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de49190612522565b90506060610df185611622565b91505060608267ffffffffffffffff81118015610e0d57600080fd5b50604051908082528060200260200182016040528015610e37578160200160208202803683370190505b5090506000610eac610e91670de0b6b3a76400008973ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b610ea388670de0b6b3a764000061187f565b600f0b906118cf565b905060005b8481101561101b576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8a169063eac8f5b890610f0e9085906004016126c7565b604080518083038186803b158015610f2557600080fd5b505afa158015610f39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5d91906124c5565b60000151905073__$28039fd024dee0e5c388b469625a331089$__639d9053a882610f8e8689878151811061039a57fe5b6040518363ffffffff1660e01b8152600401610fab9291906125fb565b60206040518083038186803b158015610fc357600080fd5b505af4158015610fd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffb9190612522565b84838151811061100757fe5b602090810291909101015250600101610eb1565b50909695505050505050565b600060608161103e84670de0b6b3a764000061187f565b905060008573ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561108857600080fd5b505afa15801561109c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c09190612522565b9050600060606110cf88611e04565b9150915060608367ffffffffffffffff811180156110ec57600080fd5b50604051908082528060200260200182016040528015611116578160200160208202803683370190505b50905082600f0b6000141561134c5760005b84811015611346576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8c169063eac8f5b8906111859085906004016126c7565b604080518083038186803b15801561119c57600080fd5b505afa1580156111b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d491906124c5565b516040517fb5f163ff00000000000000000000000000000000000000000000000000000000815290915060009061128c9073ffffffffffffffffffffffffffffffffffffffff8e169063b5f163ff906112319087906004016126c7565b60206040518083038186803b15801561124957600080fd5b505afa15801561125d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128191906124a4565b600f8a900b90611943565b905073__$28039fd024dee0e5c388b469625a331089$__639d9053a8836112b8600f85900b60126120fc565b6040518363ffffffff1660e01b81526004016112d59291906125fb565b60206040518083038186803b1580156112ed57600080fd5b505af4158015611301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113259190612522565b84848151811061133157fe5b60209081029190910101525050600101611128565b50611576565b600061135c600f87900b856118cf565b905060006113a6670de0b6b3a76400008c73ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60006040518263ffffffff1660e01b81526004016107c491906126c7565b905060006113f0670de0b6b3a76400008d73ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60016040518263ffffffff1660e01b81526004016107c491906126c7565b905060005b87811015611571576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8f169063eac8f5b8906114529085906004016126c7565b604080518083038186803b15801561146957600080fd5b505afa15801561147d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a191906124c5565b60000151905073__$28039fd024dee0e5c388b469625a331089$__63c41bdc5c8286866114e260126114d98c8f8b8151811061039a57fe5b600f0b906120fc565b6040518563ffffffff1660e01b81526004016115019493929190612624565b60206040518083038186803b15801561151957600080fd5b505af415801561152d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115519190612522565b86838151811061155d57fe5b6020908102919091010152506001016113f5565b505050505b60006115ca670de0b6b3a76400008b73ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025157600080fd5b9050856000600f83900b13156115fb576115e8600f88900b866118cf565b90506115f8600f82900b83611943565b90505b611611600f82900b670de0b6b3a7640000612150565b9b929a509198505050505050505050565b6000606060008373ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561166e57600080fd5b505afa158015611682573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a69190612522565b905060608167ffffffffffffffff811180156116c157600080fd5b506040519080825280602002602001820160405280156116eb578160200160208202803683370190505b50905060005b82811015611876576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff88169063eac8f5b89061174e9085906004016126c7565b604080518083038186803b15801561176557600080fd5b505afa158015611779573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179d91906124c5565b516040517fac969a7300000000000000000000000000000000000000000000000000000000815290915060009073__$28039fd024dee0e5c388b469625a331089$__9063ac969a73906117f49085906004016125a6565b60206040518083038186803b15801561180c57600080fd5b505af4158015611820573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184491906124a4565b90508084848151811061185357fe5b600f92830b90920b602092830291909101909101529590950194506001016116f1565b50915050915091565b60008161188b57600080fd5b600061189784846121d2565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff821611156118c857600080fd5b9392505050565b600081600f0b600014156118e257600080fd5b600082600f0b604085600f0b901b816118f757fe5b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061193a57506f7fffffffffffffffffffffffffffffff8113155b6118c857600080fd5b6000600f83810b9083900b0260401d7fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061193a57506f7fffffffffffffffffffffffffffffff8113156118c857600080fd5b6000600f82900b7fffffffffffffffffffffffffffffffff8000000000000000000000000000000014156119cd57600080fd5b5060000390565b600060606119e187611622565b9150915060008773ffffffffffffffffffffffffffffffffffffffff16639faa3c916040518163ffffffff1660e01b815260040160206040518083038186803b158015611a2d57600080fd5b505afa158015611a41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6591906124a4565b905060008873ffffffffffffffffffffffffffffffffffffffff166312b495a86040518163ffffffff1660e01b815260040160206040518083038186803b158015611aaf57600080fd5b505afa158015611ac3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae791906124a4565b905060608973ffffffffffffffffffffffffffffffffffffffff166379f93a676040518163ffffffff1660e01b815260040160206040518083038186803b158015611b3157600080fd5b505afa158015611b45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b699190612522565b67ffffffffffffffff81118015611b7f57600080fd5b50604051908082528060200260200182016040528015611ba9578160200160208202803683370190505b50905060005b8151816fffffffffffffffffffffffffffffffff161015611ca7576040517fb5f163ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c169063b5f163ff90611c1c90849060040161272d565b60206040518083038186803b158015611c3457600080fd5b505afa158015611c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6c91906124a4565b82826fffffffffffffffffffffffffffffffff1681518110611c8a57fe5b600f92830b90920b60209283029190910190910152600101611baf565b506040517f0c147f2200000000000000000000000000000000000000000000000000000000815260009073__$374ff109b8599801873fe38f05adb3baa6$__90630c147f2290611d03908b908b9089908990899060040161267b565b60206040518083038186803b158015611d1b57600080fd5b505af4158015611d2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d5391906124a4565b9050600073__$374ff109b8599801873fe38f05adb3baa6$__630c147f2288888888886040518663ffffffff1660e01b8152600401611d9695949392919061267b565b60206040518083038186803b158015611dae57600080fd5b505af4158015611dc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611de691906124a4565b9050611df68b8b8b8a8686612348565b505050505050505050505050565b6000606060008373ffffffffffffffffffffffffffffffffffffffff1663a89d490c6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e5057600080fd5b505afa158015611e64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e889190612522565b905060608167ffffffffffffffff81118015611ea357600080fd5b50604051908082528060200260200182016040528015611ecd578160200160208202803683370190505b5090506000611f18670de0b6b3a76400008773ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60006040518263ffffffff1660e01b81526004016107c491906126c7565b90506000611f62670de0b6b3a76400008873ffffffffffffffffffffffffffffffffffffffff1663b5f163ff60016040518263ffffffff1660e01b81526004016107c491906126c7565b905060005b848110156120f0576040517feac8f5b800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8a169063eac8f5b890611fc49085906004016126c7565b604080518083038186803b158015611fdb57600080fd5b505afa158015611fef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201391906124c5565b516040517f05cf7bb400000000000000000000000000000000000000000000000000000000815290915060009073__$28039fd024dee0e5c388b469625a331089$__906305cf7bb49061206e9088908890879060040161276b565b60206040518083038186803b15801561208657600080fd5b505af415801561209a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120be91906124a4565b9050808684815181106120cd57fe5b600f92830b90920b60209283029190910190910152979097019650600101611f67565b50919350505050915091565b6000600f83810b9083900b017fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061193a57506f7fffffffffffffffffffffffffffffff8113156118c857600080fd5b60008161215f57506000610464565b600083600f0b121561217057600080fd5b600f83900b6fffffffffffffffffffffffffffffffff8316810260401c90608084901c0277ffffffffffffffffffffffffffffffffffffffffffffffff8111156121b957600080fd5b60401b81198111156121ca57600080fd5b019392505050565b6000816121de57600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff84116122145782604085901b8161220c57fe5b04905061232b565b60c084811c640100000000811061222d576020918201911c5b62010000811061223f576010918201911c5b6101008110612250576008918201911c5b60108110612260576004918201911c5b60048110612270576002918201911c5b6002811061227f576001820191505b60bf820360018603901c6001018260ff0387901b8161229a57fe5b0492506fffffffffffffffffffffffffffffffff8311156122ba57600080fd5b608085901c83026fffffffffffffffffffffffffffffffff8616840260c088901c604089901b828110156122ef576001820391505b608084901b92900382811015612306576001820391505b829003608084901c821461231657fe5b88818161231f57fe5b04870196505050505050505b6fffffffffffffffffffffffffffffffff8111156118c857600080fd5b85600f0b6000148061235d5750858501600f0b155b156123675761241d565b600061237b87610ea3600f88900b86612425565b9050600061239e612390600f8a900b896120fc565b610ea3600f88900b86612425565b9050818103600f81900b600012806123da57507fffffffffffffffffffffffffffffffffffffffffffffffffffffef39085f4a12600f82900b12155b612419576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612410906126d0565b60405180910390fd5b5050505b505050505050565b6000600f82810b9084900b037fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061193a57506f7fffffffffffffffffffffffffffffff8113156118c857600080fd5b6000806040838503121561248b578182fd5b823561249681612797565b946020939093013593505050565b6000602082840312156124b5578081fd5b815180600f0b81146118c8578182fd5b6000604082840312156124d6578081fd5b6040516040810181811067ffffffffffffffff821117156124f357fe5b604052825161250181612797565b8152602083015160ff81168114612516578283fd5b60208201529392505050565b600060208284031215612533578081fd5b5051919050565b6000815180845260208085019450808401835b8381101561256c578151600f0b8752958201959082019060010161254d565b509495945050505050565b6000815180845260208085019450808401835b8381101561256c5781518752958201959082019060010161258a565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152600f9190910b604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff929092168252600f0b602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff94909416845260208401929092526040830152600f0b606082015260800190565b6000602082526118c86020830184612577565b600f9190910b815260200190565b600086600f0b825260a0602083015261269760a083018761253a565b85600f0b604084015284600f0b606084015282810360808401526126bb818561253a565b98975050505050505050565b90815260200190565b60208082526023908201527f43757276652f6c69717569646974792d696e76617269616e742d76696f6c617460408201527f696f6e0000000000000000000000000000000000000000000000000000000000606082015260800190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b6000838252604060208301526127636040830184612577565b949350505050565b928352602083019190915273ffffffffffffffffffffffffffffffffffffffff16604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff811681146127b957600080fd5b5056fea264697066735822122063f6a6445648dcdab2a18091062e8324248ff571dc8212704e523537e61c0bcf64736f6c63430007030033";

type ProportionalLiquidityConstructorParams =
  | [
      linkLibraryAddresses: ProportionalLiquidityLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProportionalLiquidityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class ProportionalLiquidity__factory extends ContractFactory {
  constructor(...args: ProportionalLiquidityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        ProportionalLiquidity__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: ProportionalLiquidityLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$28039fd024dee0e5c388b469625a331089\\$__", "g"),
      linkLibraryAddresses["contracts/amm-v1/Assimilators.sol:Assimilators"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$374ff109b8599801873fe38f05adb3baa6\\$__", "g"),
      linkLibraryAddresses["contracts/amm-v1/CurveMath.sol:CurveMath"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProportionalLiquidity> {
    return super.deploy(overrides || {}) as Promise<ProportionalLiquidity>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProportionalLiquidity {
    return super.attach(address) as ProportionalLiquidity;
  }
  connect(signer: Signer): ProportionalLiquidity__factory {
    return super.connect(signer) as ProportionalLiquidity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProportionalLiquidityInterface {
    return new utils.Interface(_abi) as ProportionalLiquidityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProportionalLiquidity {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProportionalLiquidity;
  }
}

export interface ProportionalLiquidityLibraryAddresses {
  ["contracts/amm-v1/Assimilators.sol:Assimilators"]: string;
  ["contracts/amm-v1/CurveMath.sol:CurveMath"]: string;
}
