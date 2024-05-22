const express = require('express');
//const productos = require('./resources/frutas'); 
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3008;

/*    LECTURA DEL JSON     */
const jsonToRead = path.join(__dirname, 'resources', 'frutas.json'); //Actua como un require para path
let jsonToWrite = [];

//Función para leer y escribir el archivo JSON
function readAndWriteJsonFile(filePath) {
    try {
        fs.readFile(filePath.trim(), 'utf8', (error, data) => {
            if (error) {
                throw new Error(`Error al leer el archivo JSON: ${error.message}`);
            }
            jsonToWrite = JSON.parse(data);
        });

    } catch (error) {
        error.message = `Error al leer el archivo JSON: ${error.message}`;
        res.status(500).send(error.message);
    }
}

readAndWriteJsonFile(jsonToRead);

/*    ENDPONTS     */
app.get('/', (req, res) => {
    res.send('Tarea de la clase 9');
})

//Endpoint que retorna en formato JSON todos los productos
app.get('/productos', (req, res) => { 
    const sortedProductosByName = jsonToWrite.sort((a, b) => {
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1
        }
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1
        }
        return 0
    })
    res.json(sortedProductosByName)
})

//Endpoint que retorna en formato JSON el producto con el id solicitado
app.get('/productos/id/:id', (req, res) => {
    //find es para devolver el primer elemento que cumpla la condición
    const producto = jsonToWrite.find(producto => 
        producto.id == req.params.id)
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontraro el producto con el id ${req.params.id}.` })
})
 
//Endpoint que retorna en formato JSON los productos segun un nombre o pseudonombre
app.get('/productos/nombre/:nombre', (req, res) => { 
    //filter es para devolver un array con todos los elementos que cumplan la condición
    const producto = jsonToWrite.filter(producto => 
        producto.nombre.trim().toLowerCase()
            .includes(req.params.nombre.trim().toLowerCase()))
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontraron productos con el nombre ${req.params.nombre}.` })
})


app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));