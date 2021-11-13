require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('@nomiclabs/hardhat-ethers');
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
      url: `https://rinkeby.infura.io/v3/7fbc200d29094660a03c4510d6c01189`,
      accounts: [`e6fe3fbe8a1773bbd125137ac0fd30bdc81e9a31cc73ef6a43ba47b09b7a4aad`]
    },
  },

  plugins:["solidity-coverage"],

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },
};
