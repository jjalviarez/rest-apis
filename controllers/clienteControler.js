
 
const mongoose = require('mongoose');
const Cliente = mongoose.model('Clientes');








exports.nuevoCliente = async (req,res,next) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.json(cliente);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.allClientes = async (req,res,next) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.oneCliente = async (req,res,next) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.json({mensaje: "No Encontrado"});
        return res.json(cliente);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.deleteCliente = async (req,res,next) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        return res.status(200).json('Cliente Eminado Correctamenre');
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.updateCliente = async (req,res,next) => {    
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!cliente) return res.json({mensaje: "No Encontrado"});
        return res.json(cliente);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};
