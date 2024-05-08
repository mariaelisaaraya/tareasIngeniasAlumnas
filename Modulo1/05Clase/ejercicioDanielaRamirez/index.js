const express = require('express');
const app = express();
const PORT = 3050;
const path = require('path');

app.use(express.static(path.join(__dirname, 'trailerflix')));

app.get('/', (request, response) => {
    response.set('Content-Type', 'text/html');
    response.send('<h1>Hola Mundo</h1>');
});

app.get('/cursos', (request, response) => {
    response.set('Content-Type', 'text/html');
    response.send('<h1>Estos son los cursos disponibles</h1>');
});

app.get('/contacto', (request, response) => {  
    response.set('Content-Type', 'text/html');
    response.send('<h1>Contactanos</h1>');
});

app.get('*', (request, response) => {
    response.set('Content-Type', 'text/plain');
    const errorResponse = {
        error: "404",
        description: 'No se encuentra la ruta o recurso solicitado.'
    };
    response.status(404).send(JSON.stringify(errorResponse));    
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});