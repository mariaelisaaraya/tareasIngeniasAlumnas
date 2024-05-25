//Se importa modulo http
const http = require ('http');
//Se define puerto
const PORT = 3008;
//Crear servidor
const server = http.createServer((request, response)=>{
    response.statusCode=200;
    l
    
    if (request.url === '/'){
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end("<h1>Bienvenidas a la web</h1>");
        
    }else if (request.url === '/cursos'){
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end("<h1>Bienvenidas! Acá verás nuestros cursos</h1>");

    }else if (request.url === 'contacto'){
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end("<h1>Contactanos por estos medios</h1>");
    }else{
        statusCode = 404;
        response.setHeader("Content-Type", "text/plain; charset=utf-8");
        response.end("Error 404");
    }
    server.listen(PORT, () => {
        console.log(´Servidor corriendo en el puerto ${PORT}´);
      });
})