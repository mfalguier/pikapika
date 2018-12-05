const app = require('express')();
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
require('dotenv').config({path:'../../.env'});
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');

const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('./routes/searchTweets')(app, io);


server.listen(port, ()=>{
  console.log('server runing');
});