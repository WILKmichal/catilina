const mysql = require('mysql')
const router = require("express").Router();
const db = require('../db/index.js')



router.post('/insert', async(req, res) => {
    try {
        let id = req.body.id
        //console.log(params)
        let results = await db.insert(id)
        res.json(results)
    }
     catch (e) {
        //console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router;