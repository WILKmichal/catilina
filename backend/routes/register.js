const router = require("express").Router();
const db = require('../db/registerDb.js');
const bcrypt = require('bcryptjs')
const registerValidation = require("../models/schemaRegister");
const data = require("../db/registerDb.js");

router.post('/register', async (req, res) => {

   
    let jsonData = req.body
   

    //validation du body de la requete
    const value = registerValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
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
    }

    //hash le password
    let salt = await bcrypt.genSalt(10)
    jsonData.MDP = await bcrypt.hash(jsonData.MDP, salt)


    //recupere les keys du req.body et les places dans un tableau
    let keyReqArray = Object.keys(req.body)

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
    
  PATH_IMGVal = onlyValuesOfJsonData[positionImgTableau]

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
        
        await db.register(keysReq, stringData)
        let idUser = await db.getID(jsonData.COURRIEL)
        await db.photoInsert(idUser,PATH_IMGVal)
        res.json("user cree")
    } catch (e) {
        res.status(422).json(e)
    }
})

module.exports = router;