var mocha = require('mocha');
var request = require('supertest');
var app = require('../server');

describe('GET /', function(){
  it('returns a 200 status', function(done){
    request(app).
    get('/').
    expect(200, done);
  });
  it('returns an html format', function(done){
    request(app).
    get('/').
    expect('Content-Type', /html/, done);
  });
  it('returns a page with the word "X-Finder" somewhere on the page', function(done){
    request(app).
    get('/').
    expect(/X-Finder/, done);
  });
});

describe('GET /search', function(){
  it('returns a 200 status', function(done){
    request(app).
    get('/search').
    expect(200, done);
  });
  it('returns an html format', function(done){
    request(app).
    get('/search').
    expect('Content-Type', /html/, done);
  });
  it('it returns sightings from a particular city', function(done){
    request(app).
    get('/search?city=Lancaster').
    expect(/Lancaster/, done);
  });
});
