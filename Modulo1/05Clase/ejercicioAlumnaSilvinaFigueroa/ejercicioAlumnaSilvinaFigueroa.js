const express = require('express');
const app = express()
const PORT = 3050

const rutaInexistente = { error:'404', description:'No se encuentra la ruta o recurso solicitado.'  }

app.get('/', (request, response)=>{
    response.set('Content-Type', 'text/html');
    response.send('<html><body><h1>Bienvenid@s a nuestra web!</h1></body></html>')
});
app.get('/cursos', (request, response)=>{
    response.set('Content-Type', 'text/html');
    response.send('<html><body><h1>Bienvenid@s a nuestra seccion de cursos!!</h1></body></html>')
});

app.get('/contacto', (request, response)=>{
    response.set('Content-Type', 'text/html');
    response.send('<html><body><h1>En esta seccion podes contactarnos</h1></body></html>')
});
// Dos formas de controlar las rutas inexistentes:
// Get para rutas inexistentes
//app.get('*', (request, respose)=>{
// response.status(404).json(rutaInexistente)
 //})
// Middelware para rutas inexistentes
app.use((request, response)=>{
    response.status(404).json({ error:'404', description:'No se encuentra la ruta o recurso solicitado.'  })
})

app.listen(PORT, () => {
    console.log("Listening in http://localhost:"+PORT)
});