require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
require('dotenv').config();
const mnemonic = process.env.SECRET_PHRASE;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-truffle5");

module.exports = {
  solidity: "0.8.4",

  networks: {
    rinkeby: {
      url: process.env.RPC_NODE_RINKEBY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: "UM88WR6PRIDDS2TDCCYYGGR92TWRVU7TY3"
  },

  plugins:["solidity-coverage"],

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },
};
