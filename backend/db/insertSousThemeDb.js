const con = require('./1variableEnvironment')

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

module.exports = data;