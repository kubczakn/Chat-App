// Server for chat application
const express = require('express');
const socketio = require('socket.io');
const app = express();
const port = 8080;

// Start server
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Initialize socket for the server
const io = socketio(server);

io.on('connection', socket => {
    console.log("New user connected")
});