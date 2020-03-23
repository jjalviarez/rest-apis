
//conexion con la BD
const mongoose = require('mongoose');
require("./config/db");



const express = require('express');
const path = require('path');
const route = require('./routes');
require('dotenv').config({path: 'variables.env'});






//crear un app en express
const app = express();











app.use('/',route());



const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8080';
app.listen(port, host, function () {
  console.log('Server running at http://' + host + ':' + port + '/'); 
});