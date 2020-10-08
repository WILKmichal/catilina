const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
//const validation = require("../../../models/schemaRouteEtudiante/schemaProfil")
const db = require("../../../db/gestionUserDb/gestionProfilDb")

router.post('/profil', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }


    try {

        dbRes = await db.profil(MiddlePass.id)

    } catch (e) {
        res.status(422).json(e)
        return
    }


    res.json(dbRes)





});

module.exports = router;