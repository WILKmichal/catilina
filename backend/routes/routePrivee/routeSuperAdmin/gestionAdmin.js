const router = require("express").Router();
const verified = require("../../../models/schemaGestionAdmins/schemaRegisterAdmin")
const db = require("../../../db/gestionAdminDb/gestionAdminDb")

router.post('/gestionAdmin', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = verified.registerValidation(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO changer le 0 en role admin (3 ? possible)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        retur
    }

    try {
        //TODO a tst probablement OK (95%)
        await db.registerAdmin(jsonData.COURRIEL, jsonData.MDP, jsonData.NOM, jsonData.PRENOM, jsonData.ID_ROLE)
    } catch (e) {
        res.json(e)
        return
    }
});


router.delete('/gestionAdmin', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = verified.deleteAdmin(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO changer le 0 en role admin (3 ? possible)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        retur
    }

    try {
        await db.deleteAdmin(jsonData.ID_USER)
    } catch (e) {
        res.json(e)
        return
    }
});

//TODO modif n'existe pas a completer
router.options('/gestionAdmin', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    //TODO schema n'existe pas a cree
    const value = verified.modifAdmin(jsonData)

    if (value.error) {
        res.status(400).json(value.error.details[0].message)
        return
    }

    //TODO changer le 0 en role admin (3 ? possible)
    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        retur
    }

    try {

        //TODO cette requet db n'existe pas a cree
        await db.ModifeAdmin(jsonData.ID_USER)
    } catch (e) {
        res.json(e)
        return
    }
});



module.exports = router;