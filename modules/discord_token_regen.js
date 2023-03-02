const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const aesjs = require('aes-js');//Used to encrypt tokens
const pbkdf2 = require('pbkdf2');//Used to transform process.env.AES_PASSWORD into a valid password for aes

const { promisify } = require('util');
const pbkdf2Async = promisify(pbkdf2.pbkdf2).bind(pbkdf2);

module.exports = async function(database_pool, logger, discordId){
  /* This function is used to regenerate the token of an user, with the savec regen_token. */

  //Getting user's refresh token
  logger.info("Now trying to refresh the token of user "+ discordId);
  logger.debug("Sending an SQL request to the database : Get refresh token from user with ID "+discordId);

  try{

    let sqlResult = ( await database_pool.query("SELECT ENCODE(refresh_token, 'hex') AS hex_refresh_token, salt FROM users WHERE user_id=$1;",[discordId]) ).rows[0];
    if(sqlResult.hex_refresh_token && sqlResult.salt){
      //OK, we got the refresh token

      //We will decrypt the token
      const key = await pbkdf2Async(process.env.AES_PASSWORD, sqlResult.salt, 18/*iterations*/, 256/8, 'sha512');
      let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1));
      const refreshToken = aesjs.utils.utf8.fromBytes(aesCtr.decrypt(aesjs.utils.hex.toBytes(sqlResult.hex_refresh_token)));//The encrypted hex is converted to bytes, then decrypted, then converted to String

      logger.debug("Sending the refresh token to Discord API...");

      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: process.env.clientId,
          client_secret: process.env.clientSecret,
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      const oauthData = await oauthResult.json();

      if(oauthData.error==undefined && oauthData.message==undefined){
        //If the token is correctly received

        //We will encrypt it and save it in database
        aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1));
        const encryptedToken = aesjs.utils.hex.fromBytes(aesCtr.encrypt(aesjs.utils.utf8.toBytes(oauthData.access_token)));
        aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(1));//We need to redefine, since the counter mode of operation maintains internal state
        const encryptedRefreshToken = aesjs.utils.hex.fromBytes(aesCtr.encrypt(aesjs.utils.utf8.toBytes(oauthData.refresh_token)));


        logger.debug("Sending an SQL request to the database : set tokens for user with ID "+discordId);
        await database_pool.query("UPDATE users SET token = DECODE($1, 'hex'), refresh_token = DECODE($2, 'hex') WHERE user_id = $3;", [encryptedToken, encryptedRefreshToken, discordId]);

        //Correctly ended, sending the new token
        logger.debug("Successfully got new tokens of user "+discordId);
        return(oauthData.access_token);

      }else{
        //Got an error on refreshing the token
        logger.warn("Error when refreshing a token for the user "+discordId+" : Error = "+oauthData.error+"; Message = "+oauthData.message);
        return(undefined);
      }



    }else{
      //Error...
      logger.warn("Error : Tried to get refresh token of user "+discordId+" but was unable to get it !");
      return(undefined);
    }

  }catch(err){
    logger.error("Error when refreshing a token for the user "+discordId+" : "+err); return(undefined);
  }
}
