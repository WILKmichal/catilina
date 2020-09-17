const router = require("express").Router();
const db = require('../db/registerDb.js');
const bcrypt = require('bcryptjs')
const registerValidation = require("../models/schemaRegister")

router.post('/register', async (req, res) => {

    let jsonData = req.body

    //validation du body de la requete
    const value = registerValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
    }

    //renvoie un select du le courriel
    let verifDuplicataUser = await db.verifDuplicataUser(jsonData.COURRIEL)

    //verfie si le courriel existe
    if (verifDuplicataUser.length != 0) {
        res.json("user exite deja")
    }
    //gener une chaine de character avec les keys de body et un array avec les informations correspondante



    //hash le password
    let salt = await bcrypt.genSalt(10)
    jsonData.MDP = await bcrypt.hash(jsonData.MDP, salt)

    //rajoute le role du user (par defaut etudiant = 1) A FAIREs

    //recupere les keys du req.body et les places dans une string
    let keysReq = Object.keys(req.body).toString()
    onlyValuesOfJsonData = Object.values(jsonData)

    //recupere les valeurs du req.body et les places dans une string (ajoute des guillemets pour l'insertion)
    for (let i = 0; i < onlyValuesOfJsonData.length; i++) {
        onlyValuesOfJsonData[i] = '"' + onlyValuesOfJsonData[i] + '"'
    }
    var stringData = onlyValuesOfJsonData.join(',');

    //insertion
    try {
        await db.register(keysReq, stringData)
        res.json("user cree")
    } catch (e) {
        res.status(422).json("erreur insertion dans la db")
    }
})

module.exports = router;