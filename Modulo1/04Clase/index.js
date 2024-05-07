//CLASE 1 DE BACKEND (CLASE 4)
const http = require('http');
const PORT = 3008;

const server = http.createServer((request, response) =>{
    let respuesta = ""
    let statusCode = 200
    if (request.url === "/") {
        respuesta = "<h1>Bienvenid@s! Gracias por visitar este proyecto</h1>"
    } else if (request.url === "/cursos") {
        respuesta = "<h1>Bienvenid@s a la seccion de cursos. Ven a conocer nuestras ofertas</h1>"
    } else if (request.url === "/contacto") {
        respuesta = "<h1>Bienvenid@s a la seccion de contacto. Dejanos tu mensaje</h1>"
    } else {
        statusCode = 404
        respuesta = "<h1>Pagina no encontrada</h1>"
    }
    
    response.statusCode = statusCode
    response.setHeader('charset', 'UTF-8')
    response.setHeader('Content-Type', 'text/html')
    response.end(respuesta)
}) 

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})