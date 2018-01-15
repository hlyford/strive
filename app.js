var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// -----  Routes
app.use(express.static('client'));

// Root landing page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Get one user's data
app.get('/applicants/:lastName', function(req, res) {
  var lastName = req.params.lastName;  
  if (req.params.length === 0) {
    res.send('Please enter with format: applicants/LAST_NAME');
  } else {
    // See if we have that user    
    // Get the user's JSON    
    fs.readFile('./users_data/' + lastName + '.json', "utf8", function(err, data) {      
      if (err) {
        res.send('We don\'t have a user with that last name.')
      } else {
        res.send(JSON.parse(data));
      }      
    });    
  }
  
});

// Receives finished application data
app.post('/responses', function(req, res) {
  var userObject = req.body.userObject;
  var lastName = userObject.userInfo.last;  
  // Store the user data somewhere using last name as identifer
  fs.writeFile('./users_data/' + lastName + '.json', JSON.stringify(userObject), function() {
    // Response
    res.send('cool');
  });  
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));