
 
const mongoose = require('mongoose');
const Producto = mongoose.model('Productos');
const multer  = require('multer');
const shortid = require('shortid');
const fs  = require('fs');







exports.nuevoProducto = async (req,res,next) => {
    try {
        if(req.file) {
            req.body.imagen= req.file.filename;
        }
        const producto = await Producto.create(req.body);
        return res.json(producto);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.allProductos = async (req,res,next) => {
    try {
        const productos = await Producto.find();
        return res.json(productos);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.oneProducto = async (req,res,next) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.json({mensaje: "No Encontrado"});
        return res.json(producto);
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};


exports.deleteProducto = async (req,res,next) => {
    /*
    try {
        await Producto.findByIdAndDelete(req.params.id);
        return res.status(200).json('Producto Eminado Correctamenre');
    } catch (error) {
       return res.json({mensaje: error});
    }
    */
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.json({mensaje: "No Encontrado"}); 
        var imagenAnterior = producto.imagen;
        await producto.remove();
        //De existir un archivo anterior lo elimina
        if(imagenAnterior) {
            imagenAnterior= __dirname + '/../uploads/' + imagenAnterior;
            fs.unlink(imagenAnterior, (err) => {
                if (err) console.log(err);
            });
        }
        return res.status(200).json('Producto Eminado Correctamenre');
    } catch (error) {
        return res.status(400).json({mensaje: error});
    }

    
};


exports.updateProducto = async (req,res,next) => { 
    
    /* 
    try {
        if(req.file) {
            req.body.imagen= req.file.filename;
        }
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!producto) return res.json({mensaje: "No Encontrado"});
        return res.json(producto);
    } catch (error) {
       return res.json({mensaje: error});
    }

*/
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.json({mensaje: "No Encontrado"}); 
        Object.assign(producto,req.body);
        
        if(req.file) {
            var imagenAnterior = producto.imagen;
            producto.imagen= req.file.filename;
        }
        await producto.save();
        //De existir un archivo anterior lo elimina
        if(imagenAnterior) {
            imagenAnterior= __dirname + '../../uploads/' + imagenAnterior;
            fs.unlink(imagenAnterior, (err) => {
                if (err) console.log(err);
            });
        }
        return res.json(producto);

    } catch (error) {
        return res.status(400).json({mensaje: error});
    }
    
};




//Carga de Archivo----------------------------------

//middleware de carga de archivo
exports.subirArchivo = (req,res,next) => {
    upload(req, res, function (error) {
        if (error) {
            return res.json({mensaje: error});
        } 
        else {
        return next();
        }
    });
};


//Configuracion del archivo
const configuracionMulter = {
    limits: {
        fileSize : 1000000
    },
    fileFilter (req, file, cb) {
        if (file.mimetype.split('/')[0]==='image') {
            cb(null, true);
        }
        else {
            cb(new Error('Formato no Valido'));
        }
    },
    storage :  multer.diskStorage({
              destination : (req, file, cb) => {
                cb(null, __dirname + '../../uploads/');
              },
              filename : (req, file, cb) => {
                const extnsion = file.mimetype.split('/')[1];
                cb(null,shortid.generate() + '.' + extnsion);
              }
    })
    
};
//inicializar multer
const upload = multer(configuracionMulter).single('imagen');
