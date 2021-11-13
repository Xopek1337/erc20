const hre = require("hardhat");

async function main() {
  const ERC20Basic = await hre.ethers.getContractFactory("ERC20Base");
  const ercBase = await ERC20Basic.deploy(10000);

  await ercBase.deployed();

  console.log("Greeter deployed to:", ercBase.address);

  const ERC20Mint = await hre.ethers.getContractFactory("ERC20Mint");
  const ercMint = await ERC20Mint.deploy(10000);

  await ercMint.deployed();

  console.log("Greeter deployed to:", ercMint.address);

  const ERC20Own = await hre.ethers.getContractFactory("ERC20own");
  const ercOwn = await ERC20Own.deploy(10000);

  await ercOwn.deployed();

  console.log("Greeter deployed to:", ercOwn.address);

  const ERC20AC = await hre.ethers.getContractFactory("ERC20AC");
  const ercAC = await ERC20AC.deploy(10000);

  await ercAC.deployed();

  console.log("Greeter deployed to:", ercAC.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });