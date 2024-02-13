const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function setupWebSocket(server) {
    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            ws.send(message); // echo back the message
        });
    });
}

app.get('/websocket', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/websocket.html')); // serve an HTML page with JavaScript to establish a WebSocket connection
});

setupWebSocket(server);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});