const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/site-auth');

app.use(morgan('dev'));

// express file for requests
const getRoute = require('./app/routing/findArtilce.js');
    getRoute(app);

// routing for html
const htmlRoute = require('./app/routing/htmlRoute.js');
    htmlRoute(app);

// routing for auth
const authRoute = require('./app/auth/app.js');
    authRoute(app);

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Sever listening at: '+ port);