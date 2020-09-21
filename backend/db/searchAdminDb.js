const con = require('./utilities/1variableEnvironment')

data = {}

data.searchRole = (id_role) => {
    return new Promise((resolve, reject) => {

        con.query("SELECT * FROM `user` WHERE `ID_ROLE`="+ id_role, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}

module.exports = data; 