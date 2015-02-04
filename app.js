'use strict';
// app.js
var koa         = require('koa');                   // koa
var koaStatic   = require('koa-static');            // static server
var koaLogger   = require('koa-logger');            // loger
var koaSession  = require('koa-generic-session');   // section
var koaRedis    = require('koa-redis');             // redis
var koaFavicon  = require('koa-favicon');           // favicon
var koaGzip     = require('koa-gzip');              // gzip

var config = require('./config');

var app = koa();

app.appName     = config.appName;
app.port        = config.server.port;
app.staticPath  = __dirname + config.staticPath;

// Configurations
app.use(koaFavicon(app.staticPath + '/dist/favicon.ico'));
app.use(koaLogger());
app.use(koaGzip());
app.use(koaStatic(app.staticPath + '/dist'));
app.use(koaSession({ 
  store: koaRedis({ 
           host: config.redis.host,
           port: config.redis.port
         }) 
}));

// Load 
require('./controllers')(app); // Load controllers
require('./services')(app); // Load services

// Start server
app.listen(app.port, function() {
    console.log('Koa is listening to http://localhost:3000');
});