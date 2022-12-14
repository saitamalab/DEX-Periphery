/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISaitaSwapMigrator,
  ISaitaSwapMigratorInterface,
} from "../ISaitaSwapMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISaitaSwapMigrator__factory {
  static readonly abi = _abi;
  static createInterface(): ISaitaSwapMigratorInterface {
    return new utils.Interface(_abi) as ISaitaSwapMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISaitaSwapMigrator {
    return new Contract(address, _abi, signerOrProvider) as ISaitaSwapMigrator;
  }
}
