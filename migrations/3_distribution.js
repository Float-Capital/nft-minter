// Scripts to mint and distribute NFT's to a list of users
const nftConfig = require("../nft-config/nft.json");

const ERC721PresetMinterPauserAutoId = artifacts.require(
  "ERC721PresetMinterPauserAutoId"
);

module.exports = async (deployer) => {
  let nft = await ERC721PresetMinterPauserAutoId.deployed();

  for (let i = 0; i < nftConfig.receivers.length; i++) {
    let mint = await nft.mint(nftConfig.receivers[i]);
    console.log(mint);
  }
};
