const router = require("express").Router();
const db = require('../db/index.js')


router.post('/app', async(req, res) => {
    try {
        let results = await db.photo()
        res.json(results)
    } catch (e) 
    {
        //console.log(e)
        res.json("res1")
    }
})

/*app.get('/', function(req, res) {
    const stuff = [{}, ];
    res.send;
});*/


module.exports = router;