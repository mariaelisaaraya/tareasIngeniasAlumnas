const express = require('express');
const PORT = 3050; //defino el puerto
const app = express();

//escucha las peticiones entrantes
app.get('/', (req, res) => { //ruta basica
 
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bienvenid@s a nuestra web!</h1>');
});
//ruta a cursos
app.get('/cursos', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bienvenid@s a nuestros cursos!</h1>');
});
//ruta a contacto
app.get('/contacto', (req, res) => { 
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Bienvenid@s a nuestra informacion de contacto!</h1>');
});

//ruta predeterminada para manejar rutas inexistentes
app.use((req, res) => {
    res.status(404).json({
        error: "404",
        description: "No se encuentra la ruta o recurso solicitado."
    });
});

//-------otra manera----------
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'trailerflix')));


//define en puerto de escucha
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});