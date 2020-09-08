const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router1 = require('./routes/rout_app.js')
const router2 = require('./routes/Rout_inscription_candidat.js')
const router3 = require('./routes/Rout_visualisation_candidat.js')

app.use('/maxiconcours', router1)
app.use('/maxiconcours', router2)
app.use('/maxiconcours', router3)

app.listen(3000, () => console.log('lancé'))