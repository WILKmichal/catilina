const con = require('../utilities/1variableEnvironment')

let data = {}

data.listeSousTheme = (idTheme) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_SOUS_THEME,NOM_SOUS_THEME FROM soustheme WHERE ID_THEME = '" + idTheme + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;