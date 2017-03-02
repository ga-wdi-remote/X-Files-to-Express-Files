function searchSightings(query, db){
  var results = db.filter(function(sighting){
    var allTrue = true;
    var doesCurrentKeyMatch;
    var queryDate;
    var sightingDate;
    for(var key in query){
      if(!query[key]){
        doesCurrentKeyMatch = true; // if no value, include
      } else {
        if(key === 'after'){
          queryDate = parseParamDate(query[key]);
          sightingDate = parseDbDate(sighting.date);
          doesCurrentKeyMatch = queryDate.getTime() <= sightingDate.getTime();
        } else if(key === 'before'){
          queryDate = parseParamDate(query[key]);
          sightingDate = parseDbDate(sighting.date);
          doesCurrentKeyMatch = queryDate.getTime() >= sightingDate.getTime();
        } else {
          doesCurrentKeyMatch = sighting[key] === query[key];
        }
      }
      allTrue = allTrue && doesCurrentKeyMatch;
    }
    return allTrue;
  });

  return results;
}

// Parses the date as dd/mm/yy and returns it as yyyy-mm-dd
function parseDbDate(date){
  var dateNumbersArray = date.split(/[:\/\s]/).map(function(el){
    return Number.parseInt(el);
  });
  var year = dateNumbersArray[2] + 2000;
  var month = dateNumbersArray[0]-1;
  var day = dateNumbersArray[1];
  var dateObj = new Date(year, month, day);
  return dateObj;
}

function parseParamDate(date){
  var dateNumbersArray = date.split(/-/).map(function(el){
    return Number.parseInt(el);
  });
  var year = dateNumbersArray[0];
  var month = dateNumbersArray[1]-1;
  var day = dateNumbersArray[2];
  var dateObj = new Date(year, month, day);
  return dateObj;
}

module.exports = searchSightings;
