const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://brunogomeslira:5832@dbd-academia-j0d7n.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use((req, ser, next) => {
    req.io = io;
    next();
})

app.use(cors());

app.use('/files/template', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333)
