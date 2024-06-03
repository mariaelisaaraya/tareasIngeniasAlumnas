// Importamos el modulo http
const http = require('http');
// Definimos el puerto
const PORT = 3008;
// Creamos un servidor
const server = http.createServer((req, res) => {


    // Definimos la respuesta del servidor
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/'){
        res.end("Bienvenidas a la pagina web");
    } else if (req.url === '/cursos'){
        res.end("Bienvenidas a la seccion de cursos");
    } else {
        res.end("Error 404: Pagina no encontrada");
    }
});
// Escuchamos el puerto 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


