const con = require('../utilities/1variableEnvironment')

let data = {}

data.listeTheme = () => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM theme" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;
