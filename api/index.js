'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

function isAuth(req, res, next) {  
        next();
    
}


module.exports = function (app) {
    router.get('/hello', isAuth ,  controller.get);
    app.use('/api', router);
}