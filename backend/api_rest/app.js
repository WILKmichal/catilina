/*/lancer le package npm install --save express

//midleware capture et traite les requetes envoyer vers le server
const express = require('express');
const app = express();

//le premier envoi enregistre « Requête reçue ! » dans la console et passe l'exécution ;
app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

//le deuxième ajoute un code d'état 201 à la réponse et passe l'exécution ;
app.use((req, res, next) => {
    res.status(201);
    next();
});

//le troisième envoie la réponse JSON et passe l'exécution ;
app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next();
});

//le dernier élément de middleware enregistre « Réponse envoyée avec succès ! » dans la console
app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

module.exports = app;*/

//route de recuperation acces au front
const express = require('express');

const app = express();

/*C.O.R.S cross origin securité qui empeche les requete malveillante donc on n'autorise l'accés en ajoutant une entete avec les droits a notre objet reponse que on renvoie au 
au navigateur permet d'a*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //tout le monde peut accedes a notre api = '*'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //autorisation d'utiliser certain entete sur l'objet requete
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //autorisation d'utiliser certaine methode sur l'objet requete
    next();
});

app.use( /*url visée par l'aplication le front fait une requete a cette rout/api*/ '/api/stuff', (req, res, next) => {
    //creation de deux objet dans un tableau appellé stuff
    const stuff = [{
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    //attribut un statut 200 pour une reponse réussi et renvoie le tableau en json
    res.status(200).json(stuff);
});

module.exports = app;