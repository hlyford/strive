var express = require('express');
var app = express();
var path = require('path');


// Routes
// Root landing page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));