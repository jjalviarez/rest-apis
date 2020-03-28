const express = require('express');
const route = express.Router();


//Importar Controladores
const clienteControler = require("../controllers/clienteControler");



module.exports = () => {
    

    //POST Agregar cleinte 
    route.post('/clientes', clienteControler.nuevoCliente)

    //GET Agregar cleinte 
    route.get('/clientes', clienteControler.allClientes)


    //GET Agregar cleinte 
    route.get('/clientes/:id', clienteControler.oneCliente)

    //DELETE Agregar cleinte 
    route.delete('/clientes/:id', clienteControler.deleteCliente)


    //PUT Agregar cleinte 
    route.put('/clientes/:id', clienteControler.updateCliente)















   return route;
};