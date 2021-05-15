// Real-time chat application
const express = require('express');
const socketio = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Handle index page
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Initialize socket for the server
const io = socketio(server);

io.on('connection', socket => {
    console.log("New user connected")
});