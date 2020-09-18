const router = require("express").Router();
const verified = require("../../middleware/verifToken")

router.post('/creationTheme',verified, async (req, res) => {
    // MiddlePass = req.user
    // body = req.body
    // console.log(body)
    // res.json(body)

    // res.json{(user:req.user,lel: req.body})
   

});


module.exports = router;