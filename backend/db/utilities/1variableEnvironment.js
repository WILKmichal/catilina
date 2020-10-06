const mysql = require('mysql')

//connection pool pour ne pas avoir a faire conect etc..
const con = mysql.createPool({
    password: '',
    user: 'root',
    database: "mydb",
    host: "localhost",
    port: '3306'
})

module.exports = con;