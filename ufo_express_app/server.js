var express = require('express');
var fs = require('fs');
var where = require('./where');

var db = JSON.parse(fs.readFileSync('./data/sightings.json'));
var app = express();

app.set('views', './views');
app.set('view engine', 'erb');

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.render('index.html.ejs');
});
app.get('/search', function(request, response){
  var result = where(request.query, db);
  response.render('search.html.ejs', {
    sightings: result
  });
});

var port = process.env.PORT || 3000;
if(!module.parent){
  app.listen(port, function(){
    console.log('Listening on port: ' + port);
  });
}


module.exports = app;
