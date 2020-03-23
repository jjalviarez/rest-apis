const express = require('express');
const route = express.Router();


module.exports = () => {
    

    //Ruta de home
   route.get('/', (req,res,next) => { res.send("home") });

    
   return route;

};