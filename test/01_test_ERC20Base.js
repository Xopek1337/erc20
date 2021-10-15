let accounts;

const ERC20Basic = artifacts.require("./ERC20Base");
const truffleAssert = require('truffle-assertions');
describe('ERC20TestBase', function () {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });

    it('should put 10000 ERC20Basic in the first account', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const balance = await ERC20BasicInstance.balanceOf.call(accounts[0]);

        assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });

    it('should put 20000 ERC20Basic in the two accounts account', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const balanceOne = (await ERC20BasicInstance.balanceOf.call(accounts[0])).toNumber();
        const balanceTwo = (await ERC20BasicInstance.balanceOf.call(accounts[1])).toNumber();
        const total = (await ERC20BasicInstance.totalSupply.call()).toNumber();
        assert.equal(balanceOne+balanceTwo,total, "20000 wasn't in the two accounts");
    });

    it('should transfer token correctly', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);

        // Setup 2 accounts.
        const accountOne = accounts[0];
        const accountTwo = accounts[1];

        // Get initial balances of first and second account.
        const accountOneStartingBalance = (await ERC20BasicInstance.balanceOf.call(accountOne)).toNumber();
        const accountTwoStartingBalance = (await ERC20BasicInstance.balanceOf.call(accountTwo)).toNumber();

        // Make transaction from first account to second.
        const amount = 10;
        await ERC20BasicInstance.transfer(accountTwo, amount, { from: accountOne });
        // Get balances of first and second account after the transactions.
        const accountOneEndingBalance = (await ERC20BasicInstance.balanceOf.call(accountOne)).toNumber();
        const accountTwoEndingBalance = (await ERC20BasicInstance.balanceOf.call(accountTwo)).toNumber();

        assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
    });
    it('should transferFrom token correctly', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);

        const accountOne = accounts[0];
        const accountTwo = accounts[1];

        const accountOneStartingBalance = (await ERC20BasicInstance.balanceOf.call(accountOne)).toNumber();
        const accountTwoStartingBalance = (await ERC20BasicInstance.balanceOf.call(accountTwo)).toNumber();

        const amount = 10;

        await ERC20BasicInstance.approve(accountOne, amount);
        await ERC20BasicInstance.transferFrom(accountOne, accountTwo, amount);

        const accountOneEndingBalance = (await ERC20BasicInstance.balanceOf.call(accountOne)).toNumber();
        const accountTwoEndingBalance = (await ERC20BasicInstance.balanceOf.call(accountTwo)).toNumber();

        assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
    });
    it('should approve token correctly', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const amount = 10;

        await ERC20BasicInstance.approve(accountTwo, amount,{ from: accountOne });

        const alowedBalance = (await ERC20BasicInstance.allowance(accountOne,accountTwo)).toNumber();

        assert.equal(amount, alowedBalance, "Amount wasn't correctly approve from the sender");
    });
    it('should not transfer token if amount exceed balance', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const amount = 15000;
        await truffleAssert.reverts(ERC20BasicInstance.transfer(accountTwo,amount,{from:accountOne}),"amount can not exceed balance");
    }).timeout(10000);
    it('should not transfer token if amount exceed balance', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const amount = 15000;
        await truffleAssert.reverts(ERC20BasicInstance.transferFrom(accountOne,accountTwo,amount,{from:accountOne}),"amount can not exceed balance");
    }).timeout(10000);
    it('should not approve token', async () => {
        const ERC20BasicInstance = await ERC20Basic.deployed(10000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const amount = 5000;
        const approveAmount = 4000;
        await ERC20BasicInstance.approve(accountTwo, approveAmount,{ from: accountOne });
        await truffleAssert.reverts(ERC20BasicInstance.transferFrom(accountOne,accountTwo,amount,{from:accountOne}),"amount did not approve");
    });
});