const express = require('express');
const productos = require('./productos'); 
const app = express();
const PORT = 3000;

// Función que retorna todos los productos ordenados por nombre de forma ascendente
function getProductsByName() {
    const result = productos.sort((a, b)=> {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1;
        }
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1;
        }
        return 0;
    });
    return result ? result :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

// Función que retorna un solo producto por su id
function getProductById(id) {
    const result = productos.find(producto => producto.id === id);
    return result ? result :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

// Función que busca productos por nombre o parte de él. Si encuentra más de un resultado
// los retorna en un array
function getProductByName(name) {
    const result = productos.filter(producto => producto.nombre.toLowerCase().includes(name.toLowerCase()));
    if (result.length > 0) {
        return result;
    } else {
        return { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
    }        
}

// La ruta raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenid@s a mi página de cursos de programación!'); 
    });

// Ruta para obtener todos los productos ordenados por nombre 
app.get('/productos', (req, res) => { 
    res.json(getProductsByName())
})

// Ruta para obtener un producto por id
app.get('/productos/codigo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(getProductById(id));
})

// Ruta para obtener un producto por nombre o parte del nombre
app.get('/productos/nombre/:nombre', (req, res) => { 
    const nombre = req.params.nombre.trim();
    res.json(getProductByName(nombre));
})

app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));