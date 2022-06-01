require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  network:{
    rinkeby:{
      url : process.env.REACT_APP_RINKEBY_URL,
      account : [process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey: process.env.REACT_APP_ETHSCAN_API,
  }
};
