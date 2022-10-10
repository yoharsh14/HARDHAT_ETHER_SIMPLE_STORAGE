require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xKey"
const ETHERSCAN_API_KEY = process.env.EHTERSCAN_API_KEY || "Key"
const COIN_MARKET_API_KEY = process.env.COIN_MARKET_API_KEY|| "key"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    goerli:{
      url: GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:5,
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      //accounts: hardhat already paste in it
      chainId:31337,
    }
  },
  solidity: "0.8.17",
  etherscan:{
    apiKey:ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled:false,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:COIN_MARKET_API_KEY,
  },
  mocha: {
    timeout: 100000000
  },
};
