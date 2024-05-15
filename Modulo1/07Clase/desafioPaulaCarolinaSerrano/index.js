const express = require('express');
const cursos = require('./resources/cursos');
const app = express();
const PORT = 3000;

//Ruta raiz
app.get('/', (req, res) => {
 res.send('¡Hola, mundo. Hola, Node.js!')
});

//Ruta que muestra todos los cursos
app.get('/cursosAll', (req, res) => {
    res.json(cursos); 
});

//Query Params
app.get('/cursos', (req, res) => {
    const queryParams = Object.keys(req.query)
    if (queryParams.length > 0){
        let resultado = [];
        for (let curso of cursos){
            if (curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase()) || curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())){
                resultado.push(curso)
            }
        }
        resultado.length > 0 ?
        res.json(resultado) :
        res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias'}]);
    }else {
        res.json(cursos);
    }
});

//Ruta que muestra los cursos filtrados por categoría (URL params)
app.get('/cursos/:categoria', (req, res) => {
    
    //guardamos el URL param en una variable, quitándole previamente los espacios con trim():
    let parametro = req.params.categoria.trim().toLowerCase();

    //Si el parámetro tiene algun valor, iteramos el array cursos y comparamos la categoría de cada curso con el parámetro recibido por URL. Si coinciden, guardamos el curso en el array resultado:
    if (parametro !== ""){
        let resultado = [];
        for (let curso of cursos){
            if (curso.categoria.toLowerCase() == parametro){
                resultado.push(curso)
            }
        }
        resultado.length > 0 ?
            res.json(resultado) :
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias'}]);
    }
});

//Ruta con URL param id
app.get('/curso/codigo/:id', (req, res) => {
    let codigo = parseInt(req.params.id);
    if (typeof codigo === 'number') {
        let result = []
        for (let curso of cursos) {
            if (curso.id === codigo) {
              result.push(curso)
              break
            }
          }
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
    }
})

//Ruta con URL param nombre
app.get('/curso/nombre/:nombre', (req, res) => {
    let param = req.params.nombre.trim().toLowerCase()
    if (param !== ''){
        let result = []

        //recorrido de cursos con filter
        result = cursos.filter((curso) => 
            curso.nombre.toLowerCase().includes(param)
        )

        //recorrido de cursos con for
        // for (let curso of cursos){
        //     if(curso.nombre.toLowerCase().includes(param)){
        //         result.push(curso)
        //     }
        // }
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
    }
})

// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
  });

//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});