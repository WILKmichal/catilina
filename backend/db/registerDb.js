const con = require('./variableEnvironment')

data = {}

data.verifDuplicataUser = (courriel) => {
    return new Promise((resolve, reject) => {

        con.query("SELECT COURRIEL  FROM User WHERE COURRIEL = '" + courriel + "'", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    }).catch(() => {return "Promise Rejected for db.verifDuplicataUser"});

}


data.register = (keys, data) => {
    return new Promise((resolve, reject) => {

        con.query('INSERT INTO user(' + keys + ') VALUES(' + data + '); ', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    }).catch(() => {return "Promise Rejected for db.register  "});

}

module.exports = data;