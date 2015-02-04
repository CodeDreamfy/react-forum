'use strict';
// controllers
var koaMount    =   require('koa-mount');

var web = require('./web');
var api = require('./api');
//var apiExtend   =   require('./concern/apiExtend');

module.exports = function(app) {
  // mount web
  app.use(koaMount('/',     web.middleware()));
  // mount api
  // app.use(apiExtend());
  app.use(koaMount('/api',  api.middleware()));
  app.use(koaMount('/api',  function * () {
    this.error(999, 'api not found');
  }));
  
  // not found
  // app.use(function *notFound(next) {
  //   if (this.status == 404) {
  //     this.body = 'requested but no route matches.';
  //   } else {
  //     yield next;
  //   }
  // });
};