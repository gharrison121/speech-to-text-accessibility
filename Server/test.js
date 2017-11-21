var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../Client'));




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../Client/index.html'));
});

var jsonParser = bodyParser.json()

app.post('/speech', jsonParser, function(req, res){
  console.log(req.body)
  res.sendStatus(200)
});

app.listen(8080, printListen);

function printListen() {
  console.log("Listening at port 8080");
}
