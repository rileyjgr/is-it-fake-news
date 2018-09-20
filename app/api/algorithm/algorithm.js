const express = require('express');
const morgan  = require('morgan');
const jaccard = require('jaccard');
app = express();
let amount = require('./search/api.js');
let userRequest = require('./search/data.js');


const jaccard = () => {
    app.use(morgan('dev'));


    app.get('/api/search', function(req, res) {
        res.json(amount);
    });

    const urlencodedParser = bodyParser.urlencoded({extended: false});
    const parseJson = bodyParser.json();

    // [a] . [1, 2, , 4, 5, ...]
    // __________________________
    // [a]2 + [1, 2, , 4, 5, ...]2 - [a] . [1, 2, , 4, 5, ...]

    // what if we made a post request here back to the json object the other api has?
    // or if we send that to a different array. with our data?

    app.post('/api/search', urlencodedParser, parseJson, function(req, res){
        let userResponse = res.body; // users json object

        const getArrays = () =>{
            let array = [{article: userResponse.source,
                          author:  userResponse.author,
                          title:   userResponse.title,
                          url:     userResponse.url,
                          content: userResponse.content}];

            // array.from(userResponse.props.json).map(newArray =>  array);



            // in here we are going to make an algorithm
            // that recongizes each json object and assigns, each object to its own array
            // then we are going to use the jaccard package to compare them and return our score




        };

    });


    // app.get('/api/search', function(req,res){
    //     res.json(userRequest);
    // });


};

module.exports = jaccard;