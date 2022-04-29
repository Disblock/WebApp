'use strict';
/*############################################*/
/* Homemade modules */
/*############################################*/

const images = require('./modules/images.js');//Allow to get pictures ( /img/...)
const discord_login = require('./modules/discord_login.js');//Used to login with Discord
//const discord_regen = require('./modules/discord_token_regen.js');//Used to regen user's tokens
const discord_get_servers = require('./modules/discord_get_servers.js');//Used to get user's Discord guilds ( Where has an admin access )
const blockly_xml_to_js = require('./modules/blockly/blockly_xml_to_js.js');//Convert Blockly's XML into JS
const blockly_generator = require('./modules/blockly/generator/generator.js');//Blockly's generator, blocks to Discord.js
const blockly_localization = require('./modules/blockly/localization/fr.js');//Add localization to the generator
const init_logs = require('./modules/init_logs.js');//Show a message in logs files and console when starting

/*############################################*/
/* Imported modules */
/*############################################*/

const express = require('express');//Did I really need to explain ?
const morgan = require('morgan');//Logs for the server
const ejs = require('ejs');//Allow to serve .ejs files
const bodyParser = require('body-parser');//Get data from <form>
const pg = require('pg');//Postgresql
const redis = require("redis");//Redis
const session = require('express-session');//Sessions management
const redisStore = require('connect-redis')(session);//Save sessions in Redis
const fs = require('fs');//FileSystem, can interact with files stored in the system
const path = require('path');//Manage access paths
const crypto = require('crypto');//Generate random strings
const url = require('url');//Enable access to query string parameters
const bigInt = require("big-integer");//Used to check permissions on a server
let Blockly = require('blockly');//Blockly
const winston = require('winston');//Used to save logs
require('winston-daily-rotate-file');//Daily rotating files

/*############################################*/
/* Express and server creation */
/*############################################*/

var app = express();//Création de l'app Express
var server = require("http").createServer(app);//Crée le serveur

/*############################################*/
/* Morgan & winston modules ( Logging ) */
/*############################################*/

init_logs.initConsole();//Show a message in console when starting

/* ##### MAIN LOGGER ##### */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }), winston.format.json()),
  //exitOnError: false,
  transports: [
    new winston.transports.DailyRotateFile({ filename: './logs/app/error-%DATE%.log', level: 'error', maxFiles:process.env.LOGS_MAX_FILES, maxSize:'1g' }),//Errors file ( Errors )
    new winston.transports.DailyRotateFile({ filename: './logs/app/backend-%DATE%.log', maxFiles:process.env.LOGS_MAX_FILES, maxSize:'1g' })//Backend logs ( info, errors, debug, ...)
  ]
});

//Debug mode
if(process.env.DEBUG === 'true'){
  logger.add(new winston.transports.DailyRotateFile({filename:'./logs/app/debug-%DATE%.log', level: 'debug', maxFiles:process.env.LOGS_MAX_FILES, maxSize:'1g'}))
}

init_logs.initLogger(logger);//Initialized here to avoid showing the message twice in console
//logger.error('The server has started, logging errors here !');//Sending a message in error logs to show that we started

//If not in production, data is also logged in console
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({

    format: winston.format.combine(
      winston.format.colorize({level:true}),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }), winston.format.simple()),

    level: (process.env.DEBUG === 'true' ? 'debug':'info')//Debug mode or normal errors ?
  }));
}


/* ##### ACCESS LOGGER ##### */
const accessLogger = winston.createLogger({
  levels: {debug:2,info:1,access:0},
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.DailyRotateFile({ filename: './logs/access/access-%DATE%.log', maxFiles:process.env.LOGS_MAX_FILES, maxSize:'1g'}),//Access logs
  ]
});

init_logs.initLogger(accessLogger);//Initialized here to avoid showing the message twice in console

//If not in production, show logs in console
if (process.env.NODE_ENV !== 'production') {
  accessLogger.add(new winston.transports.Console({
    format:winston.format.combine(winston.format.colorize({level:true, colors:{access:'black whiteBG'}}),winston.format.simple())
  }));
}

app.use(morgan('combined', { "stream": {
  write: async (message)=>{
    accessLogger.access(message.trim());
  }
}}));//Start logging

/*############################################*/
/* Database database_pool */
/*############################################*/

//database_pool to the database
const database_pool = new pg.Pool();//Credentials are given by env var
database_pool.query('SELECT NOW();', (err, res) => {
      if(err instanceof Error){
        logger.error("Can't connect to the Database when starting !");
        throw(err);
      }else{
        logger.debug("Successfully connected to the Database !");
      }
});

/*############################################*/
/* Redis database */
/*############################################*/

