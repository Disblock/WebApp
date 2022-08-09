const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const crypto = require('crypto');//Generate random strings

module.exports = {
  //Take the discord login code and a connection object to the database
  login: async function(code, database_pool, req, res, logger){

    try{
      //Sending the code to get tokens
      logger.debug("Sending authorization code to Discord to log in an user...");
      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: process.env.clientId,
					client_secret: process.env.clientSecret,
					code: code,
					grant_type: 'authorization_code',
					redirect_uri: process.env.REDIRECT_URL,
					scope: 'identify guilds',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			});

      const oauthData = await oauthResult.json();

      if(oauthData.error==undefined){
        //Successfull, check if the user is known in the database. If yes, update his tokens and last login. If no, insert tupple in database


        //Get user data
        try{
          logger.debug("Trying to get user's data from Discord API...");
          fetch('https://discord.com/api/users/@me', {
      			headers: {
      				authorization: 'Bearer '+oauthData.access_token,
      			},
      		})
      			.then(result => result.json())
      			.then(response => {
                //Now, check if the user is already registered
               try{
                 if(!response.id){
                   logger.error("Response from Discord : "+response);
                   throw("Invalid user ID sent by Discord API when logging in");
                 }//Throw an error if Discord didn't sent user's data

                 logger.debug("Sending an SQL request to the database : Checking if an user exist in database with user ID "+response.id);
                 database_pool.query("SELECT EXISTS(SELECT 1 FROM users WHERE user_id=$1) AS exist;",[response.id], function(error, results){
                   if(error instanceof Error){
                     logger.error("Error in SQL request when checking if user exist : "+error);
                     res.status(500).end("Error 500");
                   }else{
                     if(results.rows[0].exist){
                       //Already in database
                       logger.debug("Sending an SQL request to the database : updating an existing user with user ID "+response.id);
                       database_pool.query("UPDATE users SET token = $1, refresh_token = $2, username = $3, avatar = $4, last_login = NOW() WHERE user_id = $5;",[oauthData.access_token, oauthData.refresh_token, response.username+'#'+response.discriminator, response.avatar, response.id], (error, results)=>{
                         if(error instanceof Error){
                           logger.error("Error in SQL request when updating an user : "+error);
                           res.redirect("/");//Error in the login process, user redirected to the main page
                         }else{
                           //User is now updated, we can log in
                           req.session.discord_id = response.id;
                           req.session.username = response.username+'#'+response.discriminator;
                           req.session.avatar = response.avatar;
                           req.session.token = oauthData.access_token;
                           req.session.state = crypto.randomBytes(4).toString('hex');//State is regenered; to avoid some security issues
                           req.session.locale = (response.locale==='fr' ? 'fr':'en');//If discord locale is French, save it. If not, default to English
                           req.session.save();
                           logger.debug("Saved session's data for user "+req.session.discord_id);
                           logger.info("User "+req.session.discord_id+" logged in");
                           res.redirect('/panel');
                         }
                       });

                      }else{
                       //Not in database
                       /*database_pool.query("INSERT INTO users (user_id, token, refresh_token, username, avatar, last_login, creation_date) VALUES($1, $2, $3, $4, $5, NOW(), NOW() );", [response.id, oauthData.access_token, oauthData.refresh_token, response.username+'#'+response.discriminator, response.avatar], (error, results)=>{
                         if(error instanceof Error){
                           logger.error("Error in SQL request when registering an user : "+error);
                           res.redirect("/");//Error in the register process, user redirected to the main page
                         }else{
                           //User is registered, we can log in
                           req.session.discord_id = response.id;
                           req.session.username = response.username+'#'+response.discriminator;
                           req.session.avatar = response.avatar;
                           req.session.token = oauthData.access_token;
                           req.session.state = crypto.randomBytes(4).toString('hex');
                           req.session.locale = (response.locale==='fr' ? 'fr':'en');//If discord locale is French, save it. If not, default to English
                           req.session.save();
                           logger.debug("Saved session's data for user "+req.session.discord_id);
                           logger.info("User "+req.session.discord_id+" registered");
                           res.redirect('/panel');
                         }
                       });*/

                       //We're in Closed Alpha, so we just send user back to index with an error message
                       res.redirect('/?error=1975664');
                     }
                   }
                 });

               }catch(err){logger.error("Error when saving to database an user's data : "+err);res.status(500).end("Error 500");}
             }).catch(err=>{
               logger.error("Error when trying to get user's data from Discord API : "+err);res.status(500).end("Error 500");
             });
           }catch(error){
             logger.error("Error when trying to get user's data from Discord API : "+err);res.status(500).end("Error 500");
           }
         }else{
           //Code is incorect or any other problem
           logger.warn("Error when tried to log in an user : "+oauthData.error);
           res.redirect('/');
         }


       }catch(err){logger.error("Error when trying to get oAuth data from Discord API : "+err); res.status(500).end("Error 500");}
   }
}
