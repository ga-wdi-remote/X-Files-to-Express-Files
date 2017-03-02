var parseQuery;
var searchSightings;

(function() {
  'use strict';

  parseQuery = function(queryString){
    var unEscapedQueryString = queryString || '';
    unEscapedQueryString = unEscapedQueryString.replace(/\+/g, ' ');
    var queries = unEscapedQueryString.split('&');
    var queryObj = {};
    var query;
    queries.forEach(function(el){
      query = el.split('=');
      queryObj[query[0]] = query[1];
  });
    return queryObj;
  };

  searchSightings = function(data, query){
    return data.filter(function(sighting){
      var allTrue = true;
      for(var key in query){
        allTrue = allTrue && sighting[key] === query[key];
      }
      return allTrue;
    });
  };
}());

module.exports = {
  parseQuery: parseQuery,
  searchSightings: searchSightings
};
