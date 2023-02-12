const express = require('express');
require('./database/connection')
const server = express();

const middleware = (req, res, next) => {
    console.log("this is middleware");
    next();
}

server.get('/', (req, res) => {
    console.log("This port is running on port number 3000");
    res.send('This is home page');
});

server.get('/aboutus', (req, res) => {
    console.log("This port is running on port number 3000");
    res.send('This is about us page');
});

server.get('/contact', (req, res) => {
    console.log("This port is running on port number 3000");
    res.send('This is contact us page');
});

server.get('/sign-in', middleware, (req, res) => {
    console.log("This port is running on port number 3000");
    res.send('This is sign in page');
});
server.listen(3000);