
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008;

app.use(express.static(path.join(__dirname, 'trailerflix')));
app.get('/', (req, res) => {
    res.send('Tarea Clase 05');
});

app.get('/cursos', (req, res) => {
    res.send('Bienvenid@s a la seccion de cursos. Ven a conocer nuestras ofertas');
});

app.get('/contacto', (req, res) => {
    res.send('Bienvenid@s a la seccion de contacto. Dejanos tu mensaje');
});

app.use((req, res) => {
    res.status(404).json({
        error: "404",
        description: "No se encuentra la ruta o recurso solicitado"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});