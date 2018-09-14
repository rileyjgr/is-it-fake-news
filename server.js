const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// express file for requests
const getRoute = require('./app/routing/findArtilce.js');
    getRoute(app);

// routing for html
const htmlRoute = require('./app/routing/htmlRoute.js');
    htmlRoute(app);


const port = process.env.PORT || 3000;

app.listen(port);
console.log('Sever listening at: '+ port);