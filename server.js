'use strict';
/*############################################*/
/* Homemade modules */
/*############################################*/

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
const winston = require('winston');//Used to save app logs
const rateLimiter = require("rate-limiter-flexible");//Rates limits management
require('winston-daily-rotate-file');//Daily rotating files

/*############################################*/
/* Back-End for pages */
/*############################################*/
//These modules are used to store functions to run when a webpage is reached
const indexBackEnd = require('./modules/pages_back_end/index.js');
const discordLoginBackEnd = require('./modules/pages_back_end/discord_login.js');
const panelBackEnd = require('./modules/pages_back_end/panel.js');
const guildPanelBackEnd = require('./modules/pages_back_end/guild_panel.js');
const guildRollbackBackEnd = require('./modules/pages_back_end/rollback_panel.js');
const rollbackWorkspaceBackEnd = require('./modules/pages_back_end/rollback_workspace.js');
const logsPanelBackEnd = require('./modules/pages_back_end/logs_panel.js');
const premiumPanelBackEnd = require('./modules/pages_back_end/premium_panel.js');
const premiumPanelEditBackEnd = require('./modules/pages_back_end/premium_panel_edit.js');
const premiumPanelCodeBackEnd = require('./modules/pages_back_end/premium_panel_code.js');

/*############################################*/
/* Back-End for pages */
/*############################################*/

const sendWorkspaceSocketBackEnd = require('./modules/sockets_back_end/send_workspace.js');

/*############################################*/
/* Used translations */
/*############################################*/
//These translations are used here. Per page translations are loaded in their back-end functions.
const blockly_localization_fr = require('./modules/blockly/localization/fr.js');//Add localization to the generator - FR
const blockly_localization_en = require('./modules/blockly/localization/en.js');//Add localization to the generator - EN

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
                      require('./modules/blockly/blocks/user_blocks.js').blocks,require('./modules/blockly/blocks/color_blocks.js').blocks,require('./modules/blockly/blocks/var_blocks.js').blocks,
                      require('./modules/blockly/blocks/emoji_blocks.js').blocks];
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
  points:70,
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
  try{
    if(!req.session.locale){
      if(req.headers["accept-language"]!='' && req.headers["accept-language"]!=undefined){
        let lang = req.headers["accept-language"].split(",")[0];
        req.session.locale = (lang.includes("fr") ? 'fr' : 'en');//If seems to be French, user locale is set to French. Else, set to English
      }else{
      //Browser didn't sent accept-language header
      req.session.locale = 'en';
      }
    }
  }catch(err){
    logger.error("Error while trying to determine the user language : "+err);
    req.session.locale = 'en';
  }

  //Continue actions
  next();
});

/*############################################*/
/* Pages Definition */
/*############################################*/

/* Used to serve robots.txt; images; ... */
app.use(express.static("views/static/"));

app.get('/', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 3).then(async()=>{
    //User not rate limited

    indexBackEnd(req, res);

  }).catch(async(err)=>{
    //User rate limited
    res.status(429).end("Too many requests !");
  });
});

/*-----------------------------------*/

app.get('/login', async function(req, res){

  ratesLimitsRedis.consume(req.ip, 5).then(async()=>{
    //User not rate limited

    req.session.state = crypto.randomBytes(4).toString('hex');
    res.redirect(process.env.LOGIN_URL+'&state='+req.session.state);

  }).catch(async(err)=>{
    //User rate limited
    res.status(429).end("Too many requests !");
  });

})

/*-----------------------------------*/

app.get('/discord_login',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 20)
  .then(async()=>{
    //User isn't rate limited

    discordLoginBackEnd(req, res, database_pool, logger);

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
    panelBackEnd(req, res, database_pool, logger, redisClient);

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});

/*-----------------------------------*/

/*app.get('/panel/premium', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 15)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelBackEnd(req, res, database_pool, logger, redisClient);
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

/*app.get('/panel/premium/edit', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 30)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelEditBackEnd(req, res, database_pool, logger);
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

/*app.get('/panel/premium/code', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 20)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelCodeBackEnd(req, res, database_pool, logger);
  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

app.get('/panel/:id',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 10)
  .then(async()=>{
    //User isn't rate limited

    guildPanelBackEnd(req, res, database_pool, logger, redisClient, blocklyBlocks);

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

    guildRollbackBackEnd(req, res, database_pool, logger, redisClient);

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*-----------------------------------*/

app.get('/panel/:id/rollback/:workspaceId',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 20)
  .then(async()=>{
    //User isn't rate limited

    rollbackWorkspaceBackEnd(req, res, database_pool, logger, Blockly, blocklyToken);

  })
  .catch(async(err)=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });

});

/*-----------------------------------*/

app.get('/panel/:id/logs',async function(req, res){
  ratesLimitsRedis.consume(req.ip, 10)
  .then(async()=>{
    //User isn't rate limited

    logsPanelBackEnd(req, res, database_pool, logger, redisClient);

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
app.get('/style/logs-panel-style',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/logs-panel-style.ejs');
});
app.get('/style/premium-panel-style', async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/premium-panel-style.ejs');
});
app.get('/style/check-cross-animation',async function(req, res){
  res.setHeader("Content-Type", 'text/css');
  res.render('./style/check-cross-animation.ejs');
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
  ratesLimitsRedis.consume(req.ip, 30).then(async()=>{
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

    ratesLimitsRedis.consume(socket.handshake.address, 40)
    .then(async()=>{
      //User isn't rate limited

      sendWorkspaceSocketBackEnd(socket, server_id, data, callback, database_pool, logger, redisClient, Blockly, blocklyToken);

    })
    .catch(async(err)=>{
      //User is rate limited
      callback({status: "NOT OK"});
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
