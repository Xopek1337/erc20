let accounts;

const ERC20AC = artifacts.require("./ERC20AC");
const truffleAssert = require('truffle-assertions');

describe('ERC20TestAC', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });
    it('should promote role correctly', async () => {
        const ERC20ACInstance = await ERC20AC.deployed(10000);

        await ERC20ACInstance.promoteMinter(accounts[0]);

        const accountStartingBalance = (await ERC20ACInstance.balanceOf.call(accounts[0])).toNumber();

        const amount = 10;

        await ERC20ACInstance.mint(accounts[0], amount);

        const accountEndingBalance = (await ERC20ACInstance.balanceOf.call(accounts[0])).toNumber();

        assert.equal(accountEndingBalance, accountStartingBalance + amount, "Amount wasn't correctly taken eth");
    });
    it('should remote role correctly', async () => {
        const ERC20ACInstance = await ERC20AC.deployed(10000);

        await ERC20ACInstance.promoteMinter(accounts[0]);
        await ERC20ACInstance.remoteMinter(accounts[0]);

        const amount = 10;
        await truffleAssert.reverts(ERC20ACInstance.mint(accounts[0], amount));
    });
});