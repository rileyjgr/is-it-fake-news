const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const a          = require('axios');
    app = express();

let information = require('./search/data.js');
let requestNumber = -1;
// have to make a request, based on the users search
// the json result will then be displayed on the page
// after that, make it so when the user search it posts the data,
// to the my api.
//Then we have an ai or some sort of cross check to other sources, to determine,
// whether the news is "fake" or not
//giving an article a score based on the presence, total number, or frequency of certain words appearing
//to categorize an article you might need a number of different scores like that, with different tests of what you're looking for

require('dotenv').config({path: __dirname + '/.env'});

const search = (app) => {
    // Middle wares
    app.use(morgan('dev'));
    app.use(bodyParser.json());


    app.get('/api/search', function(req, res){
        res.json(information);
    });

    const urlencodedParser = bodyParser.urlencoded({extended: false});
    const parseJson = bodyParser.json();

    app.post('/api/search', urlencodedParser, parseJson, function(req,res){

        userSearch = req.body[0].search;
        requestNumber++;
        console.log(userSearch);
        let source = '';
        let author = '';
        let title  = '';
        let article = '';

        const newsApi   = 'https://newsapi.org/v2/everything?q=';
        const dateRange = 'from=today&';
        const query     = userSearch +'&';
        const key       = 'apiKey=' + process.env.MY_API_KEY;

        const url = newsApi + query + dateRange + key;



        // make call to api, based on users input
        // send the data to information array.
        // analyze the data from news api. (not sure how we are going to do this yet... we could make an ai, or find a library for fake news or something?)
        // take data in information array, and send this data to the users browsers, after we have analyzed it.

        // start https request
        a.get(url)
        .then(function(response){
          // push data to individual users array
            console.log(requestNumber);
          information.push({[requestNumber]: response.data});
          response.data.forEach(articles, function() {
              // push to their own array here (maybe?)
            });
        }).catch(function(error){
          if (error){
            console.log(error);
          }
        });
        // end of https request

        // const analyze = () => {
        //
        // };


        res.json({
               source: source,
               author: author,
               title: title,
               article: article
        });
    });
};

module.exports = search;