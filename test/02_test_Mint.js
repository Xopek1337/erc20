const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ERC20TestMinit', function () {
    let accounts;

  before(async function () {
    accounts = await web3.eth.getAccounts();
  });
    it('should make token correctly', async () => {
        const ERC20MintInstance = await ethers.getContractFactory("ERC20Mint");
        const ERC20Mint = await ERC20MintInstance.deploy(10000);
        await ERC20Mint.deployed();

        const accountStartingBalance = (await ERC20Mint.balanceOf(accounts[0])).toNumber();

        const amount = 10;

        const mint = (await ERC20Mint.mint(accounts[0], amount));

        await mint.wait();

        const accountEndingBalance = (await ERC20Mint.balanceOf(accounts[0]));
        
        expect(await accountEndingBalance).to.equal(accountStartingBalance + amount);
    });
   it('sender should be an owner', async () => {
        let owner;

        const ERC20MintInstance = await ethers.getContractFactory("ERC20Mint");

        [owner,addr1] = await ethers.getSigners();

        const ERC20Mint = await ERC20MintInstance.deploy(10000);
        await ERC20Mint.deployed();
        
        const amount = 10;

        await expect(
          ERC20Mint.connect(addr1).mint(owner.address, amount)
        ).to.be.revertedWith("sender is not owner");
    }).timeout(10000);
});