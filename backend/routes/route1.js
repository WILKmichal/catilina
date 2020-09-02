const router = require("express").Router();
const db = require('../db')

router.post('/ex1', async(req, res) => {
  try{
    let results = await db.lourd()
    res.json(results)
  } catch(e){
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router;