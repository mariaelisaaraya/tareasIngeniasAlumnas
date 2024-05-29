//Actividades de clase 4, creacion de un servidor
// Definiremos una constante PORT, con el valor 3008. En el servidor web, debemos 
// tener definidas a las siguientes rutas:
//  “/”
// “/cursos”
// “/contacto”

const http= require ('http');
const PORT = 3008;

const server = http.createServer((request,response) => {
    let resp= "";
    let statusC = 200;
    
    if (request.url==='/'){ //respuesta para la ruta raiz
        resp="Bienvenidas a nuestra web.";
    }else if (request.url==='/cursos'){ //respuesta para la ruta /cursos
        resp="Bienvenidas a nuestra sección cursos.";
    }else if (request.url==='/contacto'){ //respuesta para la ruta /contacto
        resp="Bienvenidas a nuestra sección contacto.";
    }else{ //respuesta para rutas inexistentes
        statusC = 404;
        resp="El servidor no pudo encontrar el recurso solicitado.";
    };
    response.statusCode = statusC;
    response.setHeader('charset','utf-8');
    
    if (statusC === 404){
        response.setHeader('Content-Type','text/plain');
        response.end(resp);
    }else{
        response.setHeader('Content-Type','text/html'); //response.writeHead() Este método permite escribir el encabezado de la respuesta HTTP
        response.end('<html><body><h1>'+resp+'</h1></body></html>'); //response.end() Este método permite finalizar y enviar la respuesta al cliente.
    };
    
})
//método permite al servidor escuchar las solicitudes en el puerto especificado//método permite al servidor escuchar las solicitudes en el puerto especificado//
server.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})

