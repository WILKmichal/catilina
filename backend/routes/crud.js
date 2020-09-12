const mysql = require('mysql');
const router = require("express").Router();
const db = require('../db/index');

router.get('/........', async(req, res) => {
    const articles = [];
    // code to retrieve...
    res.json(articles);
});

router.post('/.......', async (req, res) => {
    // code to add...
    res.json(req.body);
});

router.put('/....../:id', async (req, res) => {
    const { id } = req.params;
    // code to update...
    res.json(req.body);
});

router.delete('/....../:id', async (req, res) => {
    const { id } = req.params;
    // code to delete...
    res.json({ deleted: id });
});


module.exports = router;
