const http = require("http");
const PORT = 3008;

const server = http.createServer((request, response) => {
    let respuesta = "";
    let statusCode = 200;
    if (request.url === "/") {
        respuesta = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> Home </title>
        </head>
        <body style= " background-color: rgb(146, 116, 218);">
        <h1 style= "color:white; text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Bienvenidos </h1>
        </body>
        </html>`;
    } else if (request.url === "/cursos") {
        respuesta = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> Cursos </title>
        </head>
        <body style= " background-color: rgb(146, 116, 218);">
        <h1 style= "color:white ; text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Accediste al apartado de cursos </h1>
        </body>
        </html>`;
    } else if (request.url === "/contacto") {
        respuesta = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> Contacto </title>
        </head>
        <body style= " background-color: rgb(146, 116, 218);">
        <h1 style= "color: white; text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Para contactarnos, manda un mail a: ..@.. </h1>
        </body>
        </html>`;
    } else {
        statusCode = 404;
        respuesta = "URL no encontrada";
        response.setHeader("Content-type", "text/plane");
    }
    response.statusCode = statusCode;
    response.setHeader("charset", "utf-8");
    response.setHeader("Content-Type", "text/html");
    response.end(respuesta); 
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
});
