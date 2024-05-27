const express = require('express');
const app = express();
const PORT =  3000

const cursos = require('./cursos.js')

// La ruta raíz
app.get('/', (req, res) => {
res.send('¡Bienvenidas a los de cursos de programacion!'); 
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
            res.json([{id: 'Error', descripcion: 'Ups!!! No hay coincidencias encontradas :('}]);
        } else{
        res.json(cursos); 
    }
});

// endopoint para buscar por id
app.get('/cursos/codigo/:id', (req, res) => {
    let parametro = parseInt(req.params.id);
    if (parametro !== '' && typeof(parametro) === 'number'){
        let resultado = []
        for (let curso of cursos) {
            if (curso.id === parametro) {
                resultado.push(curso)
                break
            }
        }
        resultado.length > 0 ?
        res.json(resultado) :  
        res.json([{id: 'Error', descripcion: 'Ups!!! No hay coincidencias encontradas :('}]);
    } 
});

//endpoint para buscar por nombre parcialmente
app.get('/cursos/nombre/:nombre', (req, res) => {
    let param = req.params['nombre'].trim().toLowerCase();
    console.log(param)
    if (param !== '') {
        let result = [];
        
        cursos.forEach(course => {
          if(course.nombre.toLowerCase().includes(param)){
            result.push(course);
          }  
        });
  
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'Ups!!! No hay coincidencias encontradas :(' })
    }
  });
  

// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
  res.status(404).send('Ups!!! la pagina que buscas no existe :('); 
});

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  }); 