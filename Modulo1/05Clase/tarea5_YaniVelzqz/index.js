const express = require('express');
const app = express();
const PORT = 3050;

app.get('/', (request, response) => {
    response.setHeader('charset', 'utf-8');
    response.send('<h1>Bienvenidos a nuestra web</h1>');
})
app.get('/cursos', (request, response) => {
    response.setHeader('charset', 'utf-8');
    response.send('<h1>Bienvenidos a nuestra seccion de cursos, selecciona el de tu interes.</h1>');
})
app.get('/contacto', (request, response) => {
    response.setHeader('charset', 'utf-8');
    response.send('<h1>Bienvenidos a nuestra seccion de contacto, selecciona un medio de contacto</h1>');
})
//controlamos las rutas inexistentes
app.use((request, response) => {
    response.status(404).json({
        error: "404", 
        description: "No se encuentra la ruta o recurso solicitado."});
})

app.listen(PORT, () => {
    console.log("Listening in http://localhost:"+PORT)});
