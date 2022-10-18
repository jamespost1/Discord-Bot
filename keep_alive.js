// from https://docs.replit.com/tutorials/build-basic-discord-bot-nodejs

var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);