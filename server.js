const images = require('./modules/images.js');//Fonction gérant le /img/...
const mysql_connection = require('./modules/database.js');//Crée une connexion Mysql, stocke aussi les infos de connexion
const discord_login = require('./modules/discord_login.js');//Used to login with Discord
const discord_regen = require('./modules/discord_token_regen.js');
const discord_get_servers = require('./modules/discord_get_servers.js');
const blockly_xml_to_js = require('./modules/blockly_xml_to_js.js');



const express = require('express');//Import d'Express, simplifie la gestion du backend
const morgan = require('morgan');//Import de morgan, permet de log les connexions au serveur
const ejs = require('ejs');//Import d'ejs : permet de rendre les .ejs, les <% %>
const bodyParser = require('body-parser');// Import de body-parser : permet de récupérer les infos des formulaires sur le site
const mysql = require('mysql');//Import de MySql, permettra de faire des requêtes vers la BDD
const redis = require("redis");//Redis
const session = require('express-session');//Gestion des sessions avec Express
const redisStore = require('connect-redis')(session);//Stockage des données dans Redis
const fs = require('fs');//FileSystem, permet d'intéragir avec les fichiers présents sur le serveur
const path = require('path');//Gestion des chemins d'accès
const crypto = require('crypto');//Generate random strings
const url = require('url');//Enable access to query string parameters
const bigInt = require("big-integer");//Used to check permissions on a server



var app = express();//Création de l'app Express
var server = require("http").createServer(app);//Crée le serveur
var connection = mysql_connection.getConnexion();//Création d'une connexion à la BDD

//Connection to the database
try{
  connection.connect();//Connexion à la BDD
}catch(error){
  console.log("Impossible d'accéder à la BDD !!");
  console.log(error);
}


//Redis and session init
var redisClient  = redis.createClient();

redisClient.on('error', (err) => {
  console.log('Redis error : ', err);
});

var sessionMiddleware = session({
  secret: ['@ptR9F=~Y&qDZ3jW<_{bGt/C:lsKBJqE', 'U5WHH,aR\IF~4gCKhgOQ2lJwQH=T-C>C', 'M+ll2BYkCy0|0ze<ZaS}]&6l,iHzSA5B'],
  //Sessions are stored in Redis server
  store: new redisStore({ host: '127.0.0.1', port: 6379, client: redisClient, ttl:  86000}),
  saveUninitialized: true,
  resave: true
});

app.use(sessionMiddleware);





const io = require("socket.io")(server);
io.use(function(socket, next){//A chaque requête io, le middleware de sessions est appelé
  sessionMiddleware(socket.request, socket.request.res || {}, next);//Pour lire la session : socket.request.session.Variable
});


app.use(morgan('combined'));//Démarre les logs
app.use(bodyParser.urlencoded({extended: true}));



//Headers on every request
app.use(function(req, res, next){
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "deny");
    res.setHeader("X-XSS-Protection", "1;mode=block");
    next();
});

//Pages
app.get('/', function(req, res){
  //localization
    const lang = req.headers["accept-language"].split(",")[0];
    const state = crypto.randomBytes(4).toString('hex');
    req.session.state = state;
    res.render('index.ejs', {state: state, session: req.session});

});

app.get('/discord_login', function(req, res){
  if(req.session.discord_id == undefined){
    if(url.parse(req.url,true).query.state == req.session.state){

      //State is the same as the registered one
      if(url.parse(req.url,true).query.code!=undefined){
        discord_login.login(url.parse(req.url,true).query.code, connection, req, res);
      }else{
        res.redirect('/');
      }

    }else{
      //User may be clickjacked, cancelling connection
      res.status(403).end("Security error");
    }
  }else{
    //User is already logged in
    res.redirect('/');
  }
});

app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

app.get('/panel', function(req, res){
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, connection, (guilds)=>{
      //guilds represent the guilds that user is admin on

      res.render('panel.ejs', {session: req.session, guilds: guilds});
    });
  }else{
    //Not logged in
    res.redirect('/');
  }
});

app.get('/panel/:id', function(req, res){
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, connection, (guilds)=>{//Get all guilds where user has an admin permission
      var guild = undefined;
      for(var i=0; i<guilds.length; i++){
        if(guilds[i].id==String(req.params.id)){
          guild = guilds[i];
        }
      }

      if(guild!=undefined){
        //User is admin on the selected server

        res.render('guildEdit.ejs', {session: req.session, guild: guild});

      }else{
        //User isn't admin on the selected server
        res.redirect('/');
      }
    });
  }else{
    //Not logged in
    res.redirect('/');
  }
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
app.get('/style/panel', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/panel.ejs');
});
app.get('/style/guildEdit', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/guildEdit.ejs');
});

//Localization
app.get('/localization', function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  try{
    const lang = req.headers["accept-language"].split(",")[0];
    if(lang=="fr" || lang=="fr-FR"){
      //Français
      res.render('./js/localization/fr.ejs');
    }else{
      //Else, default to English
      res.render('./js/localization/en.ejs');
    }
  }catch(e){
    console.log(e);
    res.render('./js/localization/en.ejs');
  }

});


//Images
app.get('/img/:img', function(req, res){
  images.getImage(req, res);
});

//Scripts
app.get('/script/particles', function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./js/scripts/particles.min.ejs');
});

app.get('/script/particle_config', function(req, res){
  res.setHeader("Content-Type", 'text/json');
  res.render('./js/scripts/particles_config.ejs');
});


//Blockly
app.get('/blockly/blocks/event', function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./blockly/blocks/event_blocks.ejs');
});

app.get('/blockly/loc', function(req, res){
  //TODO : MODIFY TO GET RIGHT LANGUAGE
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./blockly/loc/fr.ejs');
});


//Blockly socket.io

io.sockets.on('connection', function(socket){
  console.log("Un client s'est connecté !");

  socket.on("send_workspace", (data, callback) => {
    //TODO : Check user access
    var result = blockly_xml_to_js.xml_to_js(data);
    if(result==1){
      callback({status: "OK"});
    }else if(result==2){
      callback({status: "NOT  OK"});
    }

    //TODO : Gérer les données et assurer la sécurité
    //https://developers.google.com/blockly/reference/js/Blockly.Xml
  });

});

console.log("Serveur démarré !");
server.listen(8080, '0.0.0.0');//Le serveur démarre sur le port 8080 ( HTTP par défaut en 80, HTTPS en 443), et écoute les connexions de toutes les IPs
