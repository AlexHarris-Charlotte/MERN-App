const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web-scrape');
const scrapeData = require('../public/server/scrape');
const webScrapeDB = require('../models');

// Home route
router.get('/', function (req, res) {
    console.log(req.user);
    res.redirect('/scrape');
});

// Scrapes articles from the New York Times

router.get('/scrape', (req, res) => {   
    scrapeData.getArticles()
        .then(results => {
          console.log(results);
            if (req.user) {
                results.user = req.user.userName;      
            } else {
            }
        }).catch(errMessage => {
            console.log(errMessage);
        });
        res.send('send');
});

module.exports = router;