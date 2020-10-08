const con = require('../utilities/1variableEnvironment')

let data = {}

data.listeInscription = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM `inscription` WHERE `ID_USER` = "+id ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;