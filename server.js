'use strict';
/*############################################*/
/* Homemade modules */
/*############################################*/

const images = require('./modules/images.js');//Allow to get pictures ( /img/...)
const mysql_connection = require('./modules/database.js');//Store Database credentials
const discord_login = require('./modules/discord_login.js');//Used to login with Discord
const discord_regen = require('./modules/discord_token_regen.js');//Used to regen user's tokens
const discord_get_servers = require('./modules/discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const blockly_xml_to_js = require('./modules/blockly/blockly_xml_to_js.js');//Convert Blockly's XML into JS
const blockly_generator = require('./modules/blockly/generator/generator.js');//Blockly's generator, blocks to Discord.js
const blockly_localization = require('./modules/blockly/localization/fr.js');//Add localization to the generator

/*############################################*/
/* Imported modules */
/*############################################*/

const express = require('express');//Did I really need to explain ?
const morgan = require('morgan');//Logs for the server
const ejs = require('ejs');//Allow to serve .ejs files
const bodyParser = require('body-parser');//Get data from <form>
const mysql = require('mysql');//Mysql
const redis = require("redis");//Redis
const session = require('express-session');//Sessions management
const redisStore = require('connect-redis')(session);//Save sessions in Redis
const fs = require('fs');//FileSystem, can interact with files stored in the system
const path = require('path');//Manage access paths
const crypto = require('crypto');//Generate random strings
const url = require('url');//Enable access to query string parameters
const bigInt = require("big-integer");//Used to check permissions on a server
let Blockly = require('blockly');//Blockly


/*############################################*/
/* Express and server creation */
/*############################################*/

var app = express();//Création de l'app Express
var server = require("http").createServer(app);//Crée le serveur
var connection = mysql_connection.getConnexion();//Création d'une connexion à la BDD


/*############################################*/
/* Database connection */
/*############################################*/

//Connection to the database
try{
  connection.connect();//Connexion à la BDD
}catch(error){
  console.log("ERROR : CAN'T ACCESS TO THE DATABASE !!");
  console.log(error);
}

/*############################################*/
/* Redis Connection */
/*############################################*/

//Redis and session init
var redisClient  = redis.createClient({url:'redis://@redis-server:6379'});/* Add credentials on Redis */

redisClient.on('error', (err) => {
  console.log('Redis error : ', err);
});

/*############################################*/
/* Session module */
/*############################################*/

var sessionMiddleware = session({
  secret: ['@ptR9F=~Y&qDZ3jW<_{bGt/C:lsKBJqE', 'U5WHH,aR\IF~4gCKhgOQ2lJwQH=T-C>C', 'M+ll2BYkCy0|0ze<ZaS}]&6l,iHzSA5B'],
  //Sessions are stored in Redis server
  store: new redisStore({client: redisClient, ttl:  86000}),
  saveUninitialized: true,
  resave: true
});

app.use(sessionMiddleware);


/*############################################*/
/* Socket.io module */
/*############################################*/

const io = require("socket.io")(server);//Max 1Mb/send by default
io.use(function(socket, next){//A chaque requête io, le middleware de sessions est appelé
  sessionMiddleware(socket.request, socket.request.res || {}, next);//Pour lire la session : socket.request.session.Variable
});


/*############################################*/
/* Morgan module ( Logging ) */
/*############################################*/

app.use(morgan('combined'));//Démarre les logs
app.use(bodyParser.urlencoded({extended: true}));

/*############################################*/
/* Blockly Initialization */
/*############################################*/

//Blocks definition
const blocklyBlocks = [require('./modules/blockly/blocks/channel_blocks.js').blocks,require('./modules/blockly/blocks/embed_blocks.js').blocks,require('./modules/blockly/blocks/event_blocks.js').blocks,require('./modules/blockly/blocks/guild_blocks.js').blocks,require('./modules/blockly/blocks/message_blocks.js').blocks,require('./modules/blockly/blocks/rank_blocks.js').blocks,require('./modules/blockly/blocks/user_blocks.js').blocks]
blocklyBlocks.forEach(element => {
  Blockly.defineBlocksWithJsonArray(JSON.parse(element));
});

//Text definition
Blockly = blockly_localization.initializeLocalization(Blockly);

const blocklyToken = crypto.randomBytes(8).toString('hex');//Used to cut the string code later
Blockly.JavaScript.INFINITE_LOOP_TRAP = "if(loopCount > 10000){throw 'Infinite loop !'}\nloopCount++;\n";
Blockly.JavaScript.addReservedWords('loopCount');
Blockly = blockly_generator.initializeGenerator(Blockly, blocklyToken);//Initialize generator

/*############################################*/
/* Function ran on every request */
/*############################################*/

//Headers on every request
app.use(function(req, res, next){
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "deny");
    res.setHeader("X-XSS-Protection", "1;mode=block");
    next();
});

