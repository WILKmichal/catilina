const router = require("express").Router();
const db = require('../../db/sousThemeDb.js')
 const sousThemeValidation = require("../../models/schemaSousTheme.js")


router.get('/sousTheme', async (req, res) => {
    
    jsonData = req.body

    const value = sousThemeValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    let listeTheme = await db.listeSousTheme(jsonData.ID_THEME)

    res.json(listeTheme)
    return
});


module.exports = router;