const path = require('path');
const express = require('express');

const html = (app) => {

    // Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/login', function(req, res){
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
    app.get('/signup', function(req, res){
        res.sendFile(path.join(__dirname, '../public/signup.html'));
    });
    //data page
    app.get('/dashboard', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/data.html'));
    });
    //search page
    app.get('/search', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/search.html'));
    });

    // assets
    app.use('/static/js', express.static(path.join(__dirname, '../js')));
    app.use('/static/css', express.static(path.join(__dirname,'../css')));
};

module.exports = html;


