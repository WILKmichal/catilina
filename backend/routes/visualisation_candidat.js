const mysql = require('mysql')
const router = require("express").Router();
const db = require('../db/index.js')



router.post('/visualistation', async(req, res) => {
    try {
        let params = req.body;
        //console.log(params)
        let results = await db.app()
        res.json(params)
    } 
    catch (e) {
        //console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router;