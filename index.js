var express = require('express')
var app = express()
var formidable = require('formidable'); 

var http = require('http');

var home = require('./controllers/home'); 
app.get('/',home);
var upload = require('./controllers/upload'); 
app.post('/upload',upload);
app.listen(3000, ()=>console.log('Api Server listening to 3000'));

var app2 = express();
app2.use(express.static('public_html'));
app2.listen(80, ()=>console.log('Html Server listening to 80'));