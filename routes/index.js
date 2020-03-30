const express = require('express');
const route = express.Router();


//Importar Controladores
const clienteControler = require("../controllers/clienteControler");
const productoControler = require("../controllers/productoControler");
const pedidosControler = require("../controllers/pedidosControler");



module.exports = () => {
    
    //CLIENTES
    //POST Agregar cliente 
    route.post('/clientes', clienteControler.nuevoCliente);
    //GET Mostrar Todo los clientes 
    route.get('/clientes', clienteControler.allClientes);
    //GET Mostrar cliente 
    route.get('/clientes/:id', clienteControler.oneCliente);
    //DELETE Eliminar cliente 
    route.delete('/clientes/:id', clienteControler.deleteCliente);
    //PUT Actualizar cliente 
    route.put('/clientes/:id', clienteControler.updateCliente);



    //PRODUCTOS
    //POST Agregar producto 
    route.post('/productos', productoControler.subirArchivo,productoControler.nuevoProducto);
    //GET Mostrar Todo los productos 
    route.get('/productos', productoControler.allProductos);
    //GET Mostrar cliente 
    route.get('/productos/:id', productoControler.oneProducto);
    //DELETE Eliminar producto 
    route.delete('/productos/:id', productoControler.deleteProducto);
    //PUT Actualizar producto 
    route.put('/productos/:id', productoControler.subirArchivo, productoControler.updateProducto);



    //PEDIDOS
    //POST Agregar pedido 
    route.post('/pedidos', pedidosControler.nuevoPedido);
    //GET Mostrar Todo los pedidos 
    route.get('/pedidos', pedidosControler.allPedidos);
    //GET Mostrar pedidos 
    route.get('/pedidos/:id', pedidosControler.onePedido);
    //DELETE Eliminar pedidos 
    route.delete('/pedidos/:id', pedidosControler.deletePedido);
    //PUT Actualizar pedidos 
    route.put('/pedidos/:id', pedidosControler.updatePedido);










   return route;
};