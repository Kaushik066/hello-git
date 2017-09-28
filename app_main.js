var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/ui/newStyle.css',function(req,res){
  res.sendFile(path.join(__dirname,'ui','newStyle.css'));
});

console.log('hello world');
console.log('new changes made');

var port = 8123;
app.listen(port, function () {
  console.log(`hello-git app listening on port ${port}!`);
});
