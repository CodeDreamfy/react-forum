'use strict';
// web/index.js
var Router  =   require('koa-router');

var web = new Router();

web.get('/', function * () {
  this.body = 'welcome';
});

module.exports = web;
