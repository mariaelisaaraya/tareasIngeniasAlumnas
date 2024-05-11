const express = require('express');
const app = express();
const PORT =  3000

const cursos = require('../cursos.js')

// La ruta raíz
app.get('/', (req, res) => {
res.send('¡Bienvenid@s a mi página de cursos de programación!'); 
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
                || curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())) {
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

// endopoint para buscar por id
app.get('/curso/codigo/:id', (req, res) => {
    let parametro = parseInt(req.params.id);
    if (parametro !== '' && typeof(parametro) === 'number'){
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

//endpoint para buscar por nombre parcialmente
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
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });