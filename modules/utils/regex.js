"use strict";

module.exports = {

  dataStorageName: (value)=>{
    return /^([A-Za-z0-9]{3,28})$/.test(value);
  },
  slashCommandName: (value)=>{
    return /^([a-z0-9]{3,28})$/.test(value);
  },
  slashCommandDescription: (value)=>{
    return /^([A-Za-z0-9 ,ąćęóśżźéèê.!?;\-:()€$£%*+/]{0,100})$/.test(value);
  }

}
