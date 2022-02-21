const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const secrets = require('./secrets.js');

module.exports = {
  regen: async function(req, database_pool, callback){

    //Getting user's refresh token
    database_pool.query("SELECT refresh_token FROM users WHERE user_id=$1;",[req.session.discord_id], async function(error, results){
      if(error instanceof Error){
        console.log(error);
        return(callback(undefined));
      }else{
        //Correctly got the refresh token
        if(results.rows[0].refresh_token!=undefined && results.rows[0].refresh_token!=''){

          try{

            //Refreshing the token
            const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
      				method: 'POST',
      				body: new URLSearchParams({
      					client_id: secrets.clientId,
      					client_secret: secrets.clientSecret,
      					grant_type: 'refresh_token',
      					refresh_token: results.rows[0].refresh_token
      				}),
      				headers: {
      					'Content-Type': 'application/x-www-form-urlencoded',
      				}
      			});

            const oauthData = await oauthResult.json();

            if(oauthData.error==undefined && oauthData.message==undefined){
              //If the token is correctly received
              database_pool.query("UPDATE users SET token = $1, refresh_token = $2 WHERE user_id = $3;", [oauthData.access_token, oauthData.refresh_token, req.session.discord_id], async function(error, results){
                if (error instanceof Error){
                  console.log(error);
                  return(callback(undefined));
                }else{
                  //Correctly ended, sending the new token
                  req.session.token = oauthData.access_token;
                  req.session.save();//Must save to ensure everything is saved
                  return(callback(oauthData.access_token));
                }
              });


            }else{
              //Got an error on refreshing the token
              return(callback(undefined));
            }

          }catch(err){
            console.log(err); return(callback(undefined));
          }



        }else{
          console.log("Error : Tried to get refresh token of user "+req.session.discord_id+" but was unable to get it !");
          return(callback(undefined));
        }
      }
    });







  }
}
