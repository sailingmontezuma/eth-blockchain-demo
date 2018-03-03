require("file-loader?name=index.html!./index.html");

import { groupBy } from 'lodash/collection'
import * as Web3 from 'web3';
import { generate } from 'ethjs-account';

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));



var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!! --" + web3.isConnected() + " ";


console.log(web3.version);
