
# JSCoin - A Simple JavaScript Blockchain Implementation


Welcome to JSCoin, a learning project where we explore the basics of blockchain technology. 
JSCoin is a simple implementation of a blockchain using JavaScript, featuring key concepts like Proof of Work, Blockchain Verification, Wallet Generation, and Transaction Signing. This project is intended for educational purposes and should not be used in a production environment.

## Features

- Blockchain with Proof of Work (PoW): Secure the blockchain by solving computational puzzles.

- Transaction Verification: Ensure that transactions are valid and correctly signed.

- Wallet Generation: Create your own cryptocurrency wallet with a public and private key.

- Digital Signatures: Sign transactions to prove ownership and authenticity.

## Installation

### 1. Install Library:

```bash
    npm install crypto-js elliptic express nodemon
```

### 2. Generate a keypair:

To carry out transactions on this blockchain, you'll need a keypair. The public key serves as your wallet address, while the private key is used to sign and authorize transactions.

```bash
    const EC = require('elliptic').ec;
    const ec = new EC('secp256k1');

    const myKey = ec.genKeyPair();
```
The `myKey` object contains your public & private keys:

```bash
    console.log('Public key:', myKey.getPublic('hex'));
    console.log('Private key:', myKey.getPrivate('hex'));
```

### 3. Create a blockchain:

```bash
    const { Blockchain, Transactions, Block } = require("./blockchain");

    let jscoin = new Blockchain();
```

### 4 Create a wallet:

```bash
    const myWalletAddress = myKey.getPublic("hex");
```

### 5. Adding and signing transaction:

```bash
    // Transfer 50 coins
    const tn = new Transactions(myWalletAddress, "Public Key goes here", 50);
    tn.signTransaction(myKey); 
    jscoin.addTransaction(tn);
```

### 6. Mine a new block:
```bash
    jscoin.minePendingTransactions(myWalletAddress);
```

### 7. Check blockchain validity:
```bash
    console.log("Is Blockchain valid:", jscoin.isChainValid());
```
