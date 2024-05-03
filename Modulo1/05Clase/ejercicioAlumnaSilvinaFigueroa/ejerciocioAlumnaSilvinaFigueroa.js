const express = require('express');
const app = express()
const PORT = 3050

const rutaInexistente = { error:'404', description:'No se encuentra la ruta o recurso solicitado.'  }

app.get('/', (request, respose)=>{
    respose.send('<html><body><h1>Bienvenid@s a nuestra web!</h1></body></html>')
});
app.get('/cursos', (request, respose)=>{
    respose.send('<html><body><h1>Bienvenid@s a nuestra seccion de cursos!!</h1></body></html>')
});

app.get('/contacto', (request, respose)=>{
    respose.send('<html><body><h1>En esta seccion podes contactarnos</h1></body></html>')
});

// get para rutas inexistentes
//app.get('*', (request, respose)=>{
// respose.status(404).json(rutaInexistente)
 //})
// Middelware para rutas inexistentes
app.use((request, respose)=>{
    respose.status(404).json({ error:'404', description:'No se encuentra la ruta o recurso solicitado.'  })
})

app.listen(PORT, () => {
    console.log("Listening in http://localhost:"+PORT)
});