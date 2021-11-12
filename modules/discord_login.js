const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');
const mysql = require('mysql');

module.exports = {
  //Take the discord login code and a connection object to the database
  login: async function(code, database_connection, req, res){

    try{
      //Sending the code to get tokens
      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: secrets.clientId,
					client_secret: secrets.clientSecret,
					code: code,
					grant_type: 'authorization_code',
					redirect_uri: 'http://localhost:8080/discord_login',
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

                 database_connection.query("SELECT COUNT(id) AS nb FROM user WHERE id="+mysql.escape(response.id)+";", function(error, results, fields){
                   if(error instanceof Error){
                     console.log(error);
                     res.status(500).end("Error 500");
                   }else{
                     if(results[0].nb>0){
                       //Already in database
                       database_connection.query("UPDATE user SET token = "+mysql.escape(oauthData.access_token)+", refresh_token = "+mysql.escape(oauthData.refresh_token)+", username = "+mysql.escape(response.username+'#'+response.discriminator)+", avatar="+mysql.escape(response.avatar)+", last_login = NOW() WHERE id = "+mysql.escape(response.id)+";");
                        if (error instanceof Error){
                          console.log(error);
                          res.redirect("/");//Error in the login process, user redirected to the main page
                        }else{
                          //User is now updated, we can log in
                          req.session.discord_id = response.id;
                          req.session.username = response.username+'#'+response.discriminator;
                          req.session.avatar = response.avatar;
                          req.session.token = oauthData.access_token;
                          req.session.save();
                          res.redirect('/panel');
                        }
                      }else{
                       //Not in database
                       database_connection.query("INSERT INTO user (id, token, refresh_token, username, avatar, last_login, creation_date) VALUES("+mysql.escape(response.id)+", "+mysql.escape(oauthData.access_token)+", "+mysql.escape(oauthData.refresh_token)+", "+mysql.escape(response.username+'#'+response.discriminator)+", "+mysql.escape(response.avatar)+", NOW(), NOW() );");
                       if (error instanceof Error){
                         console.log(error);
                         res.redirect("/");//Error in the register process, user redirected to the main page
                       }else{
                         //User is registered, we can log in
                         req.session.discord_id = response.id;
                         req.session.username = response.username+'#'+response.discriminator;
                         req.session.avatar = response.avatar;
                         req.session.token = oauthData.access_token;
                         req.session.save();
                         res.redirect('/panel');
                       }
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
