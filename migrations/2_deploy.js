// migrations/2_deploy.js
// SPDX-License-Identifier: MIT

const nft = require("../nft-config/nft.json");

const ERC721PresetMinterPauserAutoId = artifacts.require(
  "ERC721PresetMinterPauserAutoId"
);

module.exports = function (deployer) {
  deployer.deploy(
    ERC721PresetMinterPauserAutoId,
    nft.name,
    nft.symbol,
    nft.tokenUri
  );
};
