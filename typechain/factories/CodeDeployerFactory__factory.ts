/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CodeDeployerFactory,
  CodeDeployerFactoryInterface,
} from "../CodeDeployerFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "at",
        type: "address",
      },
    ],
    name: "CodeDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610247806100206000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c80627743601461002f575b600080fd5b6100d56004803603602081101561004557600080fd5b81019060208101813564010000000081111561006057600080fd5b82018360208201111561007257600080fd5b8035906020019184600183028401116401000000008311171561009457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506100d7945050505050565b005b60006100e282610133565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fea3e8fadbb616efc14cb41f88bca45fca14e4eb41f13eb4c8d2ffcf8695a62c4919081900360200190a15050565b80517f602038038060206000396000f3fefefefefefefefefefefefefefefefefefefe808352600091602081018484f0908452915061018c73ffffffffffffffffffffffffffffffffffffffff831615156101ac610192565b50919050565b816101a0576101a0816101a4565b5050565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea264697066735822122045e3705c0bfad1926f95c8d21e42a05fc84ccebd76e35f38d0b537169054418d64736f6c63430007030033";

export class CodeDeployerFactory__factory extends ContractFactory {
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
  ): Promise<CodeDeployerFactory> {
    return super.deploy(overrides || {}) as Promise<CodeDeployerFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CodeDeployerFactory {
    return super.attach(address) as CodeDeployerFactory;
  }
  connect(signer: Signer): CodeDeployerFactory__factory {
    return super.connect(signer) as CodeDeployerFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CodeDeployerFactoryInterface {
    return new utils.Interface(_abi) as CodeDeployerFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CodeDeployerFactory {
    return new Contract(address, _abi, signerOrProvider) as CodeDeployerFactory;
  }
}
