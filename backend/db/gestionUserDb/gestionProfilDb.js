const con = require('../utilities/1variableEnvironment')

let data = {}

data.profil = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT NOM,D_NAISS,SEXE,ADRESSE,TEL,COURRIEL,ETAT_CIVIL,ID_P,FACEBOOK,TWITTER,INSTAGRAM,PRENOM,ID_NATIONALITE FROM `user` WHERE `ID_USER` = " + id + " AND NOT ID_ROLE = 4", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}

data.modifProfil = (id, nom, naissance, sexe, adresse, tel, courriel, etatCivil, idP, face, twitter, insta, prenom, ID_nat) => {
    return new Promise((resolve, reject) => {
        con.query("UPDATE user SET NOM=" + nom + ",D_NAISS=" + naissance + ",SEXE=" + sexe + ",ADRESSE=" + adresse + ",TEL=" + tel + ",COURRIEL=" + courriel + ",ETAT_CIVIL=" + etatCivil + ",ID_P=" + idP + ",FACEBOOK=" + face + ",TWITTER=" + twitter + ",INSTAGRAM=" + insta + ",PRENOM=" + prenom + ",ID_NATIONALITE" + ID_nat + " WHERE ID_USER=" + id, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}

module.exports = data;