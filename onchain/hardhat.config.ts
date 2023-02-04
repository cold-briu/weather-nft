import { HardhatUserConfig } from "hardhat/config";
import dot from "dotenv";
dot.config()
import "@nomicfoundation/hardhat-toolbox";


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "KEY";


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    arbitrumGoerli: {
      url: "https://arb-goerli.g.alchemy.com/v2/" + process.env.ALCHEMY_KEY,
      accounts: [process.env.GOERLI_PRIVATE_KEY ?? ""]

    }
  }
};

export default config;
