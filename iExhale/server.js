var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/client')); 

console.log('here?');
app.listen(8000);