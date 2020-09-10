const mysql = require('mysql')
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db/index.js')



var Users = [];



router.post('/login', async (req, res) => {
    let password = req.body.password
    let user = req.body.user
    if (password && user) {
        let results = await db.user(user)
        if (results) {
            let verificationPassword = await db.verificationPasswordDb(user)

            let booleenVerificationPassword = await bcrypt.compare(password, verificationPassword)

            if (booleenVerificationPassword) {
                let idI = await db.recuperationInfo
                const token = jwt.sign ({ id: idI.ID_USER , role:idI.role   },"srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf")

                    res.header('token',token)

            }


        } else {
            res.send("user doesnt exit")
        }
        res.send('validate')
    }
    else {
        res.send('manque de info')
    }



});


module.exports = router;
// function checkSignIn(req, res){
//    if(req.session.user){
//       next();     //If session exists, proceed to page
//    } else {
//       var err = new Error("Not logged in!");
//       console.log(req.session.user);
//       next(err);  //Error, trying to access unauthorized page!
//    }
// }
// app.get('/protected_page', checkSignIn, function(req, res){
//    res.render('protected_page', {id: req.session.user.id})
// });

// app.get('/login', function(req, res){
//    res.render('login');
// });

// app.post('/login', function(req, res){
//    console.log(Users);
//    if(!req.body.id || !req.body.password){
//       res.render('login', {message: "Please enter both id and password"});
//    } else {
//       Users.filter(function(user){
//          if(user.id === req.body.id && user.password === req.body.password){
//             req.session.user = user;
//             res.redirect('/protected_page');
//          }
//       });
//       res.render('login', {message: "Invalid credentials!"});
//    }
// });

// app.get('/logout', function(req, res){
//    req.session.destroy(function(){
//       console.log("user logged out.")
//    });
//    res.redirect('/login');
// });

// app.use('/protected_page', function(err, req, res, next){
// console.log(err);
//    //User should be authenticated! Redirect him to log in.
//    res.redirect('/login');
// });

// app.listen(3000);
// We have created a middleware function checkSignIn to check if the user is signed in. The protected_page uses this function. To log the user out, we destroy the session.

// Let us now create the login page. Name the view as login.pug and enter the contents −

// html
//    head
//       title Signup
//    body
//       if(message)
//          h4 #{message}
//          form(action = "/login" method = "POST")
//          input(name = "id" type = "text" required placeholder = "User ID")
//          input(name = "password" type = "password" required placeholder = "Password")
//          button(type = "Submit") Log in


