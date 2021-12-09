/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerErrorsMock,
  BalancerErrorsMockInterface,
} from "../BalancerErrorsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
    ],
    name: "fail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060f68061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063132e4f3c14602d575b600080fd5b604760048036036020811015604157600080fd5b50356049565b005b6050816053565b50565b7f08c379a0000000000000000000000000000000000000000000000000000000006000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fdfea2646970667358221220f0e84603b2c7ec287ad6ce22904f96285161e5ca9bde22593c3e04eba1a2541d64736f6c63430007030033";

export class BalancerErrorsMock__factory extends ContractFactory {
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
  ): Promise<BalancerErrorsMock> {
    return super.deploy(overrides || {}) as Promise<BalancerErrorsMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancerErrorsMock {
    return super.attach(address) as BalancerErrorsMock;
  }
  connect(signer: Signer): BalancerErrorsMock__factory {
    return super.connect(signer) as BalancerErrorsMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerErrorsMockInterface {
    return new utils.Interface(_abi) as BalancerErrorsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerErrorsMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerErrorsMock;
  }
}
