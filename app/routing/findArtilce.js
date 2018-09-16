const path = require('path');


const runApp = (app) => {
    const getSearch = require('../api/search.js');
        getSearch(app);
};

module.exports = runApp;