const express = require('express');
const app = express();
const PORT = 3008;
const path = require('path');

const frutas = require('./productos.js');
const { url } = require('inspector');

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (request, response) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir de un motor de plantillas.',
        productsURL: `/productos`
    };
    response.render('index', data);
});

app.get('/productos', (request, response) => {
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: frutas,
        url: '/',
    };
    response.render('productos', data);
});

app.get('/*', (request, response) => {
    // response.set('Content-Type', 'text/plain');
    // const errorResponse = {
    //     error: "404",
    //     description: 'No se encuentra la ruta o recurso solicitado.'
    // };
    // response.status(404).send(JSON.stringify(errorResponse)); 
    
    const data = {
        title: 'Error 404',
        message: 'No se encuentra la ruta o recurso solicitado.',
        url: '/',
    };

    response.render('rutaInexistente', data);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});