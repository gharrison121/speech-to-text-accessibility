var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var outputText
app.use(express.static(__dirname + '/../Client'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../Client/index.html'));
});

var jsonParser = bodyParser.json()

app.get('/getOutput', function(req, res) {
  res.send(outputText)
  outputText = ""

})


app.post('/speech', jsonParser, function(req, res) {
  if(req.body.DisplayText) {
    console.log("SPEECH: " + req.body.DisplayText)
    outputText += req.body.DisplayText + " "
  }
  res.sendStatus(200)
});


app.listen(8080, printListen);

function printListen() {
  console.log("Listening at port 8080");
}
