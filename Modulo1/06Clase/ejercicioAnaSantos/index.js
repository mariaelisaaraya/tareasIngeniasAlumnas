const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008;
const makeupProducts = require('./makeupProducts.js');


app.set('view engine', 'ejs');
app.use(express.static('views'));
app.get('/', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir EJS.',
        productsURL: `/productos`
    };
    res.render('index', data);
});

app.get('/productos', (req, res) => {
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico coffeandmakeup@gmail.com.',
        products: makeupProducts
    };
    res.render('productos', data);
});

app.get('*', (req, res) => {
    const data = {
        title: 'Página no encontrada. Error 404',
        message: 'La página que buscas no se encuentra disponible. Por favor, verifica la URL ingresada e intenta nuevamente.',
        homeURL: '/',

    };
    res.render('notFound', data);
    res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});