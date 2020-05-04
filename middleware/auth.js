const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});


module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        const error = new Error('No hay autenticacion');
        error.statusCode = 401;
        throw error;

    }
    const token = authHeader.split(' ')[1];
    let revisarToken;
    try {
        revisarToken= jwt.verify(token,process.env.SECRETO);
    } catch (error) {
        error.statusCode = 500;
        throw error;        
    }

    if(!revisarToken) {
        const error = new Error('No autenticado');
        error.statusCode = 401;
        throw error;        
    }

    return next();



}




