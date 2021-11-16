const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ERC20TestBase', function () {
    let accounts;

  before(async function () {
    accounts = await web3.eth.getAccounts();
  });
  it('should put 10000 ERC20Basic in the first account', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const balance = (await ERC20Basic.balanceOf(accounts[0]));

    expect(await balance).to.equal(10000);
  });

  it('should put 20000 ERC20Basic in the two accounts account', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const balanceOne = (await ERC20Basic.balanceOf(accounts[0])).toNumber();
    const balanceTwo = (await ERC20Basic.balanceOf(accounts[1])).toNumber();

    const total = (await ERC20Basic.totalSupply.call()).toNumber();

    expect(await total).to.equal(balanceOne + balanceTwo);
  });

  it('should transfer token correctly', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const accountOneStartingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    const amount = 10;

    const transf = (await ERC20Basic.transfer(accountTwo, amount, { from: accountOne }));

    await transf.wait();

    const accountOneEndingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    expect(await accountTwoEndingBalance).to.equal(accountTwoStartingBalance + amount);
    expect(await accountOneEndingBalance).to.equal(accountOneStartingBalance - amount);
  });

  it('should transferFrom token correctly', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const accountOneStartingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoStartingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    const amount = 10;

    const approved = (await ERC20Basic.approve(accountOne, amount));

    await approved.wait();

    const transfer_From = (await ERC20Basic.transferFrom(accountOne, accountTwo, amount));

    await transfer_From.wait();

    const accountOneEndingBalance = (await ERC20Basic.balanceOf(accountOne)).toNumber();
    const accountTwoEndingBalance = (await ERC20Basic.balanceOf(accountTwo)).toNumber();

    expect(await accountTwoEndingBalance).to.equal(accountTwoStartingBalance + amount);
    expect(await accountOneEndingBalance).to.equal(accountOneStartingBalance - amount);
  });

  it('should approve token correctly', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const amount = 10;

    const approved = (await ERC20Basic.approve(accountTwo, amount,{ from: accountOne }));

    await approved.wait();

    const alowedBalance = (await ERC20Basic.allowance(accountOne,accountTwo)).toNumber();

    expect(await amount).to.equal(alowedBalance);
  });

  it('should not transfer token if amount exceed balance', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const amount = 15000;

    await expect(ERC20Basic.transfer(accountTwo,amount,{from:accountOne})).to.be.revertedWith("amount can not exceed balance");
  }).timeout(10000);

  it('should not transfer token if amount exceed balance', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const amount = 15000;
    await expect(ERC20Basic.transferFrom(accountOne,accountTwo,amount,{from:accountOne})).to.be.revertedWith("amount can not exceed balance");
  }).timeout(10000);

  it('should not approve token', async () => {
    const ERC20BasicInstance = await ethers.getContractFactory("ERC20Base");
    const ERC20Basic = await ERC20BasicInstance.deploy(10000);
    await ERC20Basic.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const amount = 5000;

    const approveAmount = 4000;

    await ERC20Basic.approve(accountTwo, approveAmount,{ from: accountOne });

    await expect(ERC20Basic.transferFrom(accountOne,accountTwo,amount,{from:accountOne})).to.be.revertedWith("amount did not approve");
  });
});