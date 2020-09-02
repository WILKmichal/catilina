var express = require()
const router = require('express').Router();
var mysql = require('mysql');
// let connexion = require('./connex_sql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'DAO'
})


router.post('/concour', function(req, res, next) {
    // Access the provided 'page' and 'limt' query parameters
    // let page = req.query.page;
    // let limit = req.query.limit;


    con.query("SELECT id FROM products ", function(err, result, fields) {
        console.log("rer")
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            result = row.databaseName;
        });


        res.send(result);
    });
})





module.exports = router;