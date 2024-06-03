const express = require('express');
const app= express();
const PORT = 3001;
const products=require('./productos.js');

//respuesta para la ruta raiz
app.get('/productos',(req,res) => {
    res.json(products);
});