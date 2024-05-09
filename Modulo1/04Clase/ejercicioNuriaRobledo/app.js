const http = require('http');
const PORT = 3008;

const server = http.createServer((req, res) => {    

})  

server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}/`);
});