"use strict";
/*############################################*/
/* Homemade modules */
/*############################################*/

const blocklyGenerator = require("./modules/blockly/generator/generator.js"); //Blockly's generator, blocks to Discord.js
const initLogs = require("./modules/init_logs.js"); //Show a message in logs files and console when starting
const workspaceErrorsEnum = require("./modules/enums/workspace_errors.js"); //Enum that refer to possible errors while working on code sent by a server
const startupSQL = require("./modules/startup_sql_queries.js"); //SQL requests that must be executed on startup

/*############################################*/
/* Imported modules */
/*############################################*/

const express = require("express"); //Did I really need to explain ?
const morgan = require("morgan"); //Logs for the server
//const ejs = require("ejs");//Allow to serve .ejs files
const bodyParser = require("body-parser"); //Get data from <form>
const pg = require("pg"); //Postgresql
const redis = require("redis"); //Redis
const session = require("express-session"); //Sessions management
const redisStore = require("connect-redis")(session); //Save sessions in Redis
const fs = require("fs"); //FileSystem, can interact with files stored in the system
//const path = require("path");//Manage access paths
const crypto = require("crypto"); //Generate random strings
//const url = require("url");//Enable access to query string parameters
//const bigInt = require("big-integer");//Used to check permissions on a server
let Blockly = require("blockly"); //Blockly
const winston = require("winston"); //Used to save app logs
const rateLimiter = require("rate-limiter-flexible"); //Rates limits management
require("winston-daily-rotate-file"); //Daily rotating files

/*############################################*/
/* Back-End for pages */
/*############################################*/
//These modules are used to store functions to run when a webpage is reached
const indexBackEnd = require("./modules/pages_back_end/index.js");
const discordLoginBackEnd = require("./modules/pages_back_end/discord_login.js");
const discordBotAddedBackEnd = require("./modules/pages_back_end/bot_added.js");
const panelBackEnd = require("./modules/pages_back_end/panel.js");
const guildPanelBackEnd = require("./modules/pages_back_end/guild_panel.js");
const guildRollbackBackEnd = require("./modules/pages_back_end/rollback_panel.js");
const rollbackWorkspaceBackEnd = require("./modules/pages_back_end/rollback_workspace.js");
const logsPanelBackEnd = require("./modules/pages_back_end/logs_panel.js");
//const premiumPanelBackEnd = require("./modules/pages_back_end/premium_panel.js");
//const premiumPanelEditBackEnd = require("./modules/pages_back_end/premium_panel_edit.js");
//const premiumPanelCodeBackEnd = require("./modules/pages_back_end/premium_panel_code.js");

/*############################################*/
/* Back-End for socket.io */
/*############################################*/

const sendWorkspaceSocketBackEnd = require("./modules/sockets_back_end/send_workspace.js");

/*############################################*/
/* Used translations */
/*############################################*/
//This translation is used here. Per page translations are loaded in their back-end functions.
const initLogsblocklyLocalizationEn = require("./modules/blockly/localization/en.js"); //Add localization to the generator - EN

/*############################################*/
/* Express and server creation */
/*############################################*/

const app = express(); //Express initialisation
let server;
if (process.env.HTTPS == "true") {
  //HTTPS enabled
  server = require("https").createServer(
    { key: fs.readFileSync("./certs/key.pem"), cert: fs.readFileSync("./certs/cert.pem") },
    app
  );
}
//HTTPS disabled
else {
  server = require("http").createServer(app);
} //Server creation

/*############################################*/
/* Morgan & winston modules ( Logging ) */
/*############################################*/

initLogs.initConsole(); //Show a message in console when starting

/* ##### MAIN LOGGER ##### */
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.json()
  ),
  //exitOnError: false,
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "./logs/app/error-%DATE%.log",
      level: "error",
      maxFiles: process.env.LOGS_MAX_FILES,
      maxSize: "1g",
    }), //Errors file ( Errors )
    new winston.transports.DailyRotateFile({
      filename: "./logs/app/backend-%DATE%.log",
      maxFiles: process.env.LOGS_MAX_FILES,
      maxSize: "1g",
    }), //Backend logs ( info, errors, debug, ...)
  ],
});

