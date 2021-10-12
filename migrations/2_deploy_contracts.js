const ERC20Basic = artifacts.require("./ERC20Base");
const ERC20Minit = artifacts.require("./ERC20Minit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(ERC20Basic,10000);
    deployer.deploy(ERC20Minit,10000);
};