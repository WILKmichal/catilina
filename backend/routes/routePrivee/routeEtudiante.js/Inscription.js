const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaRouteEtudiante/schemaInscription")
const db = require("../../../db/gestionUserDb/gestionInscriptionDb")
// const dbUtil = require("../../../db/utilities/foreignKeyConstrain")

router.post('/InscriptionConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.inscriptionConcours(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    const idUser = MiddlePass.id
    res.json(idUser)
    return




});


module.exports = router;