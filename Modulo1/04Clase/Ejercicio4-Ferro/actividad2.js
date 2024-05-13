const http = require('http');

const PORT = 3008;

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hola a todas, bienvenidas a nuestra web</h1>');
    } else if (req.url === '/cursos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hola a todas, estos son nuestros cursos:</h1>');
    } else if (req.url === '/contacto') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>No te quedes con dudas, contactanos por los siguientes medios:</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('<h2>. 404 - Ruta inexistente</h2>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto:${PORT}`);
});



