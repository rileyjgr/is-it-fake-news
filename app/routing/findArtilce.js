const path = require('path');

const runApp = (app) => {
    app.get('/api/search', function(req, res){
       res.json(search);
    });

};

module.exports = runApp;