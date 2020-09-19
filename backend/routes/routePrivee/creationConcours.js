const router = require("express").Router();
const verified = require("../../middleware/verifToken")
const concoursValidationCreation = require("../../models/schemaCreationConcours")
const db = require("../../db/insertConcours.js")

router.post('/creationConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = concoursValidationCreation(jsonData)

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
        await db.insertConcours(jsonData.LIBEL_SH,jsonData.LIBEL_L,jsonData.DATE_FIN,jsonData.ID_SOUS_THEME)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("insert success")
    return

});


module.exports = router;