//Debug mode
if (process.env.DEBUG === "true") {
  logger.add(
    new winston.transports.DailyRotateFile({
      filename: "./logs/app/debug-%DATE%.log",
      level: "debug",
      maxFiles: process.env.LOGS_MAX_FILES,
      maxSize: "1g",
    })
  );
}

initLogs.initLogger(logger); //Initialized here to avoid showing the message twice in console
//logger.error('The server has started, logging errors here !');//Sending a message in error logs to show that we started

//If not in production, data is also logged in console
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ level: true }),
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.simple()
      ),

      level: process.env.DEBUG === "true" ? "debug" : "info", //Debug mode or normal errors ?
    })
  );
}

/* ##### ACCESS LOGGER ##### */
const accessLogger = winston.createLogger({
  levels: { debug: 2, info: 1, access: 0 },
  level: "debug",
  format: winston.format.simple(),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "./logs/access/access-%DATE%.log",
      maxFiles: process.env.LOGS_MAX_FILES,
      maxSize: "1g",
    }), //Access logs
  ],
});

initLogs.initLogger(accessLogger); //Initialized here to avoid showing the message twice in console

//If not in production, show logs in console
if (process.env.NODE_ENV !== "production") {
  accessLogger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ level: true, colors: { access: "black whiteBG" } }),
        winston.format.simple()
      ),
    })
  );
}

app.use(
  morgan("combined", {
    stream: {
      write: async (message) => {
        accessLogger.access(message.trim());
      },
    },
  })
); //Start logging

/*############################################*/
/* Database databasePool */
/*############################################*/

//databasePool to the database
const databasePool = new pg.Pool(); //Credentials are given by env var
databasePool.query("SELECT NOW();", (err, res) => {
  if (err instanceof Error || !res) {
    logger.error("Can't connect to the Database when starting !");
    throw err;
  } else {
    startupSQL(databasePool)
      .then(() => {
        logger.debug("Successfully connected to the Database and ran neccessary SQL requests !");
      })
      .catch((err) => {
        logger.error("Error while executing startup SQL queries : " + err);
        throw err; //This is a fatal error, so we can stop here
      });
  }
});

/*############################################*/
/* Redis database */
/*############################################*/

//Redis and session init
const redisClient = redis.createClient({ url: "redis://@redis-server:6379" }); /* Add credentials on Redis */
const redisDatabase = new redisStore({ client: redisClient, ttl: 86000 });

redisClient.on("error", (err) => {
  logger.error("Redis error : " + err);
  throw err;
});

redisClient.on("ready", () => {
  logger.debug("Successfully connected to Redis server !");
});

/*############################################*/
/* Session module */
/*############################################*/

const sessionMiddleware = session({
  secret: [process.env.SESSION_COOKIES_SECRET],
  //Sessions are stored in Redis server
  store: redisDatabase,
  saveUninitialized: true,
  resave: true,
});

app.use(sessionMiddleware);

/*############################################*/
/* Socket.io module */
/*############################################*/

const io = require("socket.io")(server); //Max 1Mb/send by default
io.use(function (socket, next) {
  //At every io request, the middleware is called
  sessionMiddleware(socket.request, socket.request.res || {}, next); //To read session : socket.request.session.Variable
});

/*############################################*/
/* BodyParser Initialization */
/*############################################*/

app.use(bodyParser.urlencoded({ extended: true }));

/*############################################*/
/* Blockly Initialization */
/*############################################*/

