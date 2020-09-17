const con = require('./variableEnvironment')

let data = {}

data.loginCheck = (courriel) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT * FROM User WHERE COURRIEL = '"+ courriel + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}

data.verificationPasswordDb = (user) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT MDP FROM User WHERE COURRIEL = '"+ user + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}

data.recuperationInfo = (courriel) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT ID_USER,ID_ROLE  FROM user WHERE COURRIEL = '"+ courriel + "'" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;