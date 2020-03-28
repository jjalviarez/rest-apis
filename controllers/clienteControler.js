
 
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


exports.allClientes = async (req,res,next) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (error) {
       return res.json(error);
    }
    
};


exports.oneCliente = async (req,res,next) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        return res.json(cliente);
    } catch (error) {
       return res.json(error);
    }
    
};


exports.deleteCliente = async (req,res,next) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        return res.status(200).json('Cliente Eminado Correctamenre');
    } catch (error) {
       return res.json(error);
    }
    
};


exports.updateCliente = async (req,res,next) => {    
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(cliente);
    } catch (error) {
       return res.json(error);
    }
    
};
