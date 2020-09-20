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
const gestionTheme = require('./routes/routePrivee/routeGestionConcours/gestionTheme.js')
const gestionSousTheme = require('./routes/routePrivee/routeGestionConcours/gestionSousTheme.js')
const gestionConcours = require('./routes/routePrivee/routeGestionConcours/gestionConcours.js')



app.use('/maxiconcours', routeLogin)
app.use('/maxiconcours', routerRegister)

app.use('/maxiconcours', theme)
app.use('/maxiconcours', soustheme)
app.use('/maxiconcours', concours)
app.use('/maxiconcours', gestionTheme)
app.use('/maxiconcours', gestionSousTheme)
app.use('/maxiconcours', gestionConcours)

app.listen(3001, () => console.log('server lancé sur le port 3001'))

//TODO modification dossier db pour tout les routes de routeGestionConcours (optimisation)
//TODO rajouter middleware verifiaction role au lieu de ce truc degeulasse ecrit a chaque route (if(ROLE!= X ))

//TODO UPDATE des donner pour les routes gestionTheme,gestionSousTheme,gestionConcours URGENT A FAIRE RAPIDEMENT

//TODO envoye par email le mot de passe du user (?)
//TODO au lieu de mettre un mot de passe, envoyer un mot de passe aleatoire a changer pour les compte admin

//TODO revamp des try catch ils sont VRAIMENT  DE-GEU-LASSE les reecrire (code bon juste changer les position des try et en rajouter)