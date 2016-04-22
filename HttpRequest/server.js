var port = 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api', function (err) {

  if (err) {
    console.log('failed to connect');
  }
  else {
    console.log('connected successfuly');
  }
});

var ruleSchema = mongoose.Schema({
  ruleName: String,
});

var Rules = mongoose.model('Rule', ruleSchema);

var newRule = new Rules ({ruleName: "Be cool"});
    newRule.save(function (err) {
      if (err) throw err;
    });

app.get('/', function(req, res) {
  req.send();
});


http.listen(port, function () {
  console.log('Server is starting at port ' + port);
});
