const ERC20Basic = artifacts.require("./ERC20Base");
const ERC20Minit = artifacts.require("./ERC20Mint");
const ERC20Own = artifacts.require("./ERC20own");
const ERC20AC = artifacts.require("./ERC20AC");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(ERC20Basic,10000);
    deployer.deploy(ERC20Minit,10000);
    deployer.deploy(ERC20Own,10000);
    deployer.deploy(ERC20AC,10000);
};