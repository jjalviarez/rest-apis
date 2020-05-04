const express = require('express');
const route = express.Router();


//Importar Controladores
const clienteControler = require("../controllers/clienteControler");
const productoControler = require("../controllers/productoControler");
const pedidosControler = require("../controllers/pedidosControler");
const usuariosControler = require("../controllers/usuariosControler");

//middleware proteger turas
const auth = require("../middleware/auth");




module.exports = () => {
    
    //CLIENTES
    //POST Agregar cliente 
    route.post('/clientes',auth, clienteControler.nuevoCliente);
    //GET Mostrar Todo los clientes 
    route.get('/clientes', auth , clienteControler.allClientes);
    //GET Mostrar cliente 
    route.get('/clientes/:id', auth, clienteControler.oneCliente);
    //DELETE Eliminar cliente 
    route.delete('/clientes/:id', auth, clienteControler.deleteCliente);
    //PUT Actualizar cliente 
    route.put('/clientes/:id', auth, clienteControler.updateCliente);



    //PRODUCTOS
    //POST Agregar producto 
    route.post('/productos', auth, productoControler.subirArchivo,productoControler.nuevoProducto);
    //GET Mostrar Todo los productos 
    route.get('/productos', auth, productoControler.allProductos);
    //GET Buscar productos 
    route.get('/productos/busqueda/:query', auth, productoControler.buscarProductos);
    //GET Mostrar cliente 
    route.get('/productos/:id', auth, productoControler.oneProducto);
    //DELETE Eliminar producto 
    route.delete('/productos/:id', auth, productoControler.deleteProducto);
    //PUT Actualizar producto 
    route.put('/productos/:id', auth, productoControler.subirArchivo, productoControler.updateProducto);



    //PEDIDOS
    //POST Agregar pedido 
    route.post('/pedidos', auth, pedidosControler.nuevoPedido);
    //GET Mostrar Todo los pedidos 
    route.get('/pedidos', auth, pedidosControler.allPedidos);
    //GET Mostrar pedidos 
    route.get('/pedidos/:id', auth, pedidosControler.onePedido);
    //DELETE Eliminar pedidos 
    route.delete('/pedidos/:id', auth, pedidosControler.deletePedido);
    //PUT Actualizar pedidos 
    route.put('/pedidos/:id', auth, pedidosControler.updatePedido);


    //Usuarios
    //Crear Cuenta
    route.post('/crear-cuenta', usuariosControler.nuevoUsuario);
    //login Cuenta
    route.post('/login', usuariosControler.login);










   return route;
};