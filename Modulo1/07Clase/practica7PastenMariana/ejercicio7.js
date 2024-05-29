const express = require('express');
const app= express();
const PORT = 3001;
const cursos=require('./cursos');

//respuesta para la ruta raiz
app.get('/cursos',(req,res) => {
    res.json(cursos);
});
//respuesta para la ruta /cursos/codigo/:id
app.get('/cursos/codigo/:id',(req,res) => {
    let cod = parseInt(req.params.id);
    if(typeof(cod) !== ''){
        let result = [];
        for (let curso of cursos){
            if(curso.id === cod){
                result.push(curso);
                break
            }
        }
        result.length > 0 ?
        res.json(result) :
        res.status(404).json([{id: 'error', descripcion: 'No se encuentra la ruta o recurso solicitado.'}]);
    }
});
//respuesta para la ruta /cursos/nombre/:nombre
app.get('/cursos/nombre/:nombre',(req,res) => {
    let name = req.params.nombre.trim().toLowerCase();
    if(name !== ''){
        let resp = [];
        cursos.forEach(curso => {
            if(curso.nombre.toLowerCase().includes(name)){
                resp.push(curso);
            }
        });
        //resp=cursos.filter(curso => curso.nombre.toLowerCase() === name)
        resp.length > 0 ?
        res.json(resp) :
        res.status(404).json([{id: 'error', descripcion: 'No se encuentra la ruta o recurso solicitado.'}]);
    }
});

app.get('/cursos/:categoria',(req,res) => {
    let param=req.params.categoria.trim().toLowerCase();
    if(param !== ''){
        let resultado = [];
        for (let curso of cursos){
            if(curso.categoria.toLowerCase() === param){
                resultado.push(curso);
            }
        }
    resultado.length > 0 ?
    res.json(resultado) : 
    res.json([{id: 'error', descripcion: 'No se encuentra la ruta o recurso solicitado.'}]) ;
    }
});

//Query Params
app.get('/cursos',(req,res) => {
    const queryParams = Object.keys(req.query);
    if(queryParams.length > 0){//si se envían parámetros
        let resultado = [];
        for(let curso of cursos){
            if(curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase())&&
            curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())){
                resultado.push(curso);
            }
        }
        //una vez cargado el array resultado con los elementos coincidentes con la búsqueda
        // se envía como respuesta lo solicitado, si no error
        resultado.length>0?
            res.json(resultado):
            res.json([{id: 'error', descripcion: 'No se encuentra la ruta o recurso solicitado.'}]);
    }else{//si no se envían parámetros
        res.json(cursos);// se envía el set de datos completo
    }
});

//respuesta para rutas inexistentes
app.use((req,res) => {
    res.status(404).send('No se encuentra la ruta o recurso solicitado.');
});
//método permite al servidor escuchar las solicitudes en el puerto especificado
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})