const { error } = require('console');
const http = require ('http'); // modulo hhtp
const port = 3050; //puerto

//Creacion del servidor
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Cabecera de la respuesta http
    res.setHeader('charset', 'utf-8') //estandar de caracteres 
    let statusCode = 200; // Variable de estado

    if (req.url === '/') {
        res.end(JSON.stringify('<h1> Bienvenidas :) a nuestra web </h1>'));
    } else if (req.url === '/cursos') {
        res.end(JSON.stringify('<h1> Bienvenidas!! <br>  Esta es nuestra seccion  de cursos  </h1>'));
    } else if (req.url === '/contacto'){
        res.end(JSON.stringify('<h1>En esta seccion podras ponerte en contacto </h1>'));
    } else{
        statusCode = 404 // Estado en error
        res.end (JSON.stringify('<h2> 404 <br> No se encuentra la ruta o recurso solicitado </h2>'))
    }
    res.statusCode = statusCode; //
})

server.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto : ${port}/`); //servidor ejecutandose puerto
  }); 
