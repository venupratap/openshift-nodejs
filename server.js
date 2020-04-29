'use strict';

var http = require('http');
var express = require('express');
var log4js = require('log4js');
var config = require('./config');
var bodyParser = require('body-parser');
var cors = require('cors')
var fs = require('fs');
var path = require('path');

var logger = log4js.getDefaultLogger();
var app = express();

//parse json bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//log all requests to console for debugging
app.use('*', function (req, res, next) {
    logger.info('request: ' + req.originalUrl);
    next();
});

app.use(express.static('assets'));
app.use(express.static('build'));

//include all api's
require('./api')(app);

//app.use('/*', function(req, res){
 //   res.send(fs.readFileSync('./build/index.html', 'utf8'));
//});

//listen on port in config || convo_port env 
http.createServer(app).listen(config.port, () => {

    logger.info('App Listening on port: ' + config.port);



});
