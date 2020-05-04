
 
const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedidos');






exports.nuevoPedido = async (req,res,next) => {

    try {
        let pedido = await Pedido.create(req.body);
        return res.json(pedido);
    } catch (error) {
        return res.json({mensaje: error});
    }
    
};


exports.allPedidos = async (req,res,next) => {
    try {
        const pedidos = await Pedido.find().populate("cliente").populate({
            path:"pedido.producto",
            model:"Productos"
        });
        return res.json(pedidos);
    } catch (error) {
        return res.json({mensaje: error});
    }
    
};




exports.onePedido = async (req,res,next) => {
    try {
        const pedido = await Pedido.findById(req.params.id).populate("cliente").populate({
            path:"pedido.producto",
            model:"Productos"
        });
        if (!pedido) return res.json({mensaje: "No Encontrado"});
        return res.json(pedido);
    } catch (error) {
        return res.json({mensaje: error});
    }
    
};


exports.deletePedido = async (req,res,next) => {
    try {
        await Pedido.findByIdAndDelete(req.params.id);
        return res.status(200).json('Pedido Eminado Correctamenre');
    } catch (error) {
        return res.json({mensaje: error});
    }
    
};


exports.updatePedido = async (req,res,next) => { 
       
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .populate("cliente")
        .populate({
            path:"pedido.producto",
            model:"Productos"
        });
        if (!pedido) return res.json({mensaje: "No Encontrado"});
        return res.json(pedido);
    } catch (error) {
        return res.json({mensaje: error});
    }
    
};
