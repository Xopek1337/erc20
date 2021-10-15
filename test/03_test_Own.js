let accounts;

const ERC20Own = artifacts.require("./ERC20own");
const truffleAssert = require('truffle-assertions');

describe('ERC20TestOwn', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });
    it('should make token correctly', async () => {
        const ERC20OwnInstance = await ERC20Own.deployed(10000);

        const accountStartingBalance = (await ERC20OwnInstance.balanceOf.call(accounts[0])).toNumber();

        const amount = 10;

        await ERC20OwnInstance.mint(accounts[0], amount);

        const accountEndingBalance = (await ERC20OwnInstance.balanceOf.call(accounts[0])).toNumber();

        assert.equal(accountEndingBalance, accountStartingBalance + amount, "Amount wasn't correctly taken eth");
    });
});