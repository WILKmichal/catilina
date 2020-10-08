const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaRouteEtudiante/schemaProfil.js")
const db = require("../../../db/gestionUserDb/gestionProfilDb")

router.post('/profil', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.modifProfil(jsonData)

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

        dbRes = await db.profil(MiddlePass.id)

    } catch (e) {
        res.status(422).json(e)
        return
    }
    res.json(dbRes)
});

router.options('/profil', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }


    try {

        await db.modifProfil(MiddlePass.id, jsonData.NOM, jsonData.D_NAISS, jsonData.SEXE, jsonData.ADRESSE, jsonData.TEL, jsonData.COURRIEL, jsonData.ETAT_CIVIL, jsonData.ID_P, jsonData.FACEBOOK, jsonData.TWITTER, jsonData.INSTAGRAM, jsonData.PRENOM, jsonData.ID_NATIONALITE)

    } catch (e) {
        res.json(e)
        return
    }
    res.json(dbRes)
});

module.exports = router;