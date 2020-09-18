const router = require("express").Router();
const db = require('../../db/concoursDb.js')
 const concoursValidation = require("../../models/schemaConcours.js")


router.get('/concours', async (req, res) => {
    
    jsonData = req.body

    const value = concoursValidation.concoursListeValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }
    
    let listeTheme = await db.listeConcours(jsonData.ID_SOUS_THEME)

    res.json(listeTheme)
    return
});

router.post('/concours', async (req, res) => {
    
    jsonData = req.body

    const value = concoursValidation.concoursValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }
    
    let concoursSpecifique = await db.concours(jsonData.ID_CONCOURS)

    res.json(concoursSpecifique)
    return
});

module.exports = router;