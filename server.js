var express = require('express')
  , bodyParser = require('body-parser')
  , server = module.exports = express()
  , router = require('./routes/index.js')
  , development = ''
  , port = ''
  , hostname = '';

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( {extended: false} ) );
server.use( router );
server.use(function (request, response) {
    response.status(200).send("Alive and well.")
});

port = process.env.OPENSHIFT_NODEJS_PORT;
server.set('port',port);
hostname = process.env.OPENSHIFT_NODEJS_IP;

server.on('error', function (error) {
  console.log(error);
  //we'll handle error here after adding cluster option.
});

server.listen(port, hostname, function () {
  console.log('Up and running on port ' + port + " for " + hostname);
  console.log(process.env);
});