//Blocks definition
const blocklyBlocks = [
  require("./modules/blockly/blocks/channel_blocks.js").blocks,
  require("./modules/blockly/blocks/embed_blocks.js").blocks,
  require("./modules/blockly/blocks/event_blocks.js").blocks,
  require("./modules/blockly/blocks/guild_blocks.js").blocks,
  require("./modules/blockly/blocks/message_blocks.js").blocks,
  require("./modules/blockly/blocks/rank_blocks.js").blocks,
  require("./modules/blockly/blocks/user_blocks.js").blocks,
  require("./modules/blockly/blocks/color_blocks.js").blocks,
  require("./modules/blockly/blocks/var_blocks.js").blocks,
  require("./modules/blockly/blocks/emoji_blocks.js").blocks,
  require("./modules/blockly/blocks/miscellaneous_blocks.js").blocks,
  require("./modules/blockly/blocks/slash_commands_blocks.js").blocks,
  require("./modules/blockly/blocks/data_storage_blocks.js").blocks,
];
blocklyBlocks.forEach((element) => {
  Blockly.defineBlocksWithJsonArray(JSON.parse(element));
});
//Extensions definition
//Mostly used to Regex check values entered in direct inputs, in Front end
const blocklyExtensions = [
  require("./modules/blockly/blocks/extensions/slash_commands_blocks.js"), //Refers immediately to a function
  require("./modules/blockly/blocks/extensions/var_blocks.js"),
  require("./modules/blockly/blocks/extensions/storage_blocks.js"),
];
blocklyExtensions.forEach((element) => {
  element(Blockly); //Runs the function with Blockly, which defines the extensions used for the blocks
});

//Text definition
Blockly = initLogsblocklyLocalizationEn(Blockly);
Blockly = blocklyGenerator.initializeGenerator(Blockly); //Initialize generator

/*############################################*/
/* Rates limits */
/*############################################*/

//https://github.com/animir/node-rate-limiter-flexible/wiki/Options
const ratesLimitsRedis = new rateLimiter.RateLimiterRedis({
  points: 70,
  duration: 5,
  blockDuration: 0, //Duration to wait if limit reached
  storeClient: redisClient,
  inmemoryBlockOnConsumed: 0,
});

/*############################################*/
/* Function ran on every request */
/*############################################*/

//Headers on every request
app.use(async function (req, res, next) {
  //Headers on every pages
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "deny");
  res.setHeader("X-XSS-Protection", "1;mode=block");
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; object-src 'none';");
  res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");

  //Save user language if not defined
  try {
    if (!req.session.locale) {
      if (req.headers["accept-language"] != "" && req.headers["accept-language"] != undefined) {
        const lang = req.headers["accept-language"].split(",")[0];
        req.session.locale = lang.includes("fr") ? "fr" : "en"; //If seems to be French, user locale is set to French. Else, set to English
      }
      //Browser didn't sent accept-language header
      else {
        req.session.locale = "en";
      }
    }
  } catch (err) {
    logger.error("Error while trying to determine the user language : " + err);
    req.session.locale = "en";
  }

  //Continue actions
  next();
});

/*############################################*/
/* Pages Definition */
/*############################################*/

/* Used to serve robots.txt; images; ... */
app.use(express.static("views/static/"));

