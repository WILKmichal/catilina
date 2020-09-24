const con = require('./1variableEnvironment')

data = {}

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

data.addConstrain = () => {
    return new Promise((resolve, reject) => {

        con.query("SET FOREIGN_KEY_CHECKS=1;", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })
}


module.exports = data;