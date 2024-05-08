const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008
const computerProducts = [{name: 'Notebook Lenovo', price: 720},
                          {name: 'Macbook Air 13', price: 1250},
                          {name: 'Tablet Droid 10.1', price: 350}]

const { title } = require('process');

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenid@ a mi sitio web generado a partir de un motor de plantillas.'
    };
    res.render('index', data);
});

app.get('/productos', (req, res) => {
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: computerProducts
    };
    res.render('productos', data);
});

app.get('/*', (req, res) =>{
    const data = {
        title: "Error, ruta no encontrada",
        message: "Lo siento, la ruta que especificaste no existe. Probá con otra."
    }
    res.render('rutasInexistentes', data);
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});