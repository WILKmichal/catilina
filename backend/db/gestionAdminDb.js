const con = require('./utilities/1variableEnvironment')

let data = {}

data.registerAdmin = (courriel,mdp,nom,prenom,role) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO `user`(COURRIEL,MDP,NOM,PRENOM,ID_ROLE)  VALUES('"+courriel+"','"+mdp+"','"+ nom +"','" + prenom +"','"+role +"')" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.deleteAdmin = (idUser) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM `user` WHERE `ID_USER` = "+idUser ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;