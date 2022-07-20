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
const rateLimiter = require("rate-limiter-flexible");//Rates limits management
require('winston-daily-rotate-file');//Daily rotating files

/*############################################*/
/* Used translations */
/*############################################*/

const blockly_localization_fr = require('./modules/blockly/localization/fr.js');//Add localization to the generator - FR
const blockly_localization_en = require('./modules/blockly/localization/en.js');//Add localization to the generator - EN
//Translations for index/panel pages
const index_localization_fr = require('./modules/localization/index_fr.js');
const panel_localization_fr = require('./modules/localization/panel_fr.js');
const index_localization_en = require('./modules/localization/index_en.js');
const panel_localization_en = require('./modules/localization/panel_en.js');

/*############################################*/
/* Express and server creation */
/*############################################*/

let app = express();//Express initialisation
let server;
if(process.env.HTTPS == "true"){
  //HTTPS enabled
  server = require('https').createServer({key: fs.readFileSync('./certs/key.pem'), cert:fs.readFileSync('./certs/cert.pem')}, app)
}else{
  //HTTPS disabled
  server = require("http").createServer(app);//Server creation
}

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
let redisClient  = redis.createClient({url:'redis://@redis-server:6379'});/* Add credentials on Redis */
let redisDatabase = new redisStore({client: redisClient, ttl:  86000});

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
  store: redisDatabase,
  saveUninitialized: true,
  resave: true
});

app.use(sessionMiddleware);


/*############################################*/
/* Socket.io module */
/*############################################*/

const io = require("socket.io")(server);//Max 1Mb/send by default
io.use(function(socket, next){//At every io request, the middleware is called
  sessionMiddleware(socket.request, socket.request.res || {}, next);//To read session : socket.request.session.Variable
});

/*############################################*/
/* BodyParser Initialization */
/*############################################*/

app.use(bodyParser.urlencoded({extended: true}));

/*############################################*/
/* Blockly Initialization */
/*############################################*/

//Blocks definition
const blocklyBlocks = [require('./modules/blockly/blocks/channel_blocks.js').blocks,require('./modules/blockly/blocks/embed_blocks.js').blocks,require('./modules/blockly/blocks/event_blocks.js').blocks,
                      require('./modules/blockly/blocks/guild_blocks.js').blocks,require('./modules/blockly/blocks/message_blocks.js').blocks,require('./modules/blockly/blocks/rank_blocks.js').blocks,
                      require('./modules/blockly/blocks/user_blocks.js').blocks,require('./modules/blockly/blocks/list_blocks.js').blocks, require('./modules/blockly/blocks/color_blocks.js').blocks]
blocklyBlocks.forEach(element => {
  Blockly.defineBlocksWithJsonArray(JSON.parse(element));
});

//Text definition
Blockly = blockly_localization_en(Blockly);

const blocklyToken = crypto.randomBytes(8).toString('hex');//Used to cut the string code later
Blockly = blockly_generator.initializeGenerator(Blockly, blocklyToken);//Initialize generator

/*############################################*/
/* Rates limits */
/*############################################*/

//https://github.com/animir/node-rate-limiter-flexible/wiki/Options
const ratesLimitsRedis = new rateLimiter.RateLimiterRedis({
  points:50,
  duration:5,
  blockDuration:0,//Duration to wait if limit reached
  storeClient: redisClient,
  inmemoryBlockOnConsumed: 0
});

/*############################################*/
/* Function ran on every request */
/*############################################*/

//Headers on every request
app.use(async function(req, res, next){
    //Headers on every pages
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "deny");
    res.setHeader("X-XSS-Protection", "1;mode=block");

    //Save user language if not defined
    if(!req.session.locale){
      if(req.headers["accept-language"]!='' && req.headers["accept-language"]!=undefined){
        let lang = req.headers["accept-language"].split(",")[0];
        req.session.locale = (lang.includes("fr") ? 'fr' : 'en');//If seems to be French, user locale is set to French. Else, set to English
      }else{
        //Browser didn't sent accept-language header
        req.session.locale = 'en';
      }
    }

    //Continue actions
    next();
});

/*############################################*/
/* Pages Definition */
/*############################################*/

