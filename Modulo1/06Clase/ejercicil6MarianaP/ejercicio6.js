const express = require('express');
const app= express();
const path =require('path');
const PORT = 3000;
const prodcostura=require('./prodcostura.js');

// inicializar el Motor de plantillas elegido
app.set('view engine','ejs');
app.use(express.static('views'));

//respuesta para la ruta raiz
app.get('/',(req,res) => {
    const data={
        title:'Mi sitio web de productos',
        message:'Bienvenido a mi sitio web de costura creativa'
    };
    res.render('ej6',data);//Este método espera como primer parámetro, el archivo EJS que debe 
    //renderizar, y como segundo parámetro, el objeto data con la estructura correspondiente a los 
    //marcadores de posición
});
//respuesta para la ruta /productos
app.get('/productos',(req,res) => {
    const data={
        titulo : 'Productos y sus características:',
        prodcostura
    };
    res.render('productos',data);
});

//respuesta para rutas inexistentes 
app.use((req,res) => {// app.get('*',(req,res) => {})
    res.status(404).send('El servidor no pudo encontrar el recurso solicitado.');
});
//método permite al servidor escuchar las solicitudes en el puerto especificado
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})