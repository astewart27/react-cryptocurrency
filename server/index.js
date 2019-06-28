const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/coinmarketcap/cryptocurrency', (req, res) => {

  const options = {
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=1&limit=10&convert=USD',
    method: 'GET',
    headers: {
        'X-CMC_PRO_API_KEY': 'e080feea-0342-4ad3-ad48-7a6f1b606326'
    }
  };

  request(options, function(err, response, body) {
    if (!err && response.statusCode == 200) {
        let cryptoData = JSON.parse(body);
        console.log(cryptoData.data);
        res.json({cryptoData});
    }
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);