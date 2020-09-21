const con = require('../utilities/1variableEnvironment')
let data = {}

data.insertSousTheme = (nomSousTheme,idTheme) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO soustheme(NOM_SOUS_THEME,ID_THEME) VALUES ('"+ nomSousTheme +"','" + idTheme + "')" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.deleteSousTheme = (id_sous_theme) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM `soustheme` WHERE `ID_SOUS_THEME`='" + id_sous_theme + "'",(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.deleteConcoursBySousTheme = (id_sous_theme) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM `concours` WHERE `ID_SOUS_THEME`= '" + id_sous_theme + "'",(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}


module.exports = data;