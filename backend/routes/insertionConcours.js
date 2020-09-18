const router = require("express").Router();
const verified = require("../middleware/verifToken")

router.post('/insertionConcours',verified, async (req, res) => {
    res.json(req.user)

});


module.exports = router;