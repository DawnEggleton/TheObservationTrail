// let express is the same as var express but will pay attention to locality, unlike var
//but for this, we're using const as it's unchanging

//creating a node server

//required constants
const express   = require('express');
const app       = express();
const http      = require("http");
const server    = http.createServer(app);

//default port is 80
//default port for https is 443
const LISTEN_PORT = 8080;

//use middleware
//these functions are acted upon the page before it is 'served'
//this is telling the server to assume the public folder is where all the html/js is found
app.use(express.static(__dirname + '/public/'));

//create a 'route' for accessing this page
//when you serve up the route, it will do the function
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

//now start server
server.listen(LISTEN_PORT);
console.log('Listening to port' + LISTEN_PORT);