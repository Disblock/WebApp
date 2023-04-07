"use strict";

module.exports = async function (req, res, databasePool, logger) {
  //user must be logged in and have sent a code
  if (req.session.discord_id != undefined && req.query.premium_code) {
    databasePool
      .query(
        "SELECT code, duration FROM premium_code WHERE code=$1 AND active = TRUE AND (expire_date > NOW() OR expire_date IS NULL);",
        [req.query.premium_code]
      )
      .then(async (result) => {
        if (result.rows.length == 1) {
          //That's a valid code

          let duration;
          if (result.rows[0].duration) {
            //Temporary
            duration = new Date(Date.now() + result.rows[0].duration * 60000);
          } //Ms to min
          //Lifetime
          else {
            duration = null;
          }

          try {
            await databasePool.query("UPDATE premium_code SET active = FALSE WHERE code = $1;", [
              req.query.premium_code,
            ]);
            await databasePool.query(
              "INSERT INTO premium (start_date, end_date, user_id, premium_code) VALUES (NOW(), $1, $2, $3);",
              [duration, req.session.discord_id, req.query.premium_code]
            );
            logger.info(req.session.discord_id + " used the premium code " + String(req.query.premium_code));
          } catch (err) {
            logger.error("Error while disabling a premium code and adding the premium slot in database : " + err);
            res.status(500).end("Error ! Please, try again later or report this to an administrator");
            return;
          }

          //OK, the code is correctly used
          res.redirect("/panel/premium?message=6");
        }
        //This code don't seems to exist
        else {
          res.redirect("/panel/premium?message=5");
        }
      })
      .catch((err) => {
        logger.error("Error while checking if premium code was valid in database : " + err);
      });
  } else {
    res.redirect("/panel");
  }
};
