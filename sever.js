var fs = require('fs');
var http = require('http');
var url = require('url');

  http.createServer(function (req, res) {
  fs.readFile('may_tinh.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 
    'text/html'
  });
    res.write(data);
    return res.end();
  });
}).listen(8080);

http.createServer(function (req, res) {
fs.readFile('may_tinh.css', function(err, data) {
  res.writeHead(200, {'Content-Type': 
  'text/css'
  });
    res.write(data);
    return res.end();
  });

}).listen(8040);

http.createServer(function (req, res) {
fs.readFile('may_tinh.js', function(err, data) {
  res.writeHead(200, {'Content-Type': 
  'text/js'
  });
    res.write(data);
    return res.end();
  });

}).listen(8050);
