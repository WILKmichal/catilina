const router = require("express").Router();
const db = require('../../db/themeDb.js')
// const loginValidation = require("../../models/schemaTheme")


router.get('/theme', async (req, res) => {

    let listeTheme = await db.listeTheme()

    res.json(listeTheme)
    return
});


module.exports = router;