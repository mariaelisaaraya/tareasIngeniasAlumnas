const req = require('express');
const app = req();
const port = 3050;
app.get('/', (req, res) => {
    res.send('Bienvenidos a la pagina web');
});
app.get('/cursos', (req, res) => {
    res.send('Bienvenidos a la seccion de cursos');
});
app.get('/contacto', (req, res) => {
    res.send('Bienvenidos a la seccion de contacto');
});

//rutas inexistentes
app.get('*', (req, res) => {
    res.send('Error 404, pagina no encontrada');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


