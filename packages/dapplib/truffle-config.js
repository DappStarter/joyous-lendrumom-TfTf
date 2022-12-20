require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew noble smart include problem forward survey'; 
let testAccounts = [
"0x6bd785d15c03729b3106736cafe2e3372688856396090cd603ecf343a0f7b019",
"0x21733c5c9500a382fbc92bf001ef9501610907fb8473751a3677f6e70948e02b",
"0x21da184d1e5bc629960fafe1c92fead465432a92c924f6a5a79e647b0dc1cf6e",
"0x85c397d54c24dd447e3a2d6e80a1ae974d952d8790281ca496ed88d4e0681995",
"0xc1226a0ebb20e983739d205c141a8d92d08fd187e04864cd6340640b7070c39b",
"0x3094dffd89e533f4e55b4010c3df2d653e4289152ff923ff08415d99f6ac1417",
"0x0ac40e8ccc994abe3dbb7f58e8d49bb25cd6db6f2610a751f4546ce0ff804e54",
"0x791ee8c882ddc3362a86e875df74b4c2e55afc1d9a1e53967feeb67b1ec5af8c",
"0x5d622135be5e2d5daa0adce1fea0aab0472a3311945a70c64d99dede70c8689e",
"0x118627289053a98fab462bf3b8984670b3bdd729f3410e8067a9d1ed24e99d64"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

