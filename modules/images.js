const fs = require('fs')//FileSystem, is used to interact with files on the server
var path = require('path');//Files paths

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
    if(/^([a-zA-Z0-9._]{0,99})$/.test(req.params.img)){//Name must be "correct" and not too long

        var type = retours_possibles[path.extname('views/img/'+req.params.img).slice(1)] || 'text/plain';//File extension is used to determine the right return type
        var s = fs.createReadStream('views/img/'+req.params.img);//A stream is created to send the file

        s.on('open', function () {//When stream ready, data is sent to the client
          res.set('Content-Type', type);
          s.pipe(res);
        });

        s.on('error', function () {//In case of an error, 404 is sent
          res.set('Content-Type', 'text/plain');
          res.status(404).end('Not found');
        });

    }else{
      res.status(404).end('Not found');//:img is incorrect
    }
  }
}
