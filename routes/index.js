const express = require('express');
const route = express.Router();


//Importar Controladores
const clienteControler = require("../controllers/clienteControler");
//Importar Controladores
const productoControler = require("../controllers/productoControler");



module.exports = () => {
    
    //CLIENTES
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



    //PRODUCTOS
    //POST Agregar cleinte 
    route.post('/productos', productoControler.subirArchivo,productoControler.nuevoProducto)
    //GET Agregar cleinte 
    route.get('/productos', productoControler.allProductos)
    //GET Agregar cleinte 
    route.get('/productos/:id', productoControler.oneProducto)
    //DELETE Agregar cleinte 
    route.delete('/productos/:id', productoControler.deleteProducto)
    //PUT Agregar cleinte 
    route.put('/productos/:id', productoControler.subirArchivo, productoControler.updateProducto)












   return route;
};