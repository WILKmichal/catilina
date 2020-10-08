const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
// const validation = require("../../../models/schemaRouteEtudiante/schemaSauvgarde")
const db = require("../../../db/gestionUserDb/sauvgardeDb")

router.post('/sauvegarde', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    // const value = validation.listeSauvegarde(jsonData)

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        dbRes = {
            "inscription": await db.listeInscription(MiddlePass.id),
            "profil": await db.listeProfil(MiddlePass.id),
            "concours": await db.listeConcours(MiddlePass.id)
        }

         


    } catch (e) {
        res.status(422).json(e)
        return
    }


    res.json(dbRes)


});

module.exports = router;