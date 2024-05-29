const express = require('express');
const app= express();
const PORT = 3050;
//respuesta para la ruta raiz
app.get('/',(req,res) => {
    res.send('<html><body><h1>Bienvenidas a nuestra web.</h1></body></html>');
});
//respuesta para la ruta /cursos
app.get('/cursos',(req,res) => {
    res.send('<html><body><h1>Bienvenidas a nuestra sección cursos.</h1></body></html>');
});
//respuesta para la ruta /contacto
app.get('/contacto',(req,res) => {
    res.send('<html><body><h1>Bienvenidas a nuestra sección contacto.</h1></body></html>');
});
//respuesta para rutas inexistentes
// tambien 
// app.get('*',(req,res) => {})
app.use((req,res) => {//JSON.stringify(): Este método convierte un objeto JavaScript en 
    //una cadena JSON. Toma un objeto como argumento y devuelve una cadena JSON que representa el objeto.
    let msjerr={
        error: '404', 
        description: 'No se encuentra la ruta o recurso solicitado.'
    };
    res.status(404).send(JSON.stringify(msjerr));
});
//método permite al servidor escuchar las solicitudes en el puerto especificado
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})