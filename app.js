"use strict";
// app.js
const 
    app = require('koa')(),
    routes = require('./routes');

// load routes
app.use(routes.middleware());

// start server
app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});