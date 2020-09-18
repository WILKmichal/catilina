const express = require('express')
const app = express()
var bodyParser = require("body-parser")

const dotenv = require("dotenv")
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routeLogin = require('./routes/login.js')
const routerRegister = require('./routes/register.js')

const insertionConcours = require('./routes/insertionConcours.js')




app.use('/maxiconcours', routeLogin)
app.use('/maxiconcours', routerRegister)

 app.use('/maxiconcours', insertionConcours)

app.listen(3000, () => console.log('server lancé sur le port 3000'))