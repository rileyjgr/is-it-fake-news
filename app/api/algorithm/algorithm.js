const express = require('express');
const morgan  = require('morgan');
const jaccard = require('jaccard');
app = express();

let userRequest = require('./search/data.js');


const jaccard = () => {
    app.use(morgan('dev'));

    const credibiltyScore = [
        {
            'cnn': 8,
            'fox': 6,
            'msnbc': 8,
            'theonion': 2,
            'wired': 4
        }
    ];

    const getArrays = () =>{
        // in here we are going to make an algorithm
        // that recongizes each json object and assigns, each object to its own array
        // then we are going to use the jaccard package to compare them and return our score
    };

    // app.get('/api/search', function(req,res){
    //     res.json(userRequest);
    // });


};

module.exports = jaccard;