# eth-blockchain-demo

db:
pwd: sna2018
dbadminlogin
name: blockchaindemodb
blockchaindemodbsrv.database.windows.net
blockchaindemoResGroup
blockchaindemodbsrv.database.windows.net

https://ropsten.etherscan.io/apis
http://faucet.ropsten.be:3001/
https://faucet.bitfwd.xyz/

https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=0x425c813B54eea8c4fBf307cAb6c154Ada64aF0b4&choe=UTF-8
https://jibrelnetwork.github.io/ethereum-qr-code/demo-simple.html
https://jibrelnetwork.github.io/ethereum-qr-code/demo-advanced.html



address
:
"0xedCA0f1157da96a941805eE3c4D7a2CeF3054F27"
privateKey
:
"0x6046212d003b4c010ac22e38a2c41c7a434b39769f38b3e535a0dc8a3c106c7a"
publicKey
:
"0x68191942e4e367481515d1dd2c30d8094564d1d3455991409a320f55a27eb84527f885456e99fb4c39e100aaa3eb45efabb96b3fec3587e66ec4ff0566f78b69"



function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = web3.eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = web3.eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n" 
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}
run this in admin mode:
npm install --global windows-build-tools

npm install ethereumjs-accounts - old one - depricated
npm install web3-eth

npm install --save-dev ethjs-query
npm install --save-dev ethjs-account
npm install --save-dev ethereumjs-tx
npm install --save-dev ethjs-provider-signer

use ethjs-account for generation, and ethereumjs-tx for signing. If you need a provider to intercept and sign transactions use ethjs-provider-signer.


getTransactionsByAccount("0xE450084e2221a35b847112F524bB590112fA85B4", 2761608, 2761648)

web3.eth.blockNumber
web3.sha3("xyzf")
web3.eth.getTransactionCount("0xE450084e2221a35b847112F524bB590112fA85B4")	
web3.getBlock(web3.eth.blockNumber, true)
web3.eth.getBlock(web3.eth.blockNumber, true)
var hash = web3.sha3("Some string to be hashed");
var hashOfHash = web3.sha3(hash, {encoding: 'hex'});
web3.toHex({test: 'test'});
var value = web3.fromWei('21000000000000', 'finney');
web3.eth.getBalance("0xE450084e2221a35b847112F524bB590112fA85B4");
console.log(web3.eth.getBalance("0xE450084e2221a35b847112F524bB590112fA85B4").toString(10));
var transaction = web3.eth.getTransaction('0x687069dcb838fc7aa69a06ecffe542fcf8831ff9d2fd33a08e47d263a5db02d9');
console.log(transaction);
https://ropsten.etherscan.io/tx/0x687069dcb838fc7aa69a06ecffe542fcf8831ff9d2fd33a08e47d263a5db02d9

web3.eth.getAccounts(callback(error, result){  })

web3.eth.getAccounts((err, acc) => {
    console.log(acc);
	console.log(err);
});
eth_sendRawTransaction
web3.eth.sendRawTransaction
web3.eth.getAccounts(function(error, result) {
    if(error != null)
        console.log("Couldn't get accounts');
   console.log(result[0])
});







//var web3 = new Web3(new Web3.providers.HttpProvider());
//var web3 = new Web3(new Web3.providers.HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));

//const generate = require('ethjs-account').generate;

//var Eth = require('web3-eth');
////if(!web3.isConnected()) {
  
  // show some dialog to ask the user to start a node

//} else {

  // start web3 filters, calls, etc
 
//}

// var version = web3.version.api;
//     console.log("fe");
// $.getJSON('http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x425c813B54eea8c4fBf307cAb6c154Ada64aF0b4&startblock=0&endblock=99999999&sort=asc&apikey=2K3N9UGBGSTAYGJJIZ9FJGV7JVTUQ36KVS', function (data) {
   

 
//         console.log(data );
            
// });
 /*

function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = web3.eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = web3.eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n" 
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}
*/
//console.log(generate('892h@fs8sk^2h8s8shfs.jk39hsoi@hohskd..'));

