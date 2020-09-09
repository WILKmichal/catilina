//route de recuperation acces au front
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/*CORS signifie « Cross Origin Resource Sharing ». Il s'agit d'un système de sécurité qui, par défaut, bloque les appels HTTP d'être effectués entre des serveurs différents, ce qui empêche donc les requêtes malveillantes d'accéder à des ressources sensibles. 

Ces headers permettent :

d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;

d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;

d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //tout le monde peut accedes a notre api = '*'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //autorisation d'utiliser certain entete sur l'objet requete
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //autorisation d'utiliser certaine methode sur l'objet requete
    next();
});

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
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