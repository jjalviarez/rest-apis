
//conexion con la BD
const mongoose = require('mongoose');
require("./config/db");



const express = require('express');
const path = require('path');
const route = require('./routes');
require('dotenv').config({path: 'variables.env'});
const bodyParser = require('body-parser');


//Dependencia para que la API responda desde otros origenes
const cors = require('cors');


//crear un app en express
const app = express();





//Se habilita el bodyParser para los req de datos
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


//Carpeta de archivos estaticos
// static files
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('uploads'));

//Definit Dominio Para recibir las peticiones 
const whiteLins = process.env.URL_FRONTEND.split(',');
const corsOprions = {
  origin: (origin, callback) => {
    //Verificoa que sea de un servidor de la lista blanca 
    const existe = whiteLins.some(dominio => dominio === origin);
    if(existe)  {
      callback(null, true);
    }
    else { 
      callback(new Error(`Dominio: ${origin} No Permitido`));
    }
  }
}
//Habilitar CORS
app.use(cors(corsOprions));




app.use('/',route());



const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8080';
app.listen(port, host, function () {
  console.log('Server running at http://' + host + ':' + port + '/'); 
});