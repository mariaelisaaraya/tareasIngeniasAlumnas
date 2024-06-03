const express = require('express');
const app = express();
const path= require ('path');
const productos = require('./productos');
const PORT = 3002;

app.set('view engine','ejs');
app.use(express.static('views'));

app.get('/',(request, response) =>{
    const data={
        title:'Mi sitio web con EJS',
        message: 'Bienvenidas a mi sitio'
    };

    response.render('index',data);
});
app.get('/productos',(request, response) =>{
    const misproductos={
        title:'Productos',
        message: 'Lista de productos',
        productos
    };

    response.render('productos',misproductos);
});

app.get('/contacto',(request, response) =>{
    response.send('Por estos medios pueden contactarnos!')
});

app.get('*',(request, response)=>{
    response.status(404).send({"error":"404","description":"No se encuentra la ruta"})
})

app.listen(PORT, ()=>{
    console.log("Servidor ejecutandose en el puerto http://localhost:" + PORT)
});