const mysql = require('mysql')

//connection pool pour ne pas avoir a faire conect etc..
const con = mysql.createPool({
    password: 'root',
    user: 'root',
    database: "mydb",
    host: "localhost",
    port: '3306'
})

let data = {}

data.app = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from Photo', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

// data.inscription = () => {
//     return new Promise((resolve, reject) => {
//         con.query('SELECT * from User', (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)

//         })
//     })
// }

// data.visualisation = () => {
//     return new Promise((resolve, reject) => {
//         con.query('SELECT * from Concours', (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)

//         })
//     })
// }

module.exports = data;