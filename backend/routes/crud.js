const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/........', (req, res) => {
    const articles = [];
    // code to retrieve...
    res.json(articles);
});

app.post('/.......', (req, res) => {
    // code to add...
    res.json(req.body);
});

app.put('/....../:id', (req, res) => {
    const { id } = req.params;
    // code to update...
    res.json(req.body);
});

app.delete('/....../:id', (req, res) => {
    const { id } = req.params;
    // code to delete...
    res.json({ deleted: id });
});

app.listen(3306)