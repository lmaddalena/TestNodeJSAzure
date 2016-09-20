#!/usr/bin/env node

var app = require('./app');
app.set('port', process.env.PORT || 1337);



var http = require('http');

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server starte in ' + app.get('env')
    + ' mode listening on port ' + server.address().port);
});


