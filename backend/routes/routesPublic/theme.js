const router = require("express").Router();
const db = require('../../db/publicDb/themeDb.js')
// const loginValidation = require("../../models/schemaTheme")


router.get('/theme', async (req, res) => {

    // TODO try catch a ajouter
    let listeTheme = await db.listeTheme()
    console.log(listeTheme)

    res.json(listeTheme)
    return
});


module.exports = router;