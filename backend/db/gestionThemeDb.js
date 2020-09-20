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

data.removeConstrain = () => {
    return new Promise((resolve, reject) => {

        con.query("SET FOREIGN_KEY_CHECKS=0;", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

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


module.exports = data;