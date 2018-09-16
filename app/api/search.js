const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const https      = require('https');
    app = express();



let information = require('./search/data.js');

// have to make a request, based on the users search
// the json result will then be displayed on the page
// after that, make it so when the user search it posts the data,
// to the my api.
//Then we have an ai or some sort of cross check to other sources, to determine,
// whether the news is "fake" or not
//giving an article a score based on the presence, total number, or frequency of certain words appearing
//to categorize an article you might need a number of different scores like that, with different tests of what you're looking for

require('dotenv').config();

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

        const getSearch = req.body;
        let source = '';
        let author = '';
        let title  = '';
        let article = '';

        getSearch(function(){
            const newsApi   = 'https://newsapi.org/v2/everything?q=';
            const dateRange = 'from=today&';
            const query     = getSearch.input +'&';
            const key       = 'apiKey=' + process.env.MY_API_KEY;

            const url = newsApi + query + dateRange + key;

            //make call to api
            //send the data to information array.
            // take data in information array, and send this data to the users browsers,
            // after we have analyzed it. (not sure how we are going to do this yet... we could make an ai, or find a library for fake news or something?)

            // start https request
            https.get(url, (resp)=> {
                let data = '';
                resp
                    .on('data', (chunk) =>{
                        data += chunk;
                    });
                resp
                    // push the data to information array
                    .on('end', () => {
                        information.push(data);
                        source = data.id;
                        author = data.author;
                        title  = data.title;
                        article = data.content;

                    });

            })
                    // throw the error
                    .on("error", (err) => {
                        console.log("Error: " + err.message);
                    });
            // end of https request

        });

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

