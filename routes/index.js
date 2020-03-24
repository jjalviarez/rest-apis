const express = require('express');
const route = express.Router();


//Importar Controladores
const clienteControler = require("../controllers/clienteControler");



module.exports = () => {
    

    //POST Agregar cleinte 
    route.post('/clientes', clienteControler.nuevoCliente)

    













   return route;
};