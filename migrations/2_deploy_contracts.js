const ERC20Basic = artifacts.require("./ERC20Base");
const ERC20Mint = artifacts.require("./ERC20Mint");
const ERC20Own = artifacts.require("./ERC20own");
const ERC20AC = artifacts.require("./ERC20AC");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(ERC20Basic,10000);
    await deployer.deploy(ERC20Mint,10000);
};