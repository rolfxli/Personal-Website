var express = require('express');
var app = express();

var path = __dirname + '/dist';
var port = 4200;

app.use(express.static(path));
app.get('*', function(req, res) {
  res.sendFile(path + 'index.html')
});
app.listen(port);
