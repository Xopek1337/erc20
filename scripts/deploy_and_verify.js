const hre = require("hardhat");
const network = hre.network.name;
const delay = require('delay');

async function main() {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    await delay(100000);
    
    console.log("Token address:", ERC20Basic.address);

    await hre.run("verify:verify", {
        address: ERC20Basic.address,
        constructorArguments: ["10000"],
    });
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });