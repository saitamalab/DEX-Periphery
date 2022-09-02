const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0x0c17e776cd218252adfca8d4e761d3fe757e9778",
        constructorArguments: ["0x35113a300ca0D7621374890ABFEAC30E88f214b1","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
        contract: "contracts/SaitaSwapRouter.sol:SaitaSwapRouter",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});