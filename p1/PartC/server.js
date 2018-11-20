// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var json = JSON.parse(require('fs').readFileSync('userdata.json', 'utf8'));


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}
));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');

});
// message page
app.get('/newmessage', function(req, res) {
    res.render('pages/newmessage');
});

app.post('/adduser', function(req, res) {
//res.render('pages/adduser');
console.log(json);
console.log(req.body.name + req.body.email + req.body.country + req.body.message);
var name = req.body.name;
var form = [];
var date = new Date();

json.push({
  "username": req.body.name,
  "id": req.body.id,
  "date": date,
  "country": req.body.country,
  "message":req.body.message
});

var parsinta = JSON.stringify(json, null, 4);

fs.writeFileSync('userdata.json', parsinta);

form.push({
  "name": req.body.name,
  "id": req.body.id,
  "date": date,
  "country": req.body.country,
  "message":req.body.message
});

res.render('pages/adduser', {name:name, form:form});
request.end();
});

// guestbook page
app.get('/guestbook', function(req, res) {
    res.render('pages/guestbook');

var tag = json;


    res.render('pages/guestbook', {tag:tag});

});




app.listen(8080);
console.log('8080 is the magic port');
