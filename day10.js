// Import the Express.js framework and the path module
const express = require('express');
const path = require('path');

// Create an instance of the Express application
const app = express();

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handler to ensure accessing the root ("/") returns the "index.html" file from the "public" directory
app.get('/', function(req, res) {
    // Send the "index.html" file as the response
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Express application and listen on port 3000
app.listen(3000, () => {
    // Log a message when the server starts listening
    console.log('Server is running on port 3000');
});