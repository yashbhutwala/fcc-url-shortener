const express = require('express');
const mongoose = require('mongoose');
const urlShortener = require('./controllers/url-shortener');

require('./config/database')();

const app = express();

app.use(express.static('public'));

app.get('/:urlHash', (req, res) => {
  
    const hash = req.params.urlHash;
    urlShortener.decode(hash, (err, urlDecoded) => {
    
        if (err)
            return res.json({ error: err.message });
    
        res.redirect(urlDecoded);
    
    });
  
});

app.get('/new/*', (req, res) => {
    
    const originalUrl = req.params[0];

    urlShortener.short(originalUrl, (err, urlHash) => {

        if (err)
            return res.json({ error: err.message });

        const urlShort = `https://${process.env.PROJECT_NAME}.gomix.me/${urlHash}`;
        res.json({ original_url: originalUrl, short_url: urlShort });

    });

});

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: '404 - Not Found' });
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Running at port ${listener.address().port}`);
});
