'use strict';
// web/index.js
var Router  =   require('koa-router');

var web = new Router();

web.get('/', function * (next) {
   yield this.render('pc/index', {'title': 'Reactjs Koa Bootstrap'}, true);
});

module.exports = web;
