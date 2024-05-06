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
    response.status(404).json({
        error: "404",
        description: 'No se encuentra la ruta o recurso solicitado.'});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});