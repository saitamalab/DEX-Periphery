import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  SaitaSwapRouter,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  

  const router1 = await ethers.getContractFactory("SaitaSwapRouter");
  const router = await router1.deploy("0xf63a58f912016bF7745C23f6eA9668181b5E468c","0xc778417E063141139Fce010982780140Aa0cD5Ab");
  await sleep(4000);
  console.log("Router Deployed", router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // factory address = 0x19E5ebC005688466d11015e646Fa182621c1881e
  // weth address = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
  // router address = 0x744A4c9c9F40A443ac2A5747D4f3b773e5d86763

  