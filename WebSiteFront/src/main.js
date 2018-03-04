require("file-loader?name=index.html!./index.html");

import { groupBy } from 'lodash/collection'
import * as Web3 from 'web3';
import { generate } from 'ethjs-account';

import * as Eth from 'ethjs-query';
import * as HttpProvider  from 'ethjs-provider-http';


var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));



var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!! " + web3.isConnected() + " ";
//console.log(generate('892h@fsdf11ks8sk^2h8s8shfs.jk39hsoi@hohskd'));
//console.log(web3.version);


//const HttpProvider = require('ethjs-provider-http');
const eth = new Eth(new HttpProvider('http://localhost:7545'), { debug: true, logger: console, jsonSpace: 0 });
//eth.getBalance('0x821aEa9a577a9b44299B9c15c88cf3087F3b5544', cb);
//eth.accounts(cb);
eth.blockNumber(cb);



function cb (err, res){
  console.log(res);
    }

// const BN = require('bn.js');
// const HttpProvider = require('ethjs-provider-http');
// const Eth = require('ethjs-query');
// const eth = new Eth(new HttpProvider('http://localhost:7545'));

// eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', cb);