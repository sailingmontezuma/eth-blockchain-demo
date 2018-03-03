require("file-loader?name=index.html!./index.html");

import {groupBy} from 'lodash/collection'

var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!";

