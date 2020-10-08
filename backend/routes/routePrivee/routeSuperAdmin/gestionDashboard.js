const router = require("express").Router();
const db = require('../../db/gestionDashboard')
const gestionDashboard = require("../../models/shemaGestionAdmins/shemaGestionDashboard")


router.get('/gestionDashboard', async (req, res) => {
    

    MiddlePass = req.user
    jsonData = req.body
    
    //jsonData = req.body
    //const value = gestionDashboard(jsonData)

    // if (value.error) {
    //     res.status(400).json()
    //     return
    // }

    // let gestionDashboard = await db.gestionDashboard(jsonData.ID_STATUT)

    // res.json(gestionDashboard)
    // return

    
    //TODO changer role 0 en 3

    if (MiddlePass.role != 3) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        await db.gestionDashboard(jsonData.ID_STATUT)
    } catch (e) {
        res.json(e)
        return
    }
});


module.exports = router;