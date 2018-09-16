const express = require('express');
    app = express();

const axios = require('axios');
const morgan     = require('morgan');
const bodyParser = require('body-parser');

let parseSearch = require('./search/data.js');

// have to make a request, based on the users search
// the json result will then be displayed on the page
// after that, make it so when the user search it posts the data,
// to the my api.
//Then we have an ai or some sort of cross check to other sources, to determine,
// whether the news is "fake" or not

// const news = 'https://newsapi.org/v2/everything?';
// let term = 'q=' + userInput;
// let dateRange = '';
// let url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     'from=2018-09-15&' +
//     'sortBy=popularity&' +
//     'apiKey='+ key;

// let request = new Request(url);
// fetch(request)
//     .then(function(response) {
//         console.log(response.json());
//     });

require('dotenv').config();

const search = (app) => {
    // Middle wares
    app.use(morgan('dev'));
    app.use(bodyParser.json());


    app.get('/api/search', function(req, res){
        res.json(parseSearch);
    });

    const urlencodedParser = bodyParser.urlencoded({extended: false});
    const parseJson = bodyParser.json();

    app.post('/api/search', urlencodedParser, parseJson, function(req,res){
        const getSearch = req.body;

        getSearch(function(data){
            const dateRange = '\'from=' + data.range;
            const query     = data.search +'&';
            const key       = 'apiKey=' + process.env.MY_API_KEY;

            const url = 'https://newsapi.org/v2/everything?\q=' + query + dateRange + key;

            

        });



        res.json({

        });
    });


};

module.exports = search;

