const express = require('express')
const app = express();
const path = require('path');
const PORT = 3050 ;


// Define una ruta basica
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send('<h1>Hola a todas, bienvenidas a nuestra web</h1>');
})

app.get('/cursos', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send('Hola a todas, estos son nuestros cursos:')
})

app.get('/contacto', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send('No te quedes con dudas, contactanos por los siguientes medios:')
})

// Ruta predeterminada para manejar rutas inexistentes
app.use((req, res) => {
    res.status(404).json({error: '404', description: 'No se encuentra la ruta o recurso solicitado.'});
});


//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});