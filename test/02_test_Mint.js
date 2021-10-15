let accounts;

const ERC20Mint = artifacts.require("./ERC20Mint");
const truffleAssert = require('truffle-assertions');
describe('ERC20TestMinit', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });
    it('should make token correctly', async () => {
        const ERC20MintInstance = await ERC20Mint.deployed(10000);

        const accountStartingBalance = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();

        const amount = 10;

        await ERC20MintInstance.mint(accounts[0], amount);

        const accountEndingBalance = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();

        assert.equal(accountEndingBalance, accountStartingBalance + amount, "Amount wasn't correctly taken eth");
    });
    it('sender should be an owner', async () => {
        const ERC20MintInstance = await ERC20Mint.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const amount = 10;
        await truffleAssert.reverts(ERC20MintInstance.mint(accountOne,amount,{from:accountTwo}),"sender is not owner");
    }).timeout(10000);
});