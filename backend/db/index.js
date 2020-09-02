const mysql = require('mysql')

//connection pool pour ne pas avoir a faire conect etc..
const con = mysql.createPool({
    password:'',
    user:'root',
    database:"plantedb",
    host:"localhost",
    port:'3306'
})

let data ={}

data.lourd = () => {
    return new Promise((resolve,reject)=>{
        con.query('SELECT * from plante1', (err,results)=>{
            if(err){
                return reject(err)
            }
            return resolve(results)

        })
    })
}

module.exports = data;

