var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var outputText = ""; // 'buffer' for speech-to-text data
var speechArray = []; //array of all speech to send when client loads page first-time

app.use(express.static(__dirname + '/../Client'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../Client/index.html'));
});

/*
Handles get requests made to the server from the output client.
Responds to the get request with the global variable outputText and then sets
the value of outputText to "" (empty string) to improve performance.
*/
app.get('/getOutput', function(req, res) {
  res.send(outputText);
  outputText = "";
});

app.get('/getFullOutput', function(req, res) {
  res.send(speechArray)
  outputText ="" // avoid duplication on first load
});

/*
Handles post requests made to the server from the speaking client.
The request is parsed using jsonParser so that the req.body can be accessed
The 'DisplayText' property of the body is appended to the global outputText
*/
app.post('/speech', jsonParser, function(req, res) {
  if(req.body.DisplayText) {
    console.log("SPEECH: " + req.body.DisplayText);
    outputText += req.body.DisplayText + " ";
    speechArray.push(req.body.DisplayText);

  }
  res.sendStatus(200);
});


app.listen(8080, printListen);

function printListen() {
  console.log("Listening at port 8080");
}
