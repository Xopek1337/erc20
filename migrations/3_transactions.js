/*
module.exports = async function(deployer, network, accounts) {
    const ERC20BaseInstance = await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = process.env.ACCOUNT_1;

    const accountOneStartingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    const amount = 10;

    const transf = (await ERC20Basic.transfer(accountTwo, amount, { from: accountOne }));

    await transf.wait();

    const accountOneEndingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    expect(await accountTwoEndingBalance).to.equal(accountTwoStartingBalance + amount);
    expect(await accountOneEndingBalance).to.equal(accountOneStartingBalance - amount);

    console.log('accountOneEndingBalance: ', accountOneEndingBalance);
    console.log('accountOneStartingBalance - amount: ', accountOneStartingBalance - amount);
    console.log('accountTwoEndingBalance: ', accountTwoEndingBalance);
    console.log('accountTwoStartingBalance + amount: ', accountTwoStartingBalance + amount);

    const balance = (await ERC20BaseInstance.balanceOf.call(accounts[0])).toNumber();
    //console.log('balanceOfSecondAccount: ', balance);
    const total = (await ERC20BaseInstance.totalSupply.call()).toNumber();
    //console.log('total balance on two accounts: ', total);

    const accountOneStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    await ERC20BaseInstance.approve(accountOne, amount);

    await ERC20BaseInstance.transferFrom(accountOne, accountTwo, amount);

    const accountOneEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    //console.log('accountOneEndingBalance_TransferFrom: ', accountOneEndingBalance_TF);
    //console.log('accountOneStartingBalance_TransferFrom - amount: ', accountOneStartingBalance_TF - amount);
    //console.log('accountTwoEndingBalance_TransferFrom: ', accountTwoEndingBalance_TF);
    //console.log('accountTwoStartingBalance_TransferFrom + amount: ', accountTwoStartingBalance_TF + amount);

    const ERC20MintInstance = await ERC20Mint.deployed(10000);

    const accountStartingBalance_Mint = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();

    const accountEndingBalance_Mint = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();
    //console.log('accountMintStartingBalance + amount: ', accountStartingBalance_Mint + amount);
    //console.log('accountMintEndingBalance: ', accountEndingBalance_Mint);
};*/
const { ethers } = require("ethers");
const hre = require("hardhat");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level="info";

async function main() {

  const ERC20Basic = await hre.ethers.getContractFactory("ERC20Base");
  const ercBase = await ERC20Basic.deploy(10000);

  await ercBase.deployed();

  console.log("ERC20Basic deployed to:", ercBase.address);
  
  const [deployer] = await hre.ethers.getSigners();
  const accountTwo = process.env.ACCOUNT_1;

  const accountOneStartingBalance = (await ercBase.balanceOf(deployer.address)).toNumber();
  const accountTwoStartingBalance = (await ercBase.balanceOf(accountTwo)).toNumber();

  const amount = 10;

  const transf = (await ercBase.transfer(accountTwo, amount, { from: deployer.address }));

  await transf.wait();

  const accountOneEndingBalance = (await ercBase.balanceOf(deployer.address)).toNumber();
  const accountTwoEndingBalance = (await ercBase.balanceOf(accountTwo)).toNumber();

  logger.info('accountOneEndingBalance: ',accountOneEndingBalance);
  logger.info('accountOneStartingBalance - amount: ', accountOneStartingBalance - amount);
  logger.info('accountTwoEndingBalance: ', accountTwoEndingBalance);
  logger.info('accountTwoStartingBalance + amount: ', accountTwoStartingBalance + amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });