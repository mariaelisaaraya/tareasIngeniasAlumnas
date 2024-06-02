//creacion de un servidor
const http = require('http');
const PORT = 3008;

const server = http.createServer((request, response) => {
    let = respuesta = " ";
    let statusCode = 200;

    if(request.url === '/') {
        respuesta = "<h1>Bienvenidos! Navega en nuestra web.</h1>";
    } else if (request.url === '/cursos') {
        respuesta = "<h1>Bienvenido a nuestros cursos!</h1>";
    } else if (request.url === '/contacto') {
        respuesta = "<Quieres contactarnos?, tienes estos medios por donde comunicarte: .>"
    } else {
        statusCode = 404;
        respuesta = "<h1>Pagina no existente</h1>";
    }
    response.statusCode = statusCode;
    response.setHeader('charset', 'utf-8');
    response.setHeader('Content-Type', 'text/plain');
    response.end(respuesta);
})

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
})