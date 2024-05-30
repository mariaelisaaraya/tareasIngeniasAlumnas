const http = require("http");
const PORT = 3008;

const server = http.createServer((request, response) => {
  let respuesta = "";
  let statuscode = 200;

  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    respuesta = "<h1>Bienvenidas a nuestra web</h1>";
  } else if (request.url === "/cursos") {
    response.setHeader("Content-Type", "text/html");
    respuesta = "<h1>Bienvenidas a nuestra sección cursos</h1>";
  } else if (request.url === "/contacto") {
    response.setHeader("Content-Type", "text/html");
    respuesta = "<h1>Bienvenidos a nuestra seccion Contacto</h1>";
  } else {
    statuscode = 404;
    response.setHeader("Content-Type", "text/plain");
    respuesta = "Ruta no encontrada. Por favor, verifica la URL ingresada.";
  }

  response.statusCode = statuscode;
  response.end(respuesta);
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: http://localhost:/${PORT}`);
});
