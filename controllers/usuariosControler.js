
require('dotenv').config({path: 'variables.env'});
const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');







exports.nuevoUsuario = async (req,res,next) => {
    req.body.password= await bcrypt.hash(req.body.password, 12);
    try {
        await Usuarios.create(req.body);
        return res.status(201).json({mensaje: "Usuario creado correctamente"});
    } catch (error) {
        console.log('error', error)
        return res.status(400).json({mensaje: "Error al Crear Usuario"});
    }
    
    
};



exports.login = async (req,res,next) => {
    const usuario = await Usuarios.findOne({email: req.body.email});
    if (!usuario) return res.status(401).json({mensaje: "Usuario No Encontrado"});
    if (!bcrypt.compareSync(req.body.password,usuario.password)) return res.status(401).json({mensaje: "Contraseña Incorrecta"});
    const token = jwt.sign({
        email: usuario.email,
        nombre: usuario.nombre,
        id: usuario._id
    },
    process.env.SECRETO,
    {
        expiresIn: '1h'
    });
     res.json(token);

};
