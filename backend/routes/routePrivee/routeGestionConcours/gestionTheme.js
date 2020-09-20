const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaGestionTheme")
const db = require("../../../db/gestionThemeDb.js")

router.post('/gestionTheme', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.creationDeTheme(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        await db.insertTheme(jsonData.NOM_THEME)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("insert  Theme success")
    return

});

router.delete('/gestionTheme', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.deleteTheme(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        await db.removeConstrain()
        await db.deleteTheme(jsonData.ID_THEME)

        let sousTheme = await db.getSousTheme(jsonData.ID_THEME)
        sousTheme = sousTheme.toString()
        
        await db.deleteSousTheme(jsonData.ID_THEME)
        await db.deleteConcours(sousTheme)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("delete  Theme success")
    return

});



module.exports = router;