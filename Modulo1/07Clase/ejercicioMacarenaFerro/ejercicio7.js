const express = require('express');
const cursos = require('./cursos');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenid@s al servidor web con rutas dinamicas!');
});

app.get('/cursos', (req,res) => {
    res.json(cursos)
});

app.get('/cursos/:categoria', (req, res) => {
    let parametro = req.params.categoria.trim().toLowerCase();
    if (parametro !== "") {
        let resultado = []
            for (let curso of cursos) {
                if (curso.categoria.toLowerCase() == parametro) {
                    resultado.push(curso) // lleno la lista resultados con todos los cursos que coinciden con la categoria
                }
            }
    }

    resultado.length > 0 ? 
        res.json(resultado) : // si
        res.json([{id: 'Error', description: 'No se encontraron coincidencias.'}]); // si no
});

app.get('/cursos/:id', (req, res) => {
    let parametro = parseInt(req.params.id);
    if (typeof parametro == Number) {
        let resultado = []
        for (let curso of cursos) {
            if (curso.id == parametro) {
                resultado.push(curso)
                break
            }
        }   
    }
    resultado.length > 0 ? 
        res.json(resultado) : 
        res.json([{id: 'Error', description: 'No se encontraron coincidencias.'}]); 
});

app.get('/cursos/:nombre', (req, res) => {
    let parametro = parseInt(req.params.id.trim().toLowerCase());
    if (parametro !== "" ){
        let resultado = []
        for (let curso of cursos) {
            if (curso.nombre == parametro) {
                resultado.push(curso)
                break
            }
        }   
    }
    resultado.length > 0 ? 
        res.json(resultado) : 
        res.json([{id: 'Error', description: 'No se encontraron coincidencias.'}]); 
});

// Query Params 
    
app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.')
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});