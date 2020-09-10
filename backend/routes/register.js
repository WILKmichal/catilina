const router = require("express").Router();
const db = require('../db/index.js');
const bcrypt = require('bcryptjs')


router.post('/register', async(req, res) => {

    let user = req.body.user
    let password = req.body.password
    let salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)

    try {
        let results = await db.register(user,password)
        res.json(results)
    } catch (e) 
    {
        //console.log(e)
        res.json("res1")
    }
})

module.exports = router;