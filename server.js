
// Storing the npm packages in variables
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var PORT = 3000;

var app = express();

// Lets server know that its text input
app.use(bodyParser.urlencoded({extended: false}));
//app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Use static files
app.use(express.static('app'));

// requiring the route files (should i put this in a var???)
require('./app/routing/html-routes.js')(html);
require('./app/routing/api-routes.js')(api);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
