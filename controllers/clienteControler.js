
 
const mongoose = require('mongoose');
const Cliente = mongoose.model('Clientes');








exports.nuevoCliente = async (req,res,next) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.json(cliente);
    } catch (error) {
       return res.json(error);
    }
    
};

