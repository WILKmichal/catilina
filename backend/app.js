const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routeLogin = require('./routes/login.js')
const routerRegister = require('./routes/register.js')



app.use('/maxiconcours', routeLogin)
app.use('/maxiconcours', routerRegister)

app.listen(3000, () => console.log('server lancé sur le port 3000'))