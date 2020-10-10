const router = require("express").Router();
const verification = require("../../../models/schemaGestionAdmins/schemaSearchAdmin")
const verified = require('../../../middleware/verifToken')
const db = require("../../../db/gestionAdminDb/searchAdminDb")


router.post('/searchAdmin', verified, async (req, res) => {
    MiddlePass = req.user
    jsonData = req.body

    const value = verification.roleSearch(jsonData)

    if (value.error) {
        res.status(200).json(value.error.details[0].message)
        return
    }

    //TODO changer le 0 en role admin (3 ? possible)
    if (MiddlePass.role != 3) {
        res.status(200).json("vous n'avez pas les droits")
        return
    }

    try {
        let usersRoleX = db.searchRole(jsonData.ID_ROLE)
        res.json(usersRoleX)
    return

    } catch (e) {
        //TODO changer en string au lieu de erreur
        res.json(e)
        return

    }

});

module.exports = router;
