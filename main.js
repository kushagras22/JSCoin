const { Blockchain, Transactions, Block } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "eb063a4b3fbf29abd57f48fcc6c6eb1fda7323fb8e787678cb514d0b7d98faf6"
);
const myWalletAddress = myKey.getPublic("hex");

let jscoin = new Blockchain();

const tn1 = new Transactions(myWalletAddress, "Public Key goes here", 50);
tn1.signTransaction(myKey);
jscoin.addTransaction(tn1);

console.log("Starting the miner...");
jscoin.minePendingTransactions(myWalletAddress);

console.log("Balance of Joker is", jscoin.getBalanceofAddress(myWalletAddress));

// Check validity of blockchain
console.log("Is Blockchain valid:", jscoin.isChainValid());