//Redis and session init
var redisClient  = redis.createClient({url:'redis://@redis-server:6379'});/* Add credentials on Redis */

redisClient.on('error', (err) => {
  logger.error("Redis error : "+err);
  throw(err);
});

redisClient.on('ready', ()=>{
  logger.debug("Successfully connected to Redis server !");
})

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
/* BodyParser Initialization */
/*############################################*/

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
        discord_login.login(url.parse(req.url,true).query.code, database_pool, req, res, logger);
      }else{
        res.redirect('/');
      }

    }else{
      //User may be clickjacked, cancelling database_pool
      res.status(403).end("Security error");
    }
  }else{
    //User is already logged in
    res.redirect('/');
  }
});

/*-----------------------------------*/

app.get('/logout', function(req, res){
  logger.info("Logged out the user "+req.session.discord_id);
  req.session.destroy();
  res.redirect('/');
});

/*-----------------------------------*/

app.get('/panel', function(req, res){
  req.session.state = crypto.randomBytes(4).toString('hex');
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, database_pool, logger, (guilds)=>{
      //guilds represent the guilds that user is admin on ( Array )
      //This function can destroy the session if user is rate limited

      if(req.session){
        //If there is a problem ( Like a rate limit ), the session is destroyed so we send invalids sessions on index
        res.render('panel.ejs', {session: req.session, guilds: guilds, guild: undefined});
      }else{
        res.redirect('/');
      }

    });
  }else{
    //Not logged in
    res.render('panel.ejs', {session: req.session, guilds: [], guild: undefined});
  }
});

/*-----------------------------------*/

app.get('/panel/:id', function(req, res){
  if(req.session.discord_id!=undefined){
    discord_get_servers.servers(req, database_pool, logger, (guilds)=>{//Get all guilds where user has an admin permission
      let guild = undefined;
      for(var i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
        if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
          guild = guilds[i];
        }
      }

      if(guild!=undefined){
        logger.info("User "+ req.session.discord_id +" got panel access to guild "+guild.id);
        //User is admin on the selected server

        //Getting guild saved workspace
        database_pool.query('SELECT xml FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC LIMIT 1;', [guild.id], (err, data) => {
          if(err){
            logger.error("Error while getting saved workspace from database for guild "+guild.id+" : "+err);
            res.status(500).end("Error");
          }else{
            //Check here if a previous workspace was saved
            let workspace_xml = undefined;
            if(data.rows[0]){
              workspace_xml = data.rows[0].xml;
              logger.debug("A saved workspace was found for guild "+guild.id);
            }

            //Let's render Blockly app, with custom blocks added here
            res.render('panel.ejs', {session: req.session, guilds:guilds, guild: guild, blocks: blocklyBlocks, localization: blockly_localization.initializeLocalization, workspace_xml:workspace_xml});
          }
        });

      }else{
        //User isn't admin on the selected server

        //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
        //logger.debug("User "+ req.session.discord_id +" was denied access to a guild");
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

io.sockets.on('connect', function(socket){
  logger.debug((socket.request.session.discord_id||"An unknown user")+" connected with socket.io");

  socket.on("send_workspace", (server_id, data, callback) => {
    if(socket.request.session.discord_id!=undefined){//Session must be defined
      logger.debug(socket.request.session.discord_id+" is sending a workspace");
      discord_get_servers.servers(socket.request, database_pool, logger, (guilds)=>{//Get a list of user's servers where has admin access
        var guild = undefined;
        for(var i=0; i<guilds.length; i++){
          if(guilds[i].id===String(server_id)){
            guild = guilds[i];//If a server has same id than sended one, the server is registered in guild
          }
        }

        if(guild!=undefined){//If guild is defined, a server where user is admin has been found
          logger.info(socket.request.session.discord_id+" sent a new workspace via socket.io for the guild "+guild.id);
          var result = blockly_xml_to_js.xml_to_js(server_id, data, Blockly, blocklyToken, database_pool, logger).then(result=>{//blocklyToken is a random string used to split the generated code

            if(result==0){
              callback({status: "OK"});
            }else if(result==1){
              callback({status: "NOT  OK"});
            }

          });

        }else{
          //User hasn't access to this server
          logger.info(socket.request.session.discord_id+ "tried to edit a workspace via socket.io without access to the guild");
          callback({status: "NOT  OK"});
        }
      });
    }

    //TODO : Gérer les données et assurer la sécurité
    //https://developers.google.com/blockly/reference/js/Blockly.Xml
  });

});


server.listen(8081, '0.0.0.0', ()=>{
  console.log("Server Ready !");
  logger.info("Server Ready !");
});
