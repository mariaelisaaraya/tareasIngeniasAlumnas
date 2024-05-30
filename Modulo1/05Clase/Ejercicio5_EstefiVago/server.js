const express = require('express');
const app = express();
const PORT = 3002;

app.get('/',(request, response) =>{
    response.send('Hola, Mundo!')
});
app.get('/cursos',(request, response) =>{
    response.send('Bienvenidos a nuestros cursos!')
});

app.get('/contacto',(request, response) =>{
    response.send('Por estos medios pueden contactarnos!')
});

app.get('*',(request, response)=>{
    response.status(404).send({"error":"404","description":"No se encuentra la ruta"})
})

app.listen(PORT, ()=>{
    console.log("Servidor ejecutandose en el puerto http://localhost:" + PORT)
});

