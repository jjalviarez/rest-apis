
//conexion con la BD
const mongoose = require('mongoose');
require("./config/db");



const express = require('express');
const path = require('path');
const route = require('./routes');
require('dotenv').config({path: 'variables.env'});
const bodyParser = require('body-parser');






//crear un app en express
const app = express();





//Se habilita el bodyParser para los req de datos
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());







app.use('/',route());



const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8080';
app.listen(port, host, function () {
  console.log('Server running at http://' + host + ':' + port + '/'); 
});