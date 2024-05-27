// Clase 4 ejercicio o desafio

const http = require ("http");
const PORT = 3008

const server = http.createServer ((request, response) =>{
    let respuesta = ""
    let statusCode = 200;
    if(request.url === "/"){
        respuesta = "Hola!Bienvenid@. Amo las mariposas."
    } else if(request.url === "/cursos"){
        respuesta = "Bienvenid@ al sector de los cursos";
    } else if(request.url === "/monarcas"){
        respuesta = "Si te gustan las mariposas monarcas. Veni!!";
    } else if(request.url === "/contacto"){
        respuesta = "Podes contactarte mediante este mail quimeymarilen@mariposass.com";
    }else {
        statusCode = 404;
        respuesta = "No se pudo encontrar la ruta"
    }
    response.statusCode = 200;
    response.setHeader('charset', 'utf-8');
    response.setHeader('content-Type', 'text/plain');
    response.end(respuesta);
})
    
    server.listen(PORT, () => {
        console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
    })

