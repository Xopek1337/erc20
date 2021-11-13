const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ERC20TestOwn', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });

    it('should make token correctly', async () => {
        const ERC20OwnInstance = await ethers.getContractFactory("ERC20own");
        const ERC20Own = await ERC20OwnInstance.deploy(10000);
        await ERC20Own.deployed();

        const accountStartingBalance = (await ERC20Own.balanceOf(accounts[0])).toNumber();

        const amount = 10;

        const mint = (await ERC20Own.mint(accounts[0], amount));

        await mint.wait();

        const accountEndingBalance = (await ERC20Own.balanceOf(accounts[0]));
        
        expect(await accountEndingBalance).to.equal(accountStartingBalance + amount);
    });
});