'use strict';
var fs = require('fs');

// appName
var appName = 'reactForum';

// config
var config = {
  appName : appName,
  server: {
    port: 3000
  },
  staticPath: 'static',
  mongoUrl: 'mongodb://localhost/' + appName,
  redis: {
    host: 'localhost',
    port: 6379
  }
}

module.exports = config;