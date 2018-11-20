// server.js
// load the things we need
var express = require('express');
var app = express();
var json = JSON.parse(require('fs').readFileSync('userdata.json', 'utf8'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');

});
// message page
app.get('/newmessage', function(req, res) {
    res.render('pages/newmessage');
});

// guestbook page
app.get('/guestbook', function(req, res) {
    res.render('pages/guestbook');


    var tag = json;


    res.render('pages/guestbook', {tag:tag});

});

app.listen(8080);
console.log('8080 is the magic port');
