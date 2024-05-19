const http = require('http');
const PORT = 3008;

const server = http.createServer((req, res) => {
   
    // Rutas
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bienvenid@s a nuestra web!</h1>');
    } else if (req.url === '/cursos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bienvenid@s a nuestros cursos!</h1>');
    } else if (req.url === '/contacto') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bienvenid@s a nuestra informacion de contacto!</h1>');
    } else {
         // ruta no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
        res.end('Ruta no encontrada');
    }
});


server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}/`);
});