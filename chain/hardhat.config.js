// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");
require("@typechain/ethers-v5");
const { config } = require("dotenv");
config();


/** @type import('hardhat/config').HardhatUserConfig */
const LOCAL_HOST_URL = process.env.LOCAL_HOST_URL;
const LOCAL_HOST_ACCOUNT = process.env.LOCAL_HOST_PRIVATE_KEY;
const SEPOLIA_ACCOUNT = process.env.SEPOLIA_PRIVATE_KEY;
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const GOERLI_URL = process.env.GOERLI_URL
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL 
module.exports = {
	defaultNetwork: "hardhat",
	solidity: {
		compilers:[
			{
				version: "0.8.7",
			},
			{
				version: "0.6.6",
			},
			{
				version:"0.4.19"
			}
		]
	},
	
	

	

	namedAccounts: {
		deployer: {
			default: 0,
			31337:0,
			11155111:0

		},
		player: {
			default: 1,
		},
	},
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
			forking:{
				url:MAINNET_RPC_URL
			}
		},
		sepolia: {
			accounts: [SEPOLIA_ACCOUNT],
			blockConfirmations: 3,
			url: SEPOLIA_URL,
			chainId: 11155111,
		},
		goerli:{
			accounts: [GOERLI_PRIVATE_KEY],
			blockConfirmations: 0,
			url: GOERLI_URL,
			chainId: 5,
		}
	},
};

// "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "@types/chai@^4.2.0" "@types/mocha@^9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "chai@^4.2.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.1" "ts-node@>=8.0.0" "typechain@^8.1.0"
