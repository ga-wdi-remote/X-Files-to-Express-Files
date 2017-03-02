var helper = require('./helper');
var fs = require('fs');
var sightingsDb = JSON.parse(fs.readFileSync('./sightings.json', 'utf-8'));

var sightings = helper.searchSightings(sightingsDb, helper.parseQuery(process.argv[2]));
if(sightings.length > 0){
  console.log('==================================');
  sightings.forEach(function(sighting){
    console.log('Date: ' + sighting.date);
    console.log('City: ' + sighting.city);
    console.log('State: ' + sighting.state);
    console.log('Shape: ' + sighting.shape);
    console.log('Duration: ' + sighting.duration);
    console.log('==================================');
  });
}
