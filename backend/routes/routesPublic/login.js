const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../../db/PublicDb/loginDb.js')
const loginValidation = require("../../models/schemaPublic/schemaLogin")




router.post('/login', async (req, res) => {

    jsonData = req.body

        const value = loginValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

        let results = await db.loginCheck(jsonData.COURRIEL)

        if (results != 0) {
            let verificationPassword = await db.verificationPasswordDb(jsonData.COURRIEL)
            let booleenVerificationPassword = await bcrypt.compare(jsonData.MDP, verificationPassword[0].MDP)

            if (booleenVerificationPassword) {
                let userInfo = await db.recuperationInfo(jsonData.COURRIEL)
                const token = jwt.sign({ 'id': userInfo[0].ID_USER, "role": userInfo[0].ID_ROLE }, "srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf")

                res.header({ 'token': token }).json({"role" : userInfo[0].ID_ROLE })

            }
            
            else {
                res.json("mot de passe faux")
                return
            }
        } 
        
        else {
            res.json("user doesnt exit")
            return
        }
});


module.exports = router;