app.get('/', async function(req, res){
  //localization
  ratesLimitsRedis.consume(req.ip, 3).then(async()=>{
    //User not rate limited

    req.session.state = crypto.randomBytes(4).toString('hex');

    let locale;
    //Select right language
    if(req.session.locale=='fr'){
      locale=index_localization_fr
    }
    else{
      locale=index_localization_en
    }
    res.render('index.ejs', {session: req.session, login_url: process.env.LOGIN_URL, locale:locale});

  }).catch(async(err)=>{
    //User rate limited
    res.status(429).end("Too many requests !");
  });
});

/*-----------------------------------*/

app.get('/discord_login',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 20)
  .then(async()=>{
    //User isn't rate limited
    if(req.session.discord_id == undefined){//If the user is logged in, his Discord Id is stored, and is not undefined
      if(url.parse(req.url,true).query.state == req.session.state){
        //State is the same as the registered one

        if(url.parse(req.url,true).query.code!=undefined){
          discord_login.login(url.parse(req.url,true).query.code, database_pool, req, res, logger);
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
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});

/*-----------------------------------*/

app.get('/logout',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 2)
  .then(async()=>{
    //User isn't rate limited
    logger.info("Logged out the user "+req.session.discord_id);
    req.session.destroy();
    res.redirect('/');
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*-----------------------------------*/

app.get('/panel',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 8)
  .then(async()=>{
    //User isn't rate limited
    let locale;
    //Select right language
    if(req.session.locale=='fr'){
      locale=panel_localization_fr
    }else{
      locale=panel_localization_en
    }

    req.session.state = crypto.randomBytes(4).toString('hex');
    if(req.session.discord_id!=undefined){
      discord_get_servers.servers(req, database_pool, logger, (guilds)=>{
        //guilds represent the guilds that user is admin on ( Array )
        //This function can destroy the session if user is rate limited

        if(req.session){
          //If there is a problem ( Like a rate limit ), the session is destroyed so we send invalids sessions on index
          res.render('panel.ejs', {session: req.session, locale: locale, login_url: process.env.LOGIN_URL, guilds: guilds, guild: undefined, page:0});
        }else{
          res.redirect('/');
        }

      });
    }else{
      //Not logged in
      res.render('panel.ejs', {session: req.session, locale: locale, login_url: process.env.LOGIN_URL, guilds: [], guild: undefined, page:0});
    }

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});

/*-----------------------------------*/

app.get('/panel/:id',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 10)
  .then(async()=>{
    //User isn't rate limited

    if(req.session.discord_id!=undefined){

      //Check if server is in database ( = if the bot was added in the server )
      database_pool.query('SELECT EXISTS(SELECT 1 FROM servers WHERE server_id=$1) AS exist;', [String(req.params.id)])
      .then(async(data)=>{
        if(data.rows[0].exist){
          //Server is registered in database

          //Check if user is admin on selected server
          discord_get_servers.servers(req, database_pool, logger, (guilds)=>{//Get all guilds where user has an admin permission
            let guild = undefined;
            for(let i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
              if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
                guild = guilds[i];
              }
            }

            if(guild!=undefined){
              logger.info("User "+ req.session.discord_id +" got panel access to guild "+guild.id);
              //User is admin on the selected server

              //Getting guilds saved workspace
              database_pool.query('SELECT xml FROM server_workspace WHERE server_id = $1 ORDER BY workspace_id DESC LIMIT 1;', [guild.id])
              .then(async (data) => {

                //Check here if a previous workspace was saved
                let workspace_xml = undefined;
                if(data.rows[0]){
                  workspace_xml = data.rows[0].xml;
                  logger.debug("A saved workspace was found for guild "+guild.id);
                }

                //Let's render Blockly app, with custom blocks added here
                let blocklyLocale,locale;//Store the language file to use

                //Select right language
                if(req.session.locale=='fr'){
                  blocklyLocale=blockly_localization_fr
                  locale=panel_localization_fr
                }else{
                  blocklyLocale=blockly_localization_en
                  locale=panel_localization_en
                }

                res.render('panel.ejs', {session: req.session, locale: locale, guilds:guilds, guild: guild, blocks: blocklyBlocks, blocklyLocale: blocklyLocale, workspace_xml:workspace_xml, page:1});

              })

            .catch(async(err)=>{//If there is an error while getting server workspace
              logger.error("Error while getting saved workspace from database for guild "+guild.id+" : "+err);
              res.status(500).end("Error 500");
            });

            }else{
              //User isn't admin on the selected server

              //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
              res.redirect('/');
            }
          });

        }else{
          //Server isn't registered in database
          res.redirect('/panel?message=1');
        }

      })
      .catch(async(err)=>{//If there is an erro while checking if server exist in database
        logger.error("Error while checking if guild is registered in database : "+err);
        res.status(500).end("Error 500");
      });

    }else{
      //Not logged in
      res.redirect('/panel');
    }

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*-----------------------------------*/

app.get('/panel/:id/rollback',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 10)
  .then(async()=>{
    //User isn't rate limited

    if(req.session.discord_id!=undefined){

      //Check if server is in database ( = if the bot was added in the server )
      database_pool.query('SELECT EXISTS(SELECT 1 FROM servers WHERE server_id=$1) AS exist;', [String(req.params.id)])
      .then(async(data)=>{
        if(data.rows[0].exist){
          //Server is registered in database

          //Check if user is admin on selected server
          discord_get_servers.servers(req, database_pool, logger, (guilds)=>{//Get all guilds where user has an admin permission
            let guild = undefined;
            for(let i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
              if(guilds[i].id===String(req.params.id)){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
                guild = guilds[i];
              }
            }

            if(guild!=undefined){
              logger.info("User "+ req.session.discord_id +" got rollback access to guild "+guild.id);
              //User is admin on the selected server

              //Get saved workspaces for this guild :
              database_pool.query('SELECT workspace_id, creation_date FROM server_workspace WHERE server_id=$1 ORDER BY creation_date DESC LIMIT $2 OFFSET 1', [String(req.params.id), 20])
              .then(async(savedWorkspaces)=>{
                //Successfully got saved workspaces

                //If a rollback is done, we will use a security token to be sure that users can rollback only after visited this page
                //We also save last seen server's id to avoid rollbacking a server with token generated on another server's rollback page
                req.session.securityToken = crypto.randomBytes(16).toString('hex');
                req.session.rollbackServer = String(req.params.id);

                let locale;
                //Select right language
                if(req.session.locale=='fr'){
                  locale=panel_localization_fr
                }else{
                  locale=panel_localization_en
                }

                //Everything seems good, rendering page
                res.render('panel.ejs', {session: req.session, locale: locale, guilds:guilds, guild: guild, page:2, savedWorkspaces:savedWorkspaces.rows});
              })
              .catch(async(err)=>{//If there is an error
                logger.error("Error while getting guild's saved workspaces : "+err);
                res.status(500).end("Error 500");
              });

            }else{
              //User isn't admin on the selected server

              //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
              res.redirect('/');
            }
          });

        }else{
          //Server isn't registered in database
          res.redirect('/panel?message=1');
        }

      })
      .catch(async(err)=>{//If there is an error while checking if server exist in database
        logger.error("Error while checking if guild is registered in database : "+err);
        res.status(500).end("Error 500");
      });

    }else{
      //Not logged in
      res.redirect('/panel');
    }

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*-----------------------------------*/

app.get('/panel/:id/rollback/:workspaceId',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 15)
  .then(async()=>{
    //User isn't rate limited

    if(req.session.discord_id!=undefined){

      if(req.session.securityToken===req.query.token && req.session.securityToken!=undefined && req.session.rollbackServer === String(req.params.id)){
        //User is admin on the selected server : token generated on /rollback is correct

        req.session.securityToken = crypto.randomBytes(16).toString('hex');

        database_pool.query("SELECT xml FROM server_workspace WHERE server_id=$1 AND workspace_id=$2;", [req.params.id, req.params.workspaceId])
        .then(async(data)=>{
          if(data.rows.length>0){
            //Found xml for this workspace

            //This function will regenerate codes for this workspace and save it as the newest workspace existing
            blockly_xml_to_js.xml_to_js(String(req.params.id), data.rows[0].xml, Blockly, blocklyToken, database_pool, logger).then(async(result)=>{
              if(result==0){
                //OK
                logger.info("User "+ req.session.discord_id +" rollbacked workspace for guild "+req.params.id);
                res.redirect('/panel/'+String(req.params.id)+'?message=2');
              }else{
                //Error with xml
                logger.debug("Failed to rollback guild "+String(req.params.id)+" : xml_to_js function returned an error :"+ result);
                res.redirect('/panel?message=3');
              }
            })
            .catch(async(err)=>{
              //Error while executing function
              logger.debug("Failed to rollback guild "+String(req.params.id)+" : error was thrown in xml_to_js function : "+err);
              res.redirect('/panel?message=3');
            });
          }else{
            //Didn't found xml
            logger.debug("Failed to rollback guild "+String(req.params.id)+" : xml not found in database !");
            res.redirect('/panel?message=3');
          }
        })
        .catch(async(err)=>{
          //Error in database

          logger.error("Error while getting xml for rollback : "+err);
          res.status(500).end("Error 500");
        });

      }else{
        //User hadn't visited rollback page, so he may not be an admin on this server

        //The discord_get_servers.servers() function can log out an user if error while getting his guilds ( rate limits, ... ). We should suppose that req.session isn't defined here
        res.redirect('/');
      }
    }else{
      //Not logged in
      res.redirect('/panel');
    }

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});


/*############################################*/
/* Style definition */
/*############################################*/

app.get('/style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/style.ejs');
});
app.get('/style/index-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/index-style.ejs');
});
app.get('/style/panel-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/panel-style.ejs');
});
app.get('/style/index-panel-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/index-panel-style.ejs');
});
app.get('/style/guild-panel-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/guild-panel-style.ejs');
});
app.get('/style/rollback-panel-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/rollback-panel-style.ejs');
});
app.get('/style/check-cross-animation',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/check-cross-animation.ejs');
});

