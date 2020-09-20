const con = require('./utilities/1variableEnvironment')

let data = {}

data.insertTheme = (themeName) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO theme(NOM_THEME) VALUES ('"+ themeName + "')" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.deleteTheme = (themeName) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM theme WHERE ID_THEME='"+ themeName +"'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.deleteSousThemeByTheme = (themeName) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM `soustheme` WHERE `ID_THEME`='"+ themeName +"'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.selectSousThemebyTheme = (id_theme) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_SOUS_THEME FROM soustheme WHERE `ID_THEME`=" + id_theme,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}



module.exports = data;