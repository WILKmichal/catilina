const con = require('./1variableEnvironment')

let data = {}

data.insertConcours = (libel_sh,libel_L,date_fin,id_sous_theme) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO concours(LIBEL_SH,LIBEL_L,DATE_FIN,ID_SOUS_THEME) VALUES ('"+ libel_sh +"','" + libel_L+"','" + date_fin +"','" +id_sous_theme+ "')" ,(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;