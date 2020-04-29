'use strict';

var os = require('os');

function get(req, res) {
   
    res.send('Hello David Openshift from - >'+os.hostname());
           
}



module.exports = {
    get: get
   
}
