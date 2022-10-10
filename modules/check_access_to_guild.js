'use-strict';

module.exports = function(guilds, guildID){
  /* Function used to check if an user can access to a server. Return the guild object, or null. */

  //Check if user is admin on selected server
  let guild = undefined;
  for(let i=0; i<guilds.length; i++){//Iterate throught all user's admin guilds, and compare them to the ID of the selected guilds
    if(guilds[i].id===guildID){//If one guild match this ID, the user is admin in this guild. If none match with, user isn't admin on it
      guild = guilds[i];
    }
  }

  if(guild){
    //OK, this user is admin on this guild
    return(guild);
  }else{
    //This user isn't an admin on this guild.
    return(null);
  }

}
