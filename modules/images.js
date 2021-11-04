const fs = require('fs')//FileSystem, permet d'intéragir avec les fichiers présents sur le serveur
var path = require('path');//Gestion des chemins d'accès

var retours_possibles = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

module.exports = {
  getImage: function(req, res){
    if(/^([a-zA-Z0-9._]{0,99})$/.test(req.params.img)){//Vérification pour éviter une possible faille ici

        var type = retours_possibles[path.extname('views/img/'+req.params.img).slice(1)] || 'text/plain';//En fonction de l'extension du fichier, je choisis le type du retour
        var s = fs.createReadStream('views/img/'+req.params.img);//Puis je crée un stream pour envoyer ce fichier

        s.on('open', function () {//Quand l'événement ouverture est détécté, le fichier est envoyé au client
          res.set('Content-Type', type);
          s.pipe(res);
        });

        s.on('error', function () {//S'il y a une erreur, une erreur 404 est renvoyée
          res.set('Content-Type', 'text/plain');
          res.status(404).end('Not found');
        });

    }else{
      res.status(404).end('Not found');//Argument :img incorrect
    }
  }
}
