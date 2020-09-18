const con = require('./1variableEnvironment')

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

module.exports = data;