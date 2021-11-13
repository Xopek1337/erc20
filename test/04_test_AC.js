const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ERC20TestAC', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });
    it('should promote role correctly', async () => {
        const ERC20ACInstance = await ethers.getContractFactory("ERC20AC");
        const ERC20AC = await ERC20ACInstance.deploy(10000);
        await ERC20AC.deployed();

        const accountStartingBalance = (await ERC20AC.balanceOf(accounts[0])).toNumber();

        const amount = 10;

        const promote = (await ERC20AC.promoteMinter(accounts[0]));

        await promote.wait();

        const mint = (await ERC20AC.mint(accounts[0], amount));

        await mint.wait();

        const accountEndingBalance = (await ERC20AC.balanceOf(accounts[0]));
        
        expect(await accountEndingBalance).to.equal(accountStartingBalance + amount);
    });
    it('should remote role correctly', async () => {
        const ERC20ACInstance = await ethers.getContractFactory("ERC20AC");
        const ERC20AC = await ERC20ACInstance.deploy(10000);
        await ERC20AC.deployed();

        const promote = (await ERC20AC.promoteMinter(accounts[0]));

        await promote.wait();

        const remote = (await ERC20AC.remoteMinter(accounts[0]));

        await remote.wait();

        const amount = 10;

        await expect(ERC20AC.mint(accounts[0], amount)).to.be.revertedWith('AccessControl');
    });
});