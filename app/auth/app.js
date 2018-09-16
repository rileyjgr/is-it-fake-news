//node modules
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const jwt        = require('jsonwebtoken');

Schema = mongoose.Schema;

// MongoDb
const userAuth = (app) => {
    mongoose.connect('mongodb://localhost/site-auth').then(function (error) {
        if (error) {
            console.log(error)
        }
        // Middle wares
        app.use(morgan('dev'));
        app.use(bodyParser.json());

        // Routes

        app.use('/users', require('./routes/users'));

        // // Start the server

        const port = process.env.PORT || 27017;
        app.listen(port);
        console.log('Server listening at: ' + port);
    });
};

module.exports = userAuth;
