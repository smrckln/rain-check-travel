var express = require('express');
var app = express();

var body_parser = require('body-parser');


app.use(body_parser.json());

var port = process.env.PORT || 8080;

var router = require('./routes/routes.js');

app.use('/api', router);

app.listen(port);
console.log("Server listening on port ", port);
