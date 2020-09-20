const router = require("express").Router();
const verified = require("../../../middleware/verifToken")
const validation = require("../../../models/schemaGestionTheme")
const db = require("../../../db/gestionThemeDb.js")
const dbUtil = require('../../../db/utilities/foreignKeyConstrain')
const dbConcour = require('../../../db/gestionSousThemeDb')

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

//TODO tester que cq delete beien le theme les sousthemes de ce theme et les concours des sousthemes

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
        await dbUtil.removeConstrain()

        let idSousTheme = await db.selectSousThemebyTheme(jsonData.ID_THEME)

        await db.deleteTheme(jsonData.ID_THEME)
        await db.deleteSousThemeByTheme(jsonData.ID_THEME)

        idSousTheme = idSousTheme.map(function (item) {
            return item['ID_SOUS_THEME'];
        });

        //TODO ghetto de ouf changer en concatenation OR au lieu d'une boucle de delete rappel dans app.js

        for (i = 0; i < idSousTheme.length; i++) {
            await dbConcour.deleteConcoursBySousTheme(idSousTheme[i])
          }

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