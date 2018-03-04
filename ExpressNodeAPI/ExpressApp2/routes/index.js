'use strict';
var express = require('express');
var router = express.Router();
var account_controller = require('../controllers/accountController');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Blockchain API' });
});
router.get('/newaccount', account_controller.account_create_get);
router.get('/networkstatus', account_controller.network_status);
module.exports = router;
