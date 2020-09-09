const mysql = require('mysql')
const router = require("express").Router();
const db = require('../db/index.js')



router.post('/theme', async(req, res) => {
    try {
        let params = req.body.id
        //console.log(params)
        let results = await db.theme(id)
        res.json(results)
    }
     catch (e) {
        //console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router;