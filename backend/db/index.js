const mysql = require('mysql')

//connection pool pour ne pas avoir a faire conect etc..
const con = mysql.createPool({
    password: '',
    user: 'root',
    database: "mydb",
    host: "localhost",
    port: '3306'
})

let data = {}

data.photo = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from Photo', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

data.inscription = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from Inscription', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

data.visualisation = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from Concours', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

data.theme = (id) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from theme WHERE ID_THEME ="'+ id + '"', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

data.soustheme = (id) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from soustheme WHERE ID_SOUS_THEME ="'+ id + '"', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}





module.exports = data;