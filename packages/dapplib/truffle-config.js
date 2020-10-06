require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name regret spice pumpkin inflict cloth equal gasp'; 
let testAccounts = [
"0xacedb3edf5e1b95e502baa8623433a69a909f6e177910ca600e6376e563b74c2",
"0xa9269d2fdf6632ae003f17a9fab35af4c6d895e11f3bb11cf0b0a5dc46ebc64c",
"0x47fb2b9e041c978ad2f7e686fe1407db149f2793dd935fb03bf5f40c316615fb",
"0xb2f2518f2b734eb93f0519db953259bb8bef41e52238481904786be7d50a16bc",
"0x3cc2e8729fb64cbd2d9311f80d3c606348894227472c56d527496a0f0b812be5",
"0x3fffc5c8bfbf3761df58489718aa5dac33bd903b1ed0033c90117643559c3088",
"0xef90a4d261fd00823249dde33e7a8066258a0f45a7ca66f024aaaafa8dbf5e3e",
"0x6090bdb8fe95e4b7517bd19c77c0d970ec931c766abd57bcfa846753b9d8623d",
"0xff96380b4affa9dc33f4b504d3de73384b98cd091bc6ffbe97449dfdbf227966",
"0x4476b156aae735009269c0646a7ebae3255b1033c4828bf446a67dd4421439e2"
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
            version: '^0.5.11'
        }
    }
};
