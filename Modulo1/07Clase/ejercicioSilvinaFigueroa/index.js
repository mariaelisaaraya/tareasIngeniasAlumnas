const express = require('express');
const app = express();

const PORT =  3001
const cursos = require('./recursos/cursos')
// Defino la ruta raíz
app.get('/cursos', (req, res) => {
    res.json(cursos); 
});
// 1.Defino la ruta “/cursos/codigo/:id”  busqueda por id de curso
app.get('/cursos/codigo/:id', (req, res) => {  //el id del curso debe ser un parametro numerico 
    let codigo = parseInt(req.params.id) //convierto el parametro recibido con parseInt
    if (typeof codigo === 'number') {    //verifico si es un numero con typeof 
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
});
// 2. Defino la ruta “/cursos/nombre/:nombre”  busqueda parcial por nombre de curso
app.get('/cursos/nombre/:nombre', (req, res) => {
    let param = req.params.nombre.trim().toLowerCase() //saco espacios y convierto en minuscula el parametro recibido
    console.log("params", param)
    if (param !== '') {
        let result = []
    
        /*result = cursos.filter((curso) => 
            curso.nombre.includes(param)  
        )*/
        for (let curso of cursos) {
            if (curso.nombre.toLowerCase().includes(param.toLowerCase())) {
                result.push(curso)
            
            }
        }
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
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