// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the HTTP GET method at the path '/greet'
app.get('/greet', function(req, res) {
    // Extract the 'name' query parameter from the request
    const name = req.query.name;

    // Check if the 'name' parameter is provided
    if (name) {
        // If 'name' is provided, send a personalized greeting
        res.send(`Hello, ${name}!`);
    } else {
        // If 'name' is not provided, send a default greeting for Guest
        res.send('Hello, Guest!');
    }
});

// Start the Express application and listen on port 3000
app.listen(3000, function() {
    // Log a message when the server starts listening
    console.log('App is listening on port 3000');
});
