const router = require("express").Router();
const db = require('../../../db/gestionAdminDb/gestionDashboard')
const mid = require('../../../middleware/verifToken')
 const dash = require("../../../models/schemaGestionAdmins/shemaGestionDashboard")


router.get('/gestionDashboard',mid, async (req, res) => {
    
   
    MiddlePass = req.user
    jsonData = req.body
    
    //jsonData = req.body
     const value = dash.gestionDashboard(jsonData)

    if (value.error) {
        res.status(400).json()
        return
    }

    // let gestionDashboard = await db.gestionDashboard(jsonData.ID_STATUT)

    // res.json(gestionDashboard)
    // return

    
    //TODO changer role 0 en 3

    if (MiddlePass.role != 0) {
        res.status(401).json("vous n'avez pas les droits")
        return
    }

    try {
        const resp = await db.gestionDashboard(jsonData.ID_STATUT)
        res.json(resp)
        return
    } catch (e) {
        res.json(e)
        return
    }
});


module.exports = router;