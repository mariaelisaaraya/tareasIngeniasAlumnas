const express = require('express');
const fs = require('fs').promises; // Usando la versión de promesas de fs
const path = require('path');
const app = express();
const PORT = 3001;

// Ruta del archivo JSON
const jsonFilePath = path.join(__dirname, 'resources', 'frutas.json');

// Función para leer un archivo JSON
async function readJson(jsonFilePath) {
    try {
        // Verificar si el archivo JSON existe
        await fs.access(jsonFilePath);
        // Leer el archivo JSON
        const data = await fs.readFile(jsonFilePath, 'utf8');
        if (!data) {
            console.error('El archivo JSON está vacío.');
            return null;
        }
        return data;
    } catch (err) {
        console.error('Error al leer el archivo JSON:', err);
        return null;
    }
}

// Función que retorna todos los productos ordenados por el nombre
function getAllProductos(productos) {
    productos.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });
    return productos;
}

// Función para convertir JSON a array de objetos JS
function jsonToArray(archivoJson) {
    let jsonArray = [];
    try {
        jsonArray = JSON.parse(archivoJson);
        return jsonArray;
    } catch (parseErr) {
        console.log('Error al parsear el archivo JSON:', parseErr);
        return [];
    }
}

// Inicialización de la variable frutasArray
let frutasArray = [];

// Leer el archivo JSON y parsear su contenido
//El uso de paréntesis al final de una función async es una técnica para autoejecutar la función inmediatamente después de su definición. Esto se conoce como una Immediately Invoked Function Expression (IIFE). Permite usar await en el nivel superior del script sin necesidad de envolver todo el código del archivo en una función async.
(async () => {
    const frutas = await readJson(jsonFilePath);
    if (frutas) {
        frutasArray = jsonToArray(frutas);
    }
})();

/*-------------RUTAS--------------*/

// Ruta para acceder a todos los objetos
app.get('/productos', (req, res) => {
    res.json(getAllProductos(frutasArray));
});

// Ruta para encontrar un producto mediante su ID
app.get('/productos/:id', (req, res) => {
    let codigo = parseInt(req.params.id);
    if (typeof codigo === 'number') {
        const result = frutasArray.find(fruta => fruta.id === codigo);
        result != undefined ?
            res.json(result) :
            res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese ID.' });
    }
});

// Ruta para encontrar el/los productos por su nombre
app.get('/productos/nombre/:nombre', (req, res) => {
    const name = req.params.nombre.trim().toLowerCase();
    const result = frutasArray.filter(fruta => fruta.nombre.toLowerCase().includes(name));
    result.length > 0 ?
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese nombre.' });
});

// Manejo de rutas inexistentes
app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ");
});

app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));
