const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routeLogin = require('./routes/routesPublic/login.js')
const routerRegister = require('./routes/routesPublic/register.js')


const theme = require('./routes/routesPublic/theme.js')
const soustheme = require('./routes/routesPublic/themeSous.js')
const concours = require('./routes/routesPublic/concours.js')
const creationTheme = require('./routes/routePrivee/creationTheme.js')




app.use('/maxiconcours', routeLogin)
app.use('/maxiconcours', routerRegister)

app.use('/maxiconcours', theme)
app.use('/maxiconcours', soustheme)
app.use('/maxiconcours', concours)
app.use('/maxiconcours', creationTheme)

app.listen(3001, () => console.log('server lancé sur le port 3001'))