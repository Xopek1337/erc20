require("dotenv/config");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.PRIVATE_KEY;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, process.env.RPC_NODE_RINKEBY),
      network_id: 4,       // Rinkeby
      gasprice: 1000000000,
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      networkCheckTimeout: 99999999,
      timeoutBlocks: 2000000,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true    // Skip dry run before migrations? (default: false for public nets )
    },
  },
  plugins:["solidity-coverage"],

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
            runs: 200
          }
       }
    }
  },
};
