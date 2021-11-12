const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');
const mysql = require('mysql');

module.exports = {
  regen: async function(req, database_connection, callback){
    console.log("AYAYA LE REGEN BORDEL");


    //Getting user's refresh token
    database_connection.query("SELECT refresh_token FROM user WHERE id="+mysql.escape(req.session.discord_id)+";", async function(error, results, fields){
      if(error instanceof Error){
        console.log(error);
        return(callback(undefined));
      }else{
        //Correctly got the refresh token
        if(results[0].refresh_token!=undefined && results[0].refresh_token!=''){

          try{

            //Refreshing the token
            const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
      				method: 'POST',
      				body: new URLSearchParams({
      					client_id: secrets.clientId,
      					client_secret: secrets.clientSecret,
      					grant_type: 'refresh_token',
      					refresh_token: results[0].refresh_token
      				}),
      				headers: {
      					'Content-Type': 'application/x-www-form-urlencoded',
      				}
      			});

            const oauthData = await oauthResult.json();

            if(oauthData.error==undefined && oauthData.message==undefined){
              //If the token is correctly received
              database_connection.query("UPDATE user SET token = "+mysql.escape(oauthData.access_token)+", refresh_token = "+mysql.escape(oauthData.refresh_token)+" WHERE id = "+mysql.escape(req.session.discord_id)+";");
               if (error instanceof Error){
                 console.log(error);
                 return(callback(undefined));
               }else{
                 //Correctly ended, sending the new token
                 req.session.token = oauthData.access_token;
                 req.session.save();//Must save to ensure everything is recor
                 return(callback(oauthData.access_token));
               }



            }else{
              //Got an error on refreshing the token
              return(callback(undefined));
            }

          }catch(err){
            console.log(err); return(callback(undefined));
          }




          ;
        }else{
          console.log("Error : Tried to get refresh token of user "+req.session.discord_id+" but was unable to get it !");
          return(callback(undefined));
        }
      }
    });







  }
}
