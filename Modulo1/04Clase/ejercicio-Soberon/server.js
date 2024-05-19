const http = require("http");
const PORT = 3008;

const server = http.createServer((request, response) => {
  let respuesta = "";
  let statusCode = 200;
  
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    respuesta = "<h1>Bienvenid@s a nuestra web!</h1>";
  } else if (request.url === "/cursos") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    respuesta = "<h1>Bienvenid@s a nuestra sección de cursos</h1>";
  } else if (request.url === "/contacto") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    respuesta = "<h1>Bienvenid@s a nuestra sección de contacto!</h1>";
  } else {
    statusCode = 404;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    respuesta = "Error 404: No se encuentra la ruta o recurso solicitado.";
  }
  response.statusCode = statusCode;
  response.end(respuesta);
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
