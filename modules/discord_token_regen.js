const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async function(req, database_pool, logger){
  /* This function is used to regenerate the token of an user, with the savec regen_token. */

  //Getting user's refresh token
  logger.info("Now trying to refresh the token of user "+ req.session.discord_id);
  logger.debug("Sending an SQL request to the database : Get refresh token from user with ID "+req.session.discord_id);

  try{

    let refresh_token = ( await database_pool.query("SELECT refresh_token FROM users WHERE user_id=$1;",[req.session.discord_id]) ).rows[0].refresh_token;
    if(refresh_token){
      //OK, we got the refresh token

      logger.debug("Sending the refresh token to Discord API...");

      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: process.env.clientId,
          client_secret: process.env.clientSecret,
          grant_type: 'refresh_token',
          refresh_token: refresh_token
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      const oauthData = await oauthResult.json();

      if(oauthData.error==undefined && oauthData.message==undefined){
        //If the token is correctly received
        logger.debug("Sending an SQL request to the database : set tokens for user with ID "+req.session.discord_id);
        await database_pool.query("UPDATE users SET token = $1, refresh_token = $2 WHERE user_id = $3;", [oauthData.access_token, oauthData.refresh_token, req.session.discord_id]);

        //Correctly ended, sending the new token
        req.session.token = oauthData.access_token;
        req.session.save();//Must save to ensure everything is saved

        logger.debug("Successfully refreshed the tokens of user "+req.session.discord_id);
        return(oauthData.access_token);

      }else{
        //Got an error on refreshing the token
        logger.warn("Error when refreshing a token for the user "+req.session.discord_id+" : Error = "+oauthData.error+"; Message = "+oauthData.message);
        return(undefined);
      }



    }else{
      //Error...
      logger.warn("Error : Tried to get refresh token of user "+req.session.discord_id+" but was unable to get it !");
      return(undefined);
    }

  }catch(err){
    logger.error("Error when refreshing a token for the user "+req.session.discord_id+" : "+err); return(undefined);
  }
}
