//Se importan los módulos instalados, como Express.
const express = require('express');
const app = express();
//Se establece la variable PORT para indicar en qué puerto se ejecutará el servidor.
const PORT = 3002;
//Conectamos con la lista que contiene productos.
const articulos = require('./recursos/productos');
//Declaro modulo fs
const fs = require('fs');
const { error } = require('console');


fs.writeFile('fileDeApp.txt','Importante', (error) => {
    if (error)  console.log('error', error);
    else console.log('Archivo creado correctamente.');
    });


//Ruta principal de la app.
app.get('/', (request, response) => {
    response.send('Bienvenidos a Tienda YV');
    // http://localhost:3002/
});

// Ruta para devolver el listado de articulos por nombres ascendentes.
app.get('/productos', (request, response) => {
    const nombresAscendents = articulos.sort((a,b) => {
        //Realizo comparaciones
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1
        }
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1
        }
        return 0
    })
    response.json(nombresAscendents)
    // http://localhost:3002/productos
});

// Ruta para obtener un producto por su ID.
app.get('/productos/id/:id', (request, response) => {
    const idArticulo = parseInt(request.params.id);
//Ante la primera coincidencia que se encuentra, el método find()
// devuelve el objeto o elemento como resultado (según el tipo de array).
    const articuloEncontrado = articulos.find(articulo => articulo.id === idArticulo);
        if (articuloEncontrado) {
            response.json(articuloEncontrado);
        // http://localhost:3002/productos/id/26
            } else {
        response.status(404).json({ id: 'Error', descripcion: 'No se encontraron articulos con ese ID.' });
        // http://localhost:3002/productos/id/0
    }
});

//Ruta para obtener articulo/s por su nombre ó una letra.
app.get('/productos/nombre/:nombre', (request, response) => {
    // Convertir a minúsculas para comparar de manera insensible a mayúsculas.
    const nombreArticulo = request.params.nombre.toLowerCase();
    const articulosEncontrados = articulos.filter(articulo => articulo.nombre.toLowerCase().includes(nombreArticulo));

    if (articulosEncontrados.length > 0) {
        response.json(articulosEncontrados);
    // http://localhost:3002/productos/nombre/Zapatos
    } else {
        response.status(404).json({ id: 'Error', descripcion: 'No se encontraron articulos con ese nombre' });
    // http://localhost:3002/productos/probando
    }
});

//Ruta predeterminada para manejar rutas inexistentes
app.get('*', (request, response) => {
    response.status(404).send('Lo siento, la pagina que buscas no existe!');
    // http://localhost:3002/productoss
});

//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});