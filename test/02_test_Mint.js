let accounts;

const ERC20Mint = artifacts.require("./ERC20Minit");

describe('ERC20TestMinit', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });
    it('should make token correctly', async () => {
        const ERC20MintInstance = await ERC20Mint.deployed(10000);

        const accountStartingBalance = (await ERC20MintInstance.balanceOf.call(accounts[0])).toNumber();

        const amount = 10;

        await ERC20MintInstance.mint(accounts[0], amount);

        const accountEndingBalance = (await ERC20MintInstance.balanceOf.call(accountOne)).toNumber();

        assert.equal(accountOneEndingBalance, accountOneStartingBalance + amount, "Amount wasn't correctly taken eth");
    });
});