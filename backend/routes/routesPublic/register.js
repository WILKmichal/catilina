const router = require("express").Router();
const db = require('../../db/registerDb.js');
const bcrypt = require('bcryptjs')
const registerValidation = require("../../models/schemaRegister");

router.post('/register', async (req, res) => {


    let jsonData = req.body

    //validation du body de la requete
    const value = registerValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //renvoie un select du le courriel
    let verifDuplicataUser = await db.verifDuplicataUser(jsonData.COURRIEL)

    // console.log(verifDuplicataUser.length)
    // console.log(typeof(verifDuplicataUser.length)) 
    // console.log(0)
    // console.log(typeof(0))

    //verfie si le courriel existe
    if (verifDuplicataUser.length !== 0) {
        res.json("user exite deja")
        return
    }

    //hash le password
    let salt = await bcrypt.genSalt(10)
    jsonData.MDP = await bcrypt.hash(jsonData.MDP, salt)


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
    if(positionImgTableau){
    PATH_IMGVal = onlyValuesOfJsonData[positionImgTableau]}

    //remove IMG path from array of values
    onlyValuesOfJsonData.splice(positionImgTableau, 1)

    //recupere les keys du req.body remove l'image et les places dans une string
    keyReqArray.splice(positionImgTableau, 1)
    let keysReq = keyReqArray.toString()


    //recupere les valeurs du req.body et les places dans une string (ajoute des guillemets pour l'insertion)
    for (let i = 0; i < onlyValuesOfJsonData.length; i++) {
        onlyValuesOfJsonData[i] = '"' + onlyValuesOfJsonData[i] + '"'
    }
    var stringData = onlyValuesOfJsonData.join(',');

    //insertion
    try {

        await db.removeConstrain()
        await db.register(keysReq, stringData)

        if (positionImgTableau) {
            let idUser = await db.getID(jsonData.COURRIEL)
            await db.photoInsert(idUser[0].ID_USER, PATH_IMGVal)
        }

        res.json("user cree")
        return
    } catch (e) {
        res.status(422).json(e)
        return
    }
})

module.exports = router;