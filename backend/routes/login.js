const mysql = require('mysql')
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db/index.js')



var Users = [];



router.post('/login', async (req, res) => {

    let password = req.body.password
    let user = req.body.user

    if (password && user) {
        let results = await db.user(user)

        if (results) {
            let verificationPassword = await db.verificationPasswordDb(user)
            let booleenVerificationPassword = await bcrypt.compare(password, verificationPassword[0].MDP)

            if (booleenVerificationPassword) {
                let idI = await db.recuperationInfo(user)
                const token = jwt.sign({ 'id': idI, "lokk": "1313" }, "srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf")

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