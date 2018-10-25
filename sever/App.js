let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', "Content-Type,Accept");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,OPTIONS,DELETE");
    if (req.method == 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        next();
    }
});

app.use(bodyParser.json());

let sliders = require('./mock/sliders');

app.get('/getSliders', function (req, res) {
    res.json(sliders);
});

app.listen(3002);