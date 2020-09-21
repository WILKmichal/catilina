const router = require("express").Router();
const verified = require("../../../models/schemaSearchAdmin")
const db = require("../../../db/searchAdminDb")


router.post('/gestionAdmin', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = verified.roleSearch(jsonData)

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
        let usersRoleX = db.searchRole(jsonData.ID_ROLE)
        res.json(usersRoleX)
        return

    } catch (e) {
        //TODO changer en string au lieu de erreur
        res.json(e)

    }

});
