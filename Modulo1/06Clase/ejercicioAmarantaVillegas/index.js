const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008

const ropa = require('./productos.js');


app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (request, response) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenidos a mi sitio web con plantillas EJS',
        productsURL: '/productos'
    };
    response.render('index', data);
});

app.get('/productos', (request, response) => {
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: ropa
    };
    response.render('productos', data);
});


app.get('*', (req, res) => {
    const data = {
        title: 'Página no encontrada. Error 404',
        message: 'La página que buscas no se encuentra disponible. Por favor, verifica la URL ingresada e intenta nuevamente.',
        homeURL: '/',

    };
    res.render('notFound', data);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});