/*############################################*/
/* Images gateway */
/*############################################*/

app.get('/img/:img',async function(req, res){
  images.getImage(req, res);
});

/*############################################*/
/* JS scripts */
/*############################################*/

app.get('/script/particles',async function(req, res){
  res.setHeader("Content-Type", 'application/javascript');
  res.render('./js/scripts/particles.min.ejs');
});

app.get('/script/particle_config',async function(req, res){
  res.setHeader("Content-Type", 'text/json');
  res.render('./js/scripts/particles_config.ejs');
});

/*############################################*/
/* Localization */
/*############################################*/

app.get('/loc/:lang',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 2)
  .then(async()=>{
    //User isn't rate limited

    if(req.params.lang==='fr'){
      //French
      req.session.locale = 'fr';
    }else{
      //English
      req.session.locale = 'en';
    }

    res.redirect('/');
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*############################################*/
/* 404 error */
/*############################################*/

/* 404 Error, must be the LATEST route
   If the request wasn't caught by another route, it will end here and will be answered by the last app.use
   See https://github.com/expressjs/express/blob/master/examples/error-pages/index.js */
app.get('/404', async function(req, res, next){
  next();//Continue to app.use
});
app.use(async function(req, res, next){
  //localization
  ratesLimitsRedis.consume(req.ip, 20).then(async()=>{
    //User not rate limited

    res.status(404).render('404.ejs');

  }).catch(async(err)=>{
    //User rate limited
    res.status(429).end("Too many requests !");
  });
});


/*############################################*/
/* Blockly Socket.io */
/*############################################*/

io.sockets.on('connect',async function(socket){
  logger.debug((socket.request.session.discord_id||"An unknown user")+" connected with socket.io");

  socket.on("send_workspace", (server_id, data, callback) => {

    ratesLimitsRedis.consume(socket.handshake.address, 20)
    .then(async()=>{
      //User isn't rate limited

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
                callback({status: "NOT OK"});
              }

            });

          }else{
            //User hasn't access to this server
            logger.info(socket.request.session.discord_id+ "tried to edit a workspace via socket.io without access to the guild");
            callback({status: "NOT  OK"});
          }
        });
      }

    })
    .catch(async(err)=>{
      //User is rate limited
      callback({status: "NOT  OK"});
    });


    //TODO : Gérer les données et assurer la sécurité
    //https://developers.google.com/blockly/reference/js/Blockly.Xml
  });

});

/*############################################*/
/* Port management and server starting */
/*############################################*/

let port;

if(process.env.HTTPS=='true'){
  //HTTPS enabled
  port = 443;

  //Let's redirect port 80 to 443
  require('http').createServer(function (req, res) {
      res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
      res.end();
  }).listen(80);

}else{
  //No HTTPS mode
  port = 80;
}
server.listen(port, '0.0.0.0', ()=>{
  console.log("Server Ready !");
  logger.info("Server Ready !");
});
