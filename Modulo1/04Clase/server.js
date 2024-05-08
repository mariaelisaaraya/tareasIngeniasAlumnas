const http = require ('http'); // modulo hhtp
const port = 3008; //puerto

//Creacion del servidor
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Cabecera de la respuesta http            

    if (req.url === '/') {
        res.end('<h1>Bienvenidas a nuestra web</h1>');
    } else if (req.url === '/cursos') {
        res.end('<h1>Bienvenidas a nuestra seccion cursos</h1>');
    } else if (req.url === '/contacto'){
        res.end('<h1>En esta seccion podras ponerte en contacto </p>');
    } else {
        res.end('<h1>Pagina no encontrada intentelo de nuevo.</p>');
    }   
})

server.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto : ${port}/`); //servidor ejecutandose puerto
  }); 
