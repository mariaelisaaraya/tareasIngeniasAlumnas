//Servidor web con express 

const express = require('express');
const app = express();
const PORT = 3050;
const path = require('path');

//Middleware: funciones que se ejecutan en el medio de la solicitud y la respuesta con el fin de realizar tareas comunes a todas las rutas o peticiones como la validacion de datos, la autenticacion, etc. 
app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/cursos', (request, response) => {
    response.send('Bienvenidas a nuestra seccion de cursos');
});

app.get('/contacto', (request, response) => {
    response.send('Bienvenidas todas a nuestra seccion de contacto');
});

app.get('*', (request, response) => {
    response.status(404).json({
        error: "404",
        description:"No se encuentra la ruta o recurso solicitado."});
});

//Levantar el servidor web en el puerto 3050 mediante el metodo listen que recibe como parametro el puerto y una funcion de callback que se ejecuta una vez que el servidor esta corriendo.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`, 'http://localhost:3050/');
});