const con = require('../utilities/1variableEnvironment')

let data = {}

data.listeArchive = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM `inscription` WHERE `ID_USER` = "+id+ " AND ACTIVATION = 0" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;