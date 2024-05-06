const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body><h1>“Bienvenidas a nuestra web”</h1></body></html>') 
});

app.get('/cursos', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body><h1>“Bienvenidas a nuestra sección cursos”</h1></body></html>')
});

app.get('/contacto', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body><h1>“Contacto.”</h1></body></html>')
});

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/plane');
    res.status(404).send('No se encuentra la ruta o recurso solicitado.'); 
});

app.listen(PORT, () => {
    console.log("Listening in http://localhost:"+PORT)
});