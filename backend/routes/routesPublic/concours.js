const router = require("express").Router();
const db = require('../../db/publicDb/concoursDb.js')
 const concoursValidation = require("../../models/schemaPublic/schemaConcours.js")


router.get('/concours', async (req, res) => {
    
    jsonData = req.body

    const value = concoursValidation.concoursListeValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }
    // TODO try catch a ajouter
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
    
    // TODO try catch a ajouter
    let concoursSpecifique = await db.concours(jsonData.ID_CONCOURS)

    res.json(concoursSpecifique)
    return
});

router.copy('/concours', async (req, res) => {
    
    
    // TODO try catch a ajouter
    let toutConcours = await db.toutConcours()

    res.json(toutConcours)
    return
});

module.exports = router;