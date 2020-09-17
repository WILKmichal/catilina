const mysql = require('mysql')
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db/loginDb.js')




router.post('/login', async (req, res) => {

    let password = req.body.MDP
    let courriel = req.body.COURRIEL

    if (password && courriel) {
        let results = await db.loginCheck(courriel)

        if (results != 0) {
            let verificationPassword = await db.verificationPasswordDb(courriel)
            let booleenVerificationPassword = await bcrypt.compare(password, verificationPassword[0].MDP)

            if (booleenVerificationPassword) {
                let userInfo = await db.recuperationInfo(courriel)
                const token = jwt.sign({ 'id': userInfo[0].ID_USER, "role": userInfo[0].ID_ROLE }, "srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf")

                res.header({ 'token': token }).json("token send in the header")

            }
            
            else {
                res.json("mot de passe faux")
            }
        } 
        
        else {
            res.json("user doesnt exit")
        }
    }
    
    else {
        res.json('manque de info')
    }
});


module.exports = router;