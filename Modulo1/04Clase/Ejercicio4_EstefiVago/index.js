const http = require('http');
const PORT=3001;

const server = http.createServer((request, response) =>{
    let respuesta = ""
    let statusCode = 200
    if (request.url === "/") {
        respuesta = "<h1>Bienvenid@s!</h1>"
    } else if (request.url === "/cursos") {
        respuesta = "<h1>Bienvenid@s a la seccion de cursos.</h1>"
    } else if (request.url === "/contacto") {
        respuesta = "<h1>Contactanos por estos medios</h1>"
    } else {
        statusCode = 404
        respuesta = "<h1>Pagina no encontrada</h1>"
    }
    
    response.statusCode = statusCode;
    response.setHeader('charset', 'UTF-8');
    response.setHeader('Content-Type', 'text/html');
    response.end(respuesta);
});
    server.listen(PORT, () => {
       
        console.log(`Servidor escuchando en http://localhost:${PORT}`)
    });


