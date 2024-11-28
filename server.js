const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

// Import routes from the index.js route directory
const indexRouter = require('./routes/index');

// Create the Express application
const app = express();

// Enable parsing of request form data
app.use(bodyparser.urlencoded({ extended: false }));

// Serve static CSS files
const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Make routes available to the app using the router
app.use('/', indexRouter);

// Start the server
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port);
});
