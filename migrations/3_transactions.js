const ERC20Basic = artifacts.require("./ERC20Base");
const ERC20Mint = artifacts.require("./ERC20Mint");
const ERC20Own = artifacts.require("./ERC20own");
const ERC20AC = artifacts.require("./ERC20AC");
module.exports = async function(deployer, network, accounts) {
    const ERC20BaseInstance = await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = process.env.ACCOUNT_1;

    const accountOneStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    const amount = 10;
    await ERC20BaseInstance.transfer(accountTwo,amount,{from:accountOne});
    const accountOneEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    console.log('accountOneEndingBalance: ', accountOneEndingBalance);
    console.log('accountOneStartingBalance - amount: ', accountOneStartingBalance - amount);
    console.log('accountTwoEndingBalance: ', accountTwoEndingBalance);
    console.log('accountTwoStartingBalance + amount: ', accountTwoStartingBalance + amount);
    const balance = (await ERC20BaseInstance.balanceOf.call(accounts[0])).toNumber();
    console.log('balanceOfSecondAccount: ', balance);
    const total = (await ERC20BaseInstance.totalSupply.call()).toNumber();
    console.log('total balance on two accounts: ', total);

    const accountOneStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    await ERC20BaseInstance.approve(accountOne, amount);

    await ERC20BaseInstance.transferFrom(accountOne, accountTwo, amount);

    const accountOneEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance_TF = (await ERC20BaseInstance.balanceOf.call(accountTwo)).toNumber();

    console.log('accountOneEndingBalance_TransferFrom: ', accountOneEndingBalance_TF);
    console.log('accountOneStartingBalance_TransferFrom - amount: ', accountOneStartingBalance_TF - amount);
    console.log('accountTwoEndingBalance_TransferFrom: ', accountTwoEndingBalance_TF);
    console.log('accountTwoStartingBalance_TransferFrom + amount: ', accountTwoStartingBalance_TF + amount);

    const ERC20MintInstance = await ERC20Mint.deployed(10000);

    const accountStartingBalance_Mint = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();

    const accountEndingBalance_Mint = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();
    console.log('accountMintStartingBalance + amount: ', accountStartingBalance_Mint + amount);
    console.log('accountMintEndingBalance: ', accountEndingBalance_Mint);
};