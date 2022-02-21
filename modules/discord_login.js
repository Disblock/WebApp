const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');
const crypto = require('crypto');//Generate random strings

module.exports = {
  //Take the discord login code and a connection object to the database
  login: async function(code, database_pool, req, res){

    try{
      //Sending the code to get tokens
      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: secrets.clientId,
					client_secret: secrets.clientSecret,
					code: code,
					grant_type: 'authorization_code',
					redirect_uri: 'http://localhost:8081/discord_login',
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
          fetch('https://discord.com/api/users/@me', {
      			headers: {
      				authorization: 'Bearer '+oauthData.access_token,
      			},
      		})
      			.then(result => result.json())
      			.then(response => {
                //Now, check if the user is already registered
               try{

                 database_pool.query("SELECT EXISTS(SELECT 1 FROM users WHERE user_id=$1) AS exist;",[response.id], function(error, results){
                   if(error instanceof Error){
                     console.log(error);
                     res.status(500).end("Error 500");
                   }else{
                     if(results.rows[0].exist){
                       //Already in database
                       database_pool.query("UPDATE users SET token = $1, refresh_token = $2, username = $3, avatar = $4, last_login = NOW() WHERE user_id = $5;",[oauthData.access_token, oauthData.refresh_token, response.username+'#'+response.discriminator, response.avatar, response.id], (error, results)=>{
                         if(error instanceof Error){
                           console.log(error);
                           res.redirect("/");//Error in the login process, user redirected to the main page
                         }else{
                           //User is now updated, we can log in
                           req.session.discord_id = response.id;
                           req.session.username = response.username+'#'+response.discriminator;
                           req.session.avatar = response.avatar;
                           req.session.token = oauthData.access_token;
                           req.session.state = crypto.randomBytes(4).toString('hex');//State is regenered; to avoid some security issues
                           req.session.save();
                           res.redirect('/panel');
                         }
                       });

                      }else{
                       //Not in database
                       database_pool.query("INSERT INTO users (user_id, token, refresh_token, username, avatar, last_login, creation_date) VALUES($1, $2, $3, $4, $5, NOW(), NOW() );", [response.id, oauthData.access_token, oauthData.refresh_token, response.username+'#'+response.discriminator, response.avatar], (error, results)=>{
                         if(error instanceof Error){
                           console.log(error);
                           res.redirect("/");//Error in the register process, user redirected to the main page
                         }else{
                           //User is registered, we can log in
                           req.session.discord_id = response.id;
                           req.session.username = response.username+'#'+response.discriminator;
                           req.session.avatar = response.avatar;
                           req.session.token = oauthData.access_token;
                           req.session.state = crypto.randomBytes(4).toString('hex');
                           req.session.save();
                           res.redirect('/panel');
                         }
                       });
                     }
                   }
                 });

               }catch(err){console.log(err);res.status(500).end("Error 500");}
             });
           }catch(error){
             console.log(error);res.status(500).end("Error 500");
           }
         }else{
           //Code is incorect
           res.redirect('/');
         }


       }catch(err){console.log(err), res.status(500).end("Error 500");}
   }
}
