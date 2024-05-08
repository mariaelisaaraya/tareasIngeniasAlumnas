const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008

//Array de objetos con información de los productos
const catProducts = [{name: 'Comedero cerámica', price: 3000},
                          {name: 'Rascador corrugado', price: 7000},
                          {name: 'Caña de juego', price: 2500}]


//Importación del motor de plantillas
app.set('view engine', 'ejs');
app.use(express.static('views'));

//Ruta raiz
app.get('/', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenid@ a mi sitio web generado a partir de un motor de plantillas.'
    };
    res.render('index', data);
});

//Ruta que muestra los productos
app.get('/productos', (req, res) => {
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: catProducts
    };
    res.render('productos', data);
});

//Manejo de rutas inexistentes
app.get('/*', (req, res) =>{
    const data = {
        title: "Error, ruta no encontrada",
        message: "Lo siento, la ruta que especificaste no existe. Probá con otra."
    }
    res.render('rutasInexistentes', data);
})

//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});