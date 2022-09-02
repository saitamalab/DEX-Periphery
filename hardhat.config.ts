import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-contract-sizer";

require('hardhat-contract-sizer');

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  
  solidity: {
    compilers: [
      {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  ] 
},
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    rinkeby: {
      url:process.env.RINKEBY_URL || "",
      accounts:process.env.RINKEBY_PRIVATE_KEY!== undefined ? [process.env.RINKEBY_PRIVATE_KEY] : [],
     },
     EthereumMainnet : { url: process.env.ETHEREUM_URL || "",
     accounts: process.env.ETHEREUM_PRIVATE_KEY!==undefined ? [process.env.ETHEREUM_PRIVATE_KEY]:[],
     },
     BSCTestNet:{
      url: process.env.BSC_URL || "",
      accounts: process.env.BSC_PRIVATE_KEY!==undefined ? [process.env.BSC_PRIVATE_KEY]:[],
    },
  },
  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: false,
  //   runOnCompile: true,
  //   strict: true,
  //   only: [''],
  // },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
};

export default config;
