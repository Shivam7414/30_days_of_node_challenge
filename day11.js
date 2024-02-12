const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

function authenticationMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Access Denied: Invalid Token!');
    }
}

app.use(authenticationMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});