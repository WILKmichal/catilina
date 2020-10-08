const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaRouteEtudiante/schemaInscription")
const db = require("../../../db/gestionUserDb/gestionInscriptionDb")
const constrain = require("../../../db/utilities/foreignKeyConstrain")
// const dbUtil = require("../../../db/utilities/foreignKeyConstrain")

router.post('/InscriptionConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.inscriptionConcours(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    //recupere les keys du req.body et les places dans un tableau
    let keyReqArray = Object.keys(jsonData)


    //position dans l'array de l'image

    let positionImgTableau

    for (var i = 0; i < keyReqArray.length; i++) {
        if (keyReqArray[i] == 'PATH_IMG') {
            positionImgTableau = i
        }
    }


    //recupere les valeures du req.body et les places dans une string
    onlyValuesOfJsonData = Object.values(jsonData)


    //valeur  de PATH_IMG
    if (positionImgTableau) {
        PATH_IMGVal = onlyValuesOfJsonData[positionImgTableau]
        //remove IMG path from array of values
        onlyValuesOfJsonData.splice(positionImgTableau, 1)
        //recupere les keys du req.body remove l'image et les places dans une string
        keyReqArray.splice(positionImgTableau, 1)
    }

    //position dans l'array du id concours

    let idConcours

    for (var i = 0; i < keyReqArray.length; i++) {
        if (keyReqArray[i] == 'ID_CONCOURS') {
            idConcours = i
        }
    }

    if (idConcours) {
        //remove id concours from array of values
        onlyValuesOfJsonData.splice(idConcours, 1)
        //recupere les keys du req.body remove l'image et les places dans une string
        keyReqArray.splice(idConcours, 1)
    }

    let keysReq = keyReqArray.toString()


    //recupere les valeurs du req.body et les places dans une string (ajoute des guillemets pour l'insertion)
    for (let i = 0; i < onlyValuesOfJsonData.length; i++) {
        onlyValuesOfJsonData[i] = '"' + onlyValuesOfJsonData[i] + '"'
    }
    var stringData = onlyValuesOfJsonData.join(',');

    //recuperation de l'id du user
    const idUser = MiddlePass.id

    //ajoue du role profil 
    keysReq = keysReq + ",ID_ROLE"
    //ajoue du role dans les variables 
    stringData = stringData + ',4'

    // ! "\"michal@gmail.co\",\"FALSE\""
    // ! "\"michal@gmail.co\",\"FALSE\"\",4\""

    //insertion
    try {
        await constrain.removeConstrain()
        lastId = await db.ajoueProfile(keysReq, stringData)
        // res.json({"id":idUser,"idprofil":lastId.insertId,"role":"0","idconcours":jsonData.ID_CONCOURS})
        // return
        await db.inscription(idUser, lastId.insertId, "0", jsonData.ID_CONCOURS)
        res.json("inscription reussi")
        return
        // res.json({ "keys": keysReq, "data": stringData, "user": idUser })

    } catch (e) {
        res.status(422).json(e)
        return
    }





});


//TODO route modification
router.options('/InscriptionConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body
});


module.exports = router;