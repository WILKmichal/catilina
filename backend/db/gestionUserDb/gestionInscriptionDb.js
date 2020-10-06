const con = require('../utilities/1variableEnvironment')

let data = {}

data.ajoueProfile = (keysReq,stringData) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO `user`("+keysReq+")  VALUES("+stringData+")" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.inscription = (id_user,id_profil,id_statut,id_concours) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO `inscription`(ID_USER,ID_PROFIL,ID_STATUT,ID_CONCOURS)  VALUES("+id_user+","+id_profil+","+id_statut+","+id_concours+")" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;