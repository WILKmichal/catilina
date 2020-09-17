const mysql = require('mysql')
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db/loginDb.js')
const loginValidation = require("../models/schemaLogin")




router.post('/login', async (req, res) => {

    jsonData = req.body

        const value = loginValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
    }

        let results = await db.loginCheck(jsonData.COURRIEL)

        if (results != 0) {
            let verificationPassword = await db.verificationPasswordDb(jsonData.COURRIEL)
            let booleenVerificationPassword = await bcrypt.compare(jsonData.MDP, verificationPassword[0].MDP)

            if (booleenVerificationPassword) {
                let userInfo = await db.recuperationInfo(jsonData.COURRIEL)
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
});


module.exports = router;