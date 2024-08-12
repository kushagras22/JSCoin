const { Blockchain, Transactions, Block } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "Your Private Key"
);
const myWalletAddress = myKey.getPublic("hex");

let jscoin = new Blockchain();

const tn = new Transactions(myWalletAddress, "Public Key goes here", 50);
tn.signTransaction(myKey);
jscoin.addTransaction(tn);

console.log("Starting the miner...");
jscoin.minePendingTransactions(myWalletAddress);

console.log("Balance of Joker is", jscoin.getBalanceofAddress(myWalletAddress));

// Check validity of blockchain
console.log("Is Blockchain valid:", jscoin.isChainValid());
