const images = require('./modules/images.js');//Fonction gérant le /img/...


const express = require('express');//Import d'Express, simplifie la gestion du backend
const morgan = require('morgan');//Import de morgan, permet de log les connexions au serveur
const ejs = require('ejs');//Import d'ejs : permet de rendre les .ejs, les <% %>
const bodyParser = require('body-parser');// Import de body-parser : permet de récupérer les infos des formulaires sur le site
const mysql = require('mysql');//Import de MySql, permettra de faire des requêtes vers la BDD
const redis = require("redis");//Redis
const session = require('express-session');//Gestion des sessions avec Express
const redisStore = require('connect-redis')(session);//Stockage des données dans Redis
const fs = require('fs')//FileSystem, permet d'intéragir avec les fichiers présents sur le serveur
const path = require('path');//Gestion des chemins d'accès



var app = express();//Création de l'app Express
var server = require("http").createServer(app);//Crée le serveur


const io = require("socket.io")(server);


app.use(morgan('combined'));//Démarre les logs
app.use(bodyParser.urlencoded({extended: true}));



//Pages

app.get('/', function(req, res){
  res.render('index.ejs');
});

//Style
app.get('/style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/style.ejs');
});
app.get('/style/index', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/index.ejs');
});
app.get('/style/icons', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/icons.ejs');
});


//Obtention d'images
app.get('/img/:img', function(req, res){
  images.getImage(req, res);
});


console.log("Serveur démarré !");
server.listen(8080, '0.0.0.0');//Le serveur démarre sur le port 8080 ( HTTP par défaut en 80, HTTPS en 443), et écoute les connexions de toutes les IPs
