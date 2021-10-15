const ERC20Base = artifacts.require("./ERC20Base");
const ERC20Mint = artifacts.require("./ERC20Mint");
const ERC20Own = artifacts.require("./ERC20own");
const ERC20AC = artifacts.require("./ERC20AC");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(ERC20Base, 10000);
    // deployer.deploy(ERC20Mint, 10000);
    // deployer.deploy(ERC20Own, 10000);
    // deployer.deploy(ERC20AC, 10000);

    const ERC20BaseInstance = await ERC20Base.deployed(); // get the deployed instance of ERC20Basic

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = process.env.ACCOUNT_1;

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    let tx = await ERC20BaseInstance.transfer(accountTwo, amount, { from: accountOne });
    console.log('tx', tx);

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    console.log('accountOneEndingBalance: ', accountOneEndingBalance);
    console.log('accountOneStartingBalance - amount: ', accountOneStartingBalance - amount);
    console.log('accountTwoEndingBalance: ', accountTwoEndingBalance);
    console.log('accountTwoStartingBalance + amount: ', accountTwoStartingBalance + amount);
};