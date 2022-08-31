'use strict';
//Used translations
const index_localization_fr = require('../localization/index_fr.js');
const index_localization_en = require('../localization/index_en.js');

module.exports = async function(req, res){
  let locale;
  //Select right language
  if(req.session.locale=='fr'){
    locale=index_localization_fr;
  }else{
    locale=index_localization_en;
  }
  res.render('index.ejs', {session: req.session, locale:locale});
}
