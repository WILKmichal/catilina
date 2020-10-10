const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaGestionConcours/schemaGestionSousTheme")
const db = require("../../../db/gestionConcoursDb/gestionSousThemeDb.js")
const dbUtil = require('../../../db/utilities/foreignKeyConstrain')

router.post('/gestionSousTheme', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.sousThemeCreation(jsonData)

    if (value.error) {
        res.status(200).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(201).json("vous n'avez pas les droits")
        return
    }

    try {
        await db.insertSousTheme(jsonData.NOM_SOUS_THEME,jsonData.ID_THEME)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("insert sousTheme success")
    return

});

router.delete('/gestionSousTheme', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.sousThemeSuppr(jsonData)

    if (value.error) {
        res.status(200).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(201).json("vous n'avez pas les droits")
        return
    }

    try {
        await dbUtil.removeConstrain()
        await db.deleteSousTheme(jsonData.ID_SOUS_THEME)
        await db.deleteConcoursBySousTheme(jsonData.ID_SOUS_THEME)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("delete sousTheme et concours success")
    return

});


module.exports = router;