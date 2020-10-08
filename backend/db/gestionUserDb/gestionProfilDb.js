const con = require('../utilities/1variableEnvironment')

let data = {}

data.profil = (id) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT NOM,D_NAISS,SEXE,ADRESSE,TEL,COURRIEL,ETAT_CIVIL,ID_P,FACEBOOK,TWITTER,INSTAGRAM,PRENOM,ID_NATIONALITE FROM `user` WHERE `ID_USER` = "+id+ " AND NOT ID_ROLE = 4" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;