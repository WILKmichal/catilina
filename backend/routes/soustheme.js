const mysql = require('mysql')
const router = require("express").Router();
const db = require('../db/index.js')



router.post('/soustheme', async(req, res) => {

    try {
        let id = req.body.id;
        console.log(id)
        let results = await db.soustheme(id)
        res.json(results)
    } 
    catch (e) {
        //console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router;