const con = require('./1variableEnvironment')

let data = {}

data.listeConcours = (idSousTheme) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_CONCOURS,LIBEL_SH,LIBEL_L,DATE_FIN FROM concours WHERE ID_SOUS_THEME = '" + idSousTheme + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.concours = (idSousTheme) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_SOUS_THEME,LIBEL_SH,LIBEL_L,DATE_FIN FROM concours WHERE ID_CONCOURS = '" + idSousTheme + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;