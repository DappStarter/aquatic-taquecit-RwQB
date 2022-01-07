require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note spice comfort install climb surge trust'; 
let testAccounts = [
"0x88bf211693a4a79a054028d10b5369d0ccbff74f84c6d47beb46dfff855da30f",
"0x362c8d020c611861da8ac3c569b673c0d57b3f86e7b8ef99429c6157bc50c331",
"0x2d462b5a088bb661bb37c50cdcf525685fdbd9572e348b66953c9b9d0c9aa9ab",
"0xc1ea7c5b52782c1eded0cbc123f37dc8a20c9f1b2085ed817ce6f5914e218b3d",
"0x884472b5e47e504d075a43aefec199cf17a3c41a721ce1faa77207ffeeaac8b2",
"0x50c8edb78f08991303f99100956102b1556cb6f3409644df7e55536a196dbcff",
"0xbe6d7a622c458d8be9136ddb0493cf72f7d31c72f3f677dac3e26ab18d96beb5",
"0x734ca3322121fe50b8e682ba210534714ad5f980f614828638363871c51f007b",
"0x616394f9af3f82ac9bef7a860522b126e6e5e9a7204392203d0fcdd1c5b815a3",
"0xe0375c2a993acc11e8a5058deb6d89c842494f530f6df2971c3bfcf4f0e4f41f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