app.get("/", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 3)
    .then(async () => {
      //User not rate limited

      indexBackEnd(req, res);
    })
    .catch(async () => {
      //User rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/login", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 5)
    .then(async () => {
      //User not rate limited

      req.session.state = crypto.randomBytes(4).toString("hex");
      res.redirect(process.env.LOGIN_URL + "&state=" + req.session.state);
    })
    .catch(async () => {
      //User rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/discord_login", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 20)
    .then(async () => {
      //User isn't rate limited

      discordLoginBackEnd(req, res, databasePool, logger);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/bot_added", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 20)
    .then(async () => {
      //User isn't rate limited

      discordBotAddedBackEnd(req, res, databasePool, logger);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/logout", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 2)
    .then(async () => {
      //User isn't rate limited
      logger.info("Logged out the user " + req.session.discord_id);
      req.session.destroy();
      res.redirect("/");
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/panel", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 8)
    .then(async () => {
      //User isn't rate limited
      panelBackEnd(req, res, databasePool, logger, redisClient);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

/*app.get('/panel/premium', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 15)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelBackEnd(req, res, databasePool, logger, redisClient);
  })
  .catch(async()=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

/*app.get('/panel/premium/edit', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 30)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelEditBackEnd(req, res, databasePool, logger);
  })
  .catch(async()=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

/*app.get('/panel/premium/code', async function(req, res){
  ratesLimitsRedis.consume(req.ip, 20)
  .then(async()=>{
    //User isn't rate limited
    premiumPanelCodeBackEnd(req, res, databasePool, logger);
  })
  .catch(async()=>{
    //User is rate limited
    res.status(429).end("Too many requests !");
  });
});*/

/*-----------------------------------*/

app.get("/panel/:id", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 10)
    .then(async () => {
      //User isn't rate limited

      guildPanelBackEnd(req, res, databasePool, logger, redisClient, blocklyBlocks, blocklyExtensions);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/panel/:id/rollback", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 10)
    .then(async () => {
      //User isn't rate limited

      guildRollbackBackEnd(req, res, databasePool, logger, redisClient);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/panel/:id/rollback/:workspaceId", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 20)
    .then(async () => {
      //User isn't rate limited

      rollbackWorkspaceBackEnd(req, res, databasePool, logger, redisClient, Blockly);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*-----------------------------------*/

app.get("/panel/:id/logs", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 10)
    .then(async () => {
      //User isn't rate limited

      logsPanelBackEnd(req, res, databasePool, logger, redisClient);
    })
    .catch(async () => {
      //User is rate limited
      res.status(429).end("Too many requests !");
    });
});

/*############################################*/
/* Style definition */
/*############################################*/

app.get("/style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/style.ejs");
});
app.get("/style/index-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/index-style.ejs");
});
app.get("/style/panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/panel-style.ejs");
});
app.get("/style/index-panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/index-panel-style.ejs");
});
app.get("/style/guild-panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/guild-panel-style.ejs");
});
app.get("/style/rollback-panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/rollback-panel-style.ejs");
});
app.get("/style/logs-panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/logs-panel-style.ejs");
});
app.get("/style/premium-panel-style", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/premium-panel-style.ejs");
});
app.get("/style/check-cross-animation", async function (req, res) {
  res.setHeader("Content-Type", "text/css");
  res.render("./style/check-cross-animation.ejs");
});

/*############################################*/
/* JS scripts */
/*############################################*/

app.get("/script/particles", async function (req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.render("./js/scripts/particles.min.ejs");
});

app.get("/script/particle_config", async function (req, res) {
  res.setHeader("Content-Type", "text/json");
  res.render("./js/scripts/particles_config.ejs");
});

/*############################################*/
/* Localization */
/*############################################*/

app.get("/loc/:lang", async function (req, res) {
  ratesLimitsRedis
    .consume(req.ip, 2)
    .then(async () => {
      //User isn't rate limited

      if (req.params.lang === "fr") {
        //French
        req.session.locale = "fr";
      }
      //English
      else {
        req.session.locale = "en";
      }

      res.redirect("/");
    })
    .catch(async () => {
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
app.get("/404", async function (req, res, next) {
  next(); //Continue to app.use
});
app.use(async function (req, res /*, next*/) {
  ratesLimitsRedis
    .consume(req.ip, 30)
    .then(async () => {
      //User not rate limited

      res.status(404).render("404.ejs");
    })
    .catch(async () => {
      //User rate limited
      res.status(429).end("Too many requests !");
    });
});

/*############################################*/
/* Blockly Socket.io */
/*############################################*/

io.sockets.on("connect", async function (socket) {
  logger.debug((socket.request.session.discord_id || "An unknown user") + " connected with socket.io");

  socket.on("send_workspace", (serverId, data, callback) => {
    ratesLimitsRedis
      .consume(socket.handshake.address, 40)
      .then(async () => {
        //User isn't rate limited

        sendWorkspaceSocketBackEnd(socket, serverId, data, callback, databasePool, logger, redisClient, Blockly);
      })
      .catch(async () => {
        //User is rate limited
        callback({ status: "NOT OK", errorCode: workspaceErrorsEnum.rateLimitError });
      });

    //TODO : Gérer les données et assurer la sécurité
    //https://developers.google.com/blockly/reference/js/Blockly.Xml
  });
});

/*############################################*/
/* Port management and server starting */
/*############################################*/

let port;

if (process.env.HTTPS == "true") {
  //HTTPS enabled
  port = 443;

  //Let's redirect port 80 to 443
  require("http")
    .createServer(function (req, res) {
      res.writeHead(301, { Location: "https://" + req.headers["host"] + req.url });
      res.end();
    })
    .listen(80);
}
//No HTTPS mode
else {
  port = 80;
}

server.listen(port, "0.0.0.0", () => {
  logger.info("Server Ready !");
});
