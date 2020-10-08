const con = require('../utilities/1variableEnvironment')

let data = {}

data.gestionDashboard = (ID_STATUT) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_STATUT FROM inscription  = '" + ID_STATUT  + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;