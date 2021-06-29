// Scripts to transfer nft

const ERC721PresetMinterPauserAutoId = artifacts.require(
  "ERC721PresetMinterPauserAutoId"
);

module.exports = async (deployer) => {
  let nft = await ERC721PresetMinterPauserAutoId.deployed();

  let fromAddress = "";
  let toAddress = "";
  let tokenId = "";

  nft.safeTransferFrom(fromAddress, toAddress, tokenId);
};
