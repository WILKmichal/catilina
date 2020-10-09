const express = require('express')
const app = express()
var bodyParser = require("body-parser")
var cors = require('cors');

// create application/json parser
var jsonParser = bodyParser.json()

//TODO whitlister seulment les routes necessaire
app.use(cors());

const routeLogin = require('./routes/routesPublic/login.js')
const routerRegister = require('./routes/routesPublic/register.js')


const theme = require('./routes/routesPublic/theme.js')
const soustheme = require('./routes/routesPublic/themeSous.js')
const concours = require('./routes/routesPublic/concours.js')
const gestionTheme = require('./routes/routePrivee/routeGestionConcours/gestionTheme.js')
const gestionSousTheme = require('./routes/routePrivee/routeGestionConcours/gestionSousTheme.js')
const gestionConcours = require('./routes/routePrivee/routeGestionConcours/gestionConcours.js')
const InscriptionConcours = require('./routes/routePrivee/routeEtudiante/Inscription')
const gestionDashbord = require ('./routes/routePrivee/routeSuperAdmin/gestionDashboard')
const sauvegarde = require('./routes/routePrivee/routeEtudiante/sauvegarde.js')
const archive = require('./routes/routePrivee/routeEtudiante/archive.js')
const profil = require('./routes/routePrivee/routeEtudiante/profil.js')

 const gestionAdmin = require('./routes/routePrivee/routeSuperAdmin/gestionAdmin')
 const searchAdmin = require("./routes/routePrivee/routeSuperAdmin/searchAdmin")

app.use('/maxiconcours',jsonParser, routeLogin)
app.use('/maxiconcours',jsonParser, routerRegister)
app.use('/maxiconcours',jsonParser, theme)
app.use('/maxiconcours',jsonParser, soustheme)
app.use('/maxiconcours',jsonParser, concours)
app.use('/maxiconcours',jsonParser, gestionTheme)
app.use('/maxiconcours',jsonParser, gestionSousTheme)
app.use('/maxiconcours',jsonParser, gestionConcours)
app.use('/maxiconcours',jsonParser, InscriptionConcours)
app.use('/maxiconcours',jsonParser, gestionDashbord)
app.use('/maxiconcours',jsonParser, sauvegarde)
app.use('/maxiconcours',jsonParser, archive)
app.use('/maxiconcours',jsonParser, profil)

 app.use('/maxiconcours',jsonParser, gestionAdmin)
 app.use('/maxiconcours',jsonParser, searchAdmin)

app.listen(3001,"0.0.0.0", () => console.log('server lancé sur le port 3001'))

//TODO modification dossier db pour tout les routes de routeGestionConcours (optimisation)
//TODO rajouter middleware verifiaction role au lieu de ce truc degeulasse ecrit a chaque route (if(ROLE!= X ))

//TODO UPDATE des donner pour les routes gestionTheme,gestionSousTheme,gestionConcours URGENT A FAIRE RAPIDEMENT

//TODO route super admin pas Importer dans app.js (je crois ??????)

//TODO envoye par email le mot de passe du user (?)
//TODO au lieu de mettre un mot de passe, envoyer un mot de passe aleatoire a changer pour les compte admin ou alors juste générer une string dans le fronte

//TODO revamp des try catch ils sont VRAIMENT  DE-GEU-LASSE les reecrire (code bon juste changer les position des try et en rajouter la ou ca manque)