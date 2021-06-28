# NFT Minter tool

This tool can be used to mint NFT's

## Tool Guidelines

_I recommend installing [ipfs desktop](https://github.com/ipfs/ipfs-desktop) for storing the image and tokenUri_

1. Create a secretsManager.js file and add rpc endpoint & mnemonic for wallet that has some matic (or eth etc) for deploying contracts and minting nfts

2. Upload the image to ipfs

3. Configure tokenUri.json for the NFT you would like to create

4. Upload the tokenUri.json to ipfs

5. Configure nft.json

6. Run migration scripts

## Scripts

`truffle develop` - Run a local blockchain

`truffle migrate` - Deploys NFT & distributes to list (local)

`truffle migrate --network mumbai` - Deploys NFT & distributes to list (mumbai)

`truffle migrate --network polygon` - Deploys NFT & distributes to list (polygon)

## Further work

- Incorporate ipfs.js into the tool to automate uploading the tokenURI & image

---

[Original resource for code](https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961)

## Additional Resources

Tip for generating mnemonic:
`yarn add global bip39`
` node -e 'console.log(require("bip39").generateMnemonic())'`

https://github.com/kyledewy/eth-keys <- ethersjs wrapper that can be used to convert mnemonic to pvt key & get public address of mnemonic (I reviewed the code, at time of writing no weird backdoors)
