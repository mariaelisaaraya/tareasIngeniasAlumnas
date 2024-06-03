const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Función que retorna todos los productos ordenados por el nombre
function getAllProductos(productos) {
    productos.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });
    return productos;
}

// Ruta del archivo JSON
const jsonFilePath = path.join(__dirname,'resources', 'frutas.json');

// Variable para almacenar el array de objetos JS
let jsonArray = [];

// Leer el archivo JSON y convertir su contenido a un array de objetos JS
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }
  try {
    jsonArray = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error al parsear el archivo JSON:', parseErr);
  }
});

/*-------------RUTAS--------------*/
// Ruta raiz
app.get('/', (req, res) => {
  res.send('Hola, Mundo!');
});

// Ruta para acceder a todos los objetos ordenados por nombre
app.get('/productos', (req, res) => {
    res.json(getAllProductos(jsonArray));
});

// Ruta para encontrar un producto mediante su ID
app.get('/productos/:id', (req, res) => {
    let codigo = parseInt(req.params.id);
    if (typeof codigo === 'number') {
        const result = jsonArray.find(fruta => fruta.id === codigo);
        result != undefined ?
            res.json(result) :
            res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese ID.' });
    }
});

// Ruta para encontrar el/los productos por su nombre
app.get('/productos/nombre/:nombre', (req, res) => {
    const name = req.params.nombre.trim().toLowerCase();
    const result = jsonArray.filter(fruta => fruta.nombre.toLowerCase().includes(name));
    result.length > 0 ?
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese nombre.' });
});

// Manejo de rutas inexistentes
app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ");
});

/*-------------LEVANTAR EL SERVIDOR--------------*/
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));

