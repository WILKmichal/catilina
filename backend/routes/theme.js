const mysql = require('mysql')
const router = require("express").Router();
const db = require('../db/index.js')



router.post('/theme', async(req, res) => {
    try {
        let id = req.body.id
        //console.log(params)
        let results = await db.theme(id)
        res.json()
    }
     catch (e) {
        //console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router;