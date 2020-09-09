const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router1 = require('./routes/photo.js')
const router2 = require('./routes/theme.js')
const router3 = require('./routes/soustheme.js')
const router4 = require('./routes/visualisation_candidat.js')
const router5 = require('./routes/crud.js')



app.use('/maxiconcours', router1)
app.use('/maxiconcours', router2)
app.use('/maxiconcours', router3)
app.use('/maxiconcours', router4)
app.use('/maxiconcours', router5)



app.listen(3000, () => console.log('lancé'))