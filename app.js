// app.js
var koa = require('koa');
var routes = require('./routes');
var app = koa(),
    server;

// load routes
app.use(routes.middleware());

// start server
server = app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});