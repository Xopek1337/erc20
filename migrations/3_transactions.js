const ERC20Basic = artifacts.require("./ERC20Base");
const ERC20Mint = artifacts.require("./ERC20Mint");
const ERC20Own = artifacts.require("./ERC20own");
const ERC20AC = artifacts.require("./ERC20AC");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info";

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(ERC20Basic,10000);
    await deployer.deploy(ERC20Mint,10000);

    const ERC20BaseInstance = await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = process.env.ACCOUNT_1;

    const accountOneStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    const amount = 10;
    await ERC20BaseInstance.transfer(accountTwo,amount,{from:accountOne});
    const accountOneEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();


    logger.info('accountOneEndingBalance: ', accountOneEndingBalance);
    logger.info('accountOneStartingBalance - amount: ', accountOneStartingBalance - amount);
    logger.info('accountTwoEndingBalance: ', accountTwoEndingBalance);
    logger.info('accountTwoStartingBalance + amount: ', accountTwoStartingBalance + amount);
    

    const balance = (await ERC20BaseInstance.balanceOf.call(accounts[0])).toNumber();

    logger.info('balanceOfSecondAccount: ', balance);
    
    const total = (await ERC20BaseInstance.totalSupply.call()).toNumber();

    logger.info('total balance on two accounts: ', total);

    const accountOneStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    await ERC20BaseInstance.approve(accountOne, amount);

    await ERC20BaseInstance.transferFrom(accountOne, accountTwo, amount);

    const accountOneEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    logger.info('accountOneEndingBalance_TransferFrom: ', accountOneEndingBalance_TF);
    logger.info('accountOneStartingBalance_TransferFrom - amount: ', accountOneStartingBalance_TF - amount);
    logger.info('accountTwoEndingBalance_TransferFrom: ', accountTwoEndingBalance_TF);
    logger.info('accountTwoStartingBalance_TransferFrom + amount: ', accountTwoStartingBalance_TF + amount);
};



