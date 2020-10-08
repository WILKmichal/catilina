const con = require('../utilities/1variableEnvironment')

let data = {}

data.listeInscription = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM `inscription` WHERE `ID_USER` = "+id+ " AND ACTIVATION = 0" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.listeProfil = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM user WHERE ID_USER IN(SELECT ID_PROFIL FROM inscription WHERE ID_USER = "+id+" AND ACTIVATION = 0)" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.listeConcours = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM concours WHERE ID_CONCOURS IN(SELECT ID_PROFIL FROM inscription WHERE ID_USER = "+id+"  AND ACTIVATION = 0)" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}


module.exports = data;