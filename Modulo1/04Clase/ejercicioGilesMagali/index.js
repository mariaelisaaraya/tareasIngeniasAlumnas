///Creación del servidor///

const http = require('http');
const PORT = 3008;

const server = http.createServer((request, response) => {
    const { url } = request;

    switch (url) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('<h1>Bienvenidas a nuestra web</h1>');
            break;
        case '/cursos':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end('<h1>Bienvenidas a nuestra sección cursos</h1>');
            break;
        case '/contacto':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end('<h1>Bienvenidas a nuestra sección de contacto</h1>');
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Ruta no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
});