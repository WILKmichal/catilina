const con = require('../utilities/1variableEnvironment')

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

data.deleteConcours = (id_concours) => {
    return new Promise((resolve, reject) => {
        con.query  ("DELETE FROM `concours` WHERE `ID_CONCOURS`= '" + id_concours+"'",(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}



data.getIdConcours = (libel_sh) => {
    return new Promise((resolve, reject) => {
        con.query  ("SELECT `ID_CONCOURS` FROM `concours` WHERE `LIBEL_SH` = '" + libel_sh +"'",(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

data.insertPhoto = (id_concours,path_img) => {
    return new Promise((resolve, reject) => {
        con.query  ("INSERT INTO `photo`(`PATH_IMG`, `ID_PATH`) VALUES ('" + id_concours+"','"+ path_img + "')",(err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve( results )

        })
    })

}

module.exports = data;