const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaGestionConcours/schemaGestionConcours")
const db = require("../../../db/gestionConcoursDb/gestionConcours.js")
const dbUtil = require("../../../db/utilities/foreignKeyConstrain")

router.post('/gestionConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.concoursValidationCreation(jsonData)

    if (value.error) {
        res.status(200).json(value.error.details[0].message)
        return
    }

    //TODO pour le live build changer en 1 (0 pour tester)
    if (MiddlePass.role != 0) {
        res.status(200).json("vous n'avez pas les droits")
        return
    }
    //TODO tst si insert marche (probablement pas importer dbUtil pour retirer  LES PUTAINS DE VERIFIACTION DE FoReIgN KeY)

    try {
        await db.insertConcours(jsonData.LIBEL_SH,jsonData.LIBEL_L,jsonData.DATE_FIN,jsonData.ID_SOUS_THEME)

        //TODO je me souviens plus si un objet vide est egal a false shalom ca mere, a tst
        if(jsonData.PATH_IMG){

            // TODO pour le moment on va dire que LIBEL_SH est unique meme si il ny a pas de condition qui dit ca  ( a faire )
            let idConcours = await db.getIdConcours(jsonData.LIBEL_SH)

            //TODO Dans register on insert des photos aussi a deplacer dans db util pour avoir moins de ligne de code en  + de *2
            await db.insertPhoto(idConcours,jsonData.PATH_IMG)
        }
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("insert Concours success")
    return

});

router.delete('/gestionConcours', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = validation.concoursValidationSuppr(jsonData)

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
        await db.deleteConcours(jsonData.ID_CONCOURS)
    }
    // TODO changer "e" en une erreur string
    catch (e) {
        res.json(e)
        return
    }
    res.status(200).json("delete Concours success")
    return

});


module.exports = router;