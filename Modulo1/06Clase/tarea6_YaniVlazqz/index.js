//Se importan los módulos necesarios, como Express.
const express = require('express');
const app = express();
//Se importa path para manipular rutas de archivos.
const path = require('path');
//Se establece la variable PORT para indicar en qué puerto se ejecutará el servidor.
const PORT = 3008;
//Conectamos con la lista frutas
const frutas = require('./recursos/productos');


// Configuración del motor de plantillas EJS para renderizar vistas
app.set('view engine', 'ejs');
// Middleware para servir archivos estáticos desde la carpeta 'views'
app.use(express.static('views'));


//Maneja la ruta principal ('/')
app.get('/', (request, response) => {
    const data = {
        title: 'FRUTAS YV',
        message: 'Una delicia en tu paladar!',
        productsURL: '/productos',
    };
//Renderizar la vista
    response.render('index', data);
});


//Maneja la ruta '/productos'
app.get('/productos', (request, response) => {

    const data2 = {
        title: 'Catalogo',
        message: 'Busca la fruta que deseas.',
        frutas
    }
//Renderizar la vista
    response.render('productos', data2);
});

//Defino el control del manejo de rutas inexistentes.
app.get('/*', (request, response) => {
    response.status(404).send('Lo siento, no se encuentra disponible esa fruta.'); 
    });

//Se inicia el servidor y se imprime un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});