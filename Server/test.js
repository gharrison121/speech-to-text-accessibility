var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var outputText = "Lecture text below" + "\r\n"
app.use(express.static(__dirname + '/../Client'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../Client/index.html'));
});

var jsonParser = bodyParser.json()

app.get('/getOutput', function(req, res) {
  // var output = outputCompiler()
  res.send(outputText)

})


app.post('/speech', jsonParser, function(req, res) {
  if(req.body.RecognitionStatus != "Success") {
    //create file with the stuff
  }

  if(req.body.DisplayText) {
    console.log("POST COMPLETE: " + req.body.DisplayText)
    outputText += req.body.DisplayText + " "
  }
  res.sendStatus(200)
});

// function outputCompiler(output) {
//   console.log("PARSE COMPLETE: " + output)
//   return output;
// }


app.listen(8080, printListen);

function printListen() {
  console.log("Listening at port 8080");
}
