
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
mongoose.Promise = global.Promise;
mongoose.connect(process.env.BD_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('error', (error) =>{
    console.log(error);
});
//importar los modelos 
require("../models/Clientes");
require("../models/Productos");
require("../models/Pedidos");