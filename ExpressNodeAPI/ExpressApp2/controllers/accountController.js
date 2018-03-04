//var Account = require('../models/Account');

var Web3 = require('web3');
var generate = require('ethjs-account').generate;
var randSeed = require('random-seed').create();

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));



exports.accounts_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Account list');
};

 
exports.account_detail = function (req, res) {
    res.send("is connected::: " + web3.isConnected() );
};
exports.network_status = function (req, res) {
    res.send("is connected::: " + web3.isConnected());
};
 
exports.account_create_get = function (req, res) {
    var seed = rundomNumber() + randSeed(80) + rundomNumber() ;
    var newaccount = generate(seed);
    
    res.send(newaccount);
};

 
exports.account_create_post = function (req, res) {
    res.send('seed sample' + randSeed(80));
};

 
exports.account_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Account delete GET');
};

 
exports.account_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Account delete POST');
};

function rundomNumber() {
    return (Math.ceil(Math.random() * 100000000000000000000) * Math.PI).toString();
}

//exports.create = function (req, res) {
//    // Create and Save a new Note
//    if (!req.body.content) {
//        return res.status(400).send({ message: "Note can not be empty" });
//    }

//    var note = new Note({ title: req.body.title || "Untitled Note", content: req.body.content });

//    note.save(function (err, data) {
//        if (err) {
//            console.log(err);
//            res.status(500).send({ message: "Some error occurred while creating the Note." });
//        } else {
//            res.send(data);
//        }
//    });
//};


//exports.findAll = function (req, res) {
//    // Retrieve and return all notes from the database.
//    Note.find(function (err, notes) {
//        if (err) {
//            console.log(err);
//            res.status(500).send({ message: "Some error occurred while retrieving notes." });
//        } else {
//            res.send(notes);
//        }
//    });
//};


//exports.update = function (req, res) {
//    // Update a note identified by the noteId in the request
//    Note.findById(req.params.noteId, function (err, note) {
//        if (err) {
//            console.log(err);
//            if (err.kind === 'ObjectId') {
//                return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
//            }
//            return res.status(500).send({ message: "Error finding note with id " + req.params.noteId });
//        }

//        if (!note) {
//            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
//        }

//        note.title = req.body.title;
//        note.content = req.body.content;

//        note.save(function (err, data) {
//            if (err) {
//                res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
//            } else {
//                res.send(data);
//            }
//        });
//    });
//};



