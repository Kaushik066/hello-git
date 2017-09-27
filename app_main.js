var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

console.log('hello world');
console.log('new changes made');

var port = 8123;
app.listen(port, function () {
  console.log(`hello-git app listening on port ${port}!`);
});
