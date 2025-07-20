"use strict";
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('message', (msg) => {
        console.log(msg.toString());
        if (msg.toString() == 'ping') {
            console.log('Received ping, sending pong');
            socket.send('pong');
        }
    });
});
