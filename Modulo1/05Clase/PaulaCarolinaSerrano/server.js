const express = require('express');
const app = express();
const PORT = 3050;


//Definición de rutas
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('"<h1>Bienvenidas a nuestra web</h1>"');
    
    
});

app.get('/cursos', (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>Bienvenidas a nuestra sección cursos</h1>");
    
});

app.get('/contacto', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>Contactate con nosotras</h1>");
    
});

//Ruta predeterminada para manejar rutas inexistentes (es un middleware)
app.use((req, res) => {
    let json_error = {"error": "404", "description":"No se encuentra la ruta o recurso solicitado"}
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(json_error);
    
});


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})