const express = require('express');
const app = express();

const PORT =  3008
const cursos = require('./resources/cursos')
// La ruta raíz
app.get('/', (req, res) => {
res.send('¡Hola, Node.js!'); 
});


app.get('/cursosAll', (req, res) => {
  res.json(cursos); 
});

// Query Params 
app.get('/cursos', (req, res) => {
    const queryParams = Object.keys(req.query)
    if (queryParams.length > 0) {
        let resultado = [];
        for (let curso of cursos) {
            if ( curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase()) 
                || curso.categoria.toLowerCase().includes(req.query.id.toLowerCase())) {
                    resultado.push(curso)
                }
        }
        resultado.length > 0 ? 
            res.json(resultado) : 
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
        } else{
        res.json(cursos); 
    }
});

// url params id
app.get('/curso/codigo/:id', (req, res) => {
    let parametro = parseInt(req.params.id);
    if (parametro !== ''){
        let resultado = []
        for (let curso of cursos) {
            if (curso.id === parametro) {
                resultado.push(curso)
            }
        }
        resultado.length > 0 ?
        res.json(resultado) :  
        res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
    } 
});

// url params nombre
app.get('/curso/nombre/:nombre', (req, res) => {
    let parametro = req.params.nombre.trim().toLowerCase();
    if (parametro !== ''){
        let resultado = []
        for (let curso of cursos) {
            if (curso.nombre.toLowerCase().includes(parametro.toLowerCase())) {
                resultado.push(curso)
            }
        }
        resultado.length > 0 ?
        res.json(resultado) :  
        res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
    }
});
// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
  });