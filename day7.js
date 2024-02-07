// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware function for logging incoming requests
function requestLoggerMiddleware(req, res, next) {
    // Get the current timestamp
    const timestamp = new Date();
    
    // Log information about the incoming request
    console.log(`${timestamp} - ${req.method} request received`);

    // Call the next middleware or route handler in the chain
    next();
}

// Use the requestLoggerMiddleware for all incoming requests
app.use(requestLoggerMiddleware);

// Define a route for the root path ('/') with a GET request
app.get('/', (req, res) => {
    // Send a response of 'Hello, World!' for requests to the root path
    res.send('Hello, World!');
});

// Start the Express application and listen on port 3000
app.listen(3000, () => {
    // Log a message when the server starts listening
    console.log('Server is running on port 3000');
});
