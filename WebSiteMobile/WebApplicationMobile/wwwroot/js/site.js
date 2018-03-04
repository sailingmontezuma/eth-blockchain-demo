// Write your JavaScript code.


var store = new Storage();

// Add array to storage
var products = [
    { name: "Fish", price: 2.33 },
    { name: "Bacon", price: 1.33 }
];
store.set("products", products);

// Retrieve items from storage
var products = store.get("products");




console.log('1234');


window.localStorage.setItem("message", "Hello World!");

