const router = require("express").Router();
const db = require('../../db/SousthemeDb.js')
// const loginValidation = require("../../models/schemaTheme")


router.get('/theme', async (req, res) => {

    let listeTheme = await db.listeSousTheme()

    res.json(listeTheme)
    return
});


module.exports = router;