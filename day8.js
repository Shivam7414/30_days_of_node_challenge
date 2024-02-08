// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware function to handle positive integer validation
function positiveIntegerHandler(req, res, next) {
    // Extract the 'number' query parameter and parse it as an integer
    const number = parseInt(req.query.number, 10);

    // Check if the parsed number is a positive integer
    if (Number.isInteger(number) && number > 0) {
        // If it's a positive integer, send a success response
        res.send('Success: number is a positive integer.');
    } else {
        // If it's not a positive integer, create an error object
        const error = new Error('Number is not a positive integer.');
        error.status = 400; // Set the error status to 400 (Bad Request)
        next(error); // Pass the error to the error-handling middleware
    }
}

// Route for handling positive integer validation
app.get('/positive', positiveIntegerHandler);

// Error-handling middleware
app.use(function (err, req, res, next) {
    // Check if the error has a status code of 400 (Bad Request)
    if (err.status === 400) {
        // If it's a 400 error, send a 400 response with the error message
        res.status(400).send(err.message);
    } else {
        // If it's not a 400 error, pass the error to the next middleware
        next(err);
    }
});

// Start the Express application and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});