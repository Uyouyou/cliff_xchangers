
require("@nomicfoundation/hardhat-toolbox");

/**@type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.17",
   networks:  {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Xa1bnENVSUoRHBXxBOBBSt18xWAJjSc1",
      accounts: [
        `0x${"e3b5e75a5567157d49d79d8d6a4d87e9321926c82c7e1407a75fc6189f5457db"}`,
      ],
    },
   },
};