/*############################################*/
/* Pages Definition */
/*############################################*/

app.get('/', function(req, res){
  //localization
    req.session.state = crypto.randomBytes(4).toString('hex');
    res.render('index.ejs', {session: req.session});
});

/*-----------------------------------*/

app.get('/discord_login', function(req, res){
  if(req.session.discord_id == undefined){//If the user is logged in, his Discord Id is stored, and is not undefined
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

/*-----------------------------------*/

app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

/*-----------------------------------*/

app.get('/panel', function(req, res){
  req.session.state = crypto.randomBytes(4).toString('hex');
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, connection, (guilds)=>{
      //guilds represent the guilds that user is admin on

      res.render('panel.ejs', {session: req.session, guilds: guilds, guild: undefined});
    });
  }else{
    //Not logged in
    res.render('panel.ejs', {session: req.session, guilds: [], guild: undefined});
  }
});

/*-----------------------------------*/

app.get('/panel/:id', function(req, res){
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, connection, (guilds)=>{//Get all guilds where user has an admin permission
      let guild = undefined;
      for(var i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
        if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
          guild = guilds[i];
        }
      }

      if(guild!=undefined){
        //User is admin on the selected server

        //Let's render Blockly app, with custom blocks added here
        res.render('panel.ejs', {session: req.session, guilds:guilds, guild: guild, blocks: blocklyBlocks, localization: blockly_localization.initializeLocalization});

      }else{
        //User isn't admin on the selected server
        res.redirect('/');
      }
    });
  }else{
    //Not logged in
    res.redirect('/panel');
  }
});

/*-----------------------------------*/


/*############################################*/
/* Style definition */
/*############################################*/

app.get('/style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/style.ejs');
});
app.get('/style/index-style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/index-style.ejs');
});
app.get('/style/panel-style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/panel-style.ejs');
});
app.get('/style/index-panel-style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/index-panel-style.ejs');
});
app.get('/style/guild-panel-style', function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/guild-panel-style.ejs');
});

/*############################################*/
/* localization */
/*############################################*/

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


/*############################################*/
/* Images gateway */
/*############################################*/

app.get('/img/:img', function(req, res){
  images.getImage(req, res);
});

/*############################################*/
/* JS scripts */
/*############################################*/

app.get('/script/particles', function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./js/scripts/particles.min.ejs');
});

app.get('/script/particle_config', function(req, res){
  res.setHeader("Content-Type", 'text/json');
  res.render('./js/scripts/particles_config.ejs');
});


/*############################################*/
/* Blockly contents ( blocks, ... ) */
/*############################################*/

app.get('/blockly/custom_types', function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./blockly/custom_types/custom_types.ejs');
});

/*############################################*/
/* Blockly Localization */
/*############################################*/

/*app.get('/blockly/loc', function(req, res){
  //TODO : MODIFY TO GET RIGHT LANGUAGE
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./blockly/loc/fr.ejs');
});*/


/*############################################*/
/* Blockly Socket.io */
/*############################################*/

io.sockets.on('connection', function(socket){
  console.log("Un client s'est connecté !");

  socket.on("send_workspace", (server_id, data, callback) => {
    if(socket.request.session.discord_id!=undefined){//Session must be defined

      discord_get_servers.servers(socket.request, connection, (guilds)=>{//Get a list of user's servers where has admin access
        var guild = undefined;
        for(var i=0; i<guilds.length; i++){
          if(guilds[i].id===String(server_id)){
            guild = guilds[i];//If a server has same id than sended one, the server is registered in guild
          }
        }

        if(guild!=undefined){//If guild is defined, a server where user is admin has been found
          var result = blockly_xml_to_js.xml_to_js(server_id, data, Blockly);
          if(result==1){
            callback({status: "OK"});
          }else if(result==2){
            callback({status: "NOT  OK"});
          }
        }else{
          //User hasn't access to this server
          callback({status: "NOT  OK"});
        }
      });
    }

    //TODO : Gérer les données et assurer la sécurité
    //https://developers.google.com/blockly/reference/js/Blockly.Xml
  });

});

console.log("Serveur démarré !");
server.listen(8081, '0.0.0.0');//Le serveur démarre sur le port 8080 ( HTTP par défaut en 80, HTTPS en 443), et écoute les connexions de toutes les IPs
