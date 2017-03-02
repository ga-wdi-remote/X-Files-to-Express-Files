var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer().listen(3000);
var sightings = require('./sightings.json');
var sightingsText = fs.readFileSync("sightings.json", "utf8");
var sightingsDB = JSON.parse(sightingsText);

server.on('request', function(request, response){
  var urlObj = url.parse(request.url);

  if(urlObj.query){
    response.write('<html>');
    response.write('<head>');
    response.write('UFO SIGHTINGS RESULTS:')
    response.write('</head>');
    response.write('<body>');
    response.write('<ul>');
  }

  console.log(request.headers);

  if(urlObj.query){
    var queryPortion = urlObj.query.split("=");

    if(queryPortion[0] === "state"){

      sightingsDB.forEach(function(sightings){
        if(sightings.state === queryPortion[1].toUpperCase()) {
          response.write('<li>' + JSON.stringify(sightings) + '</li>');
        }
      });

      response.write('</ul>' + '</body>' + '</html>');
      response.end();
    } else if (queryPortion[0] === "city"){

      sightingsDB.forEach(function(sightings){
        if(sightings.city === queryPortion[1].replace(/\+/g," ")){
          response.write('<li>' + JSON.stringify(sightings) + '</li>');
        }
      });

      response.write('</ul>' + '</body>' + '</html>');
      response.end();
    } else if (queryPortion[0] === "shape"){

      sightingsDB.forEach(function(sightings){
        if(sightings.shape.toLowerCase() === queryPortion[1].toLowerCase()) {
          response.write('<li>' + JSON.stringify(sightings) + '</li>');
        }
      });

      response.write('</ul>' + '</body>' + '</html>');
      response.end();
    }

    else if (queryPortion[0] === "date"){
      var splitQueryPortion = queryPortion[1].split("+")

      sightingsDB.forEach(function(sightings){
        var partialDate = sightings.date.split(" ")

        if(partialDate[0] === splitQueryPortion[0]) {
          response.write('<li>' + JSON.stringify(sightings) + '</li>');
        }
      });

      response.write('</ul>' + '</body>' + '</html>');

      response.end();
    } else {
      // Guard against requests we cannot handle.
      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write("Bad Request");
      response.end();
    };
  }
})

