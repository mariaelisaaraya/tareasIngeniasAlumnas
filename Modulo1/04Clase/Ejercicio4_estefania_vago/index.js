//Se importa modulo http
const http = require ('http');
//Se define puerto
const PORT = 3008;
//Crear servidor
const server = http.createServer((request, response)=>{
    let statusCode=200;
    let respuesta ="";
    
    if (request.url === '/'){
        response.setHeader('charset','utf-8');
        response.setHeader('Content-type','text/html');
        respuesta = "<h1>Bienvenidas a la web</h1>";
        
    }else if (request.url === '/cursos'){
        response.setHeader('charset','utf-8');
        response.setHeader('Content-type','text/html');
        respuesta = "<h1>Bienvenidas! Acá verás nuestros cursos</h1>";

    }else if (request.url === '/contacto'){
        response.setHeader('charset','utf-8');
        response.setHeader('Content-type','text/html');
        respuesta = "<h1>Contactanos por estos medios</h1>";
    }else{
        statusCode = 404;
        response.setHeader('charset','utf-8');
        response.setHeader('Content-type','text/plain');
        respuesta = "Error 404";
    }
    response.statusCode=statusCode;
    response.end(respuesta);

})
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})