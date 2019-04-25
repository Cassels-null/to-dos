var express = require('express');
var app = express();

app.use(express.static(__dirname+'/../dist'));

app.get('/', function (req, res) {
    res.send("pong");
});

// Listen to port 3002
app.listen(3002, function () {
    console.log('to-do app listening on port 3002!');
});
