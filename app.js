require("dotenv").config();

// const app = require('express')();
const express = require('express');
const app = express();
app.use(express.static('views'));
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(3000, function(){
    console.log('Server is running');
});