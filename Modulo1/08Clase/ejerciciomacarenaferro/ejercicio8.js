const express = require('express');
const productos = require('./productos');
const app = express();
const PORT = 3000;

// ordena los nombres de los productos de forma descendente
function getproductos_sorted_byname() {
    const result = productos.sort((a,b) => {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return -1;
        }
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return 1;
        }
        return 0
    })
    return result ? result :
        {id:'error', description: 'No se encontraron coincidencias'}
}

// La ruta raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenid@s!'); 
    });

// productos ordenados de manera descendente
app.get('/productos', (req, res) => {
    res.json(getproductos_sorted_byname())
})
// devuelve el producto con el mismo id
app.get('/productos/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findproducts = productos.find(producto => producto.id === id);
    if (findproducts.length > 0) {
        res.json(findproducts)
    } else {
        res.status(404).json({error: 'No se encontraron coincidencias' })
    }
})

//devuelve todos los productos que contienen un nombre determinado

app.get('/productos/nombre/:nombre', (req,res) => {
    const nombre = req.params.nombre.toLowerCase()
    const filteredname = productos.filter(producto => producto.nombre.toLowerCase().includes(nombre))
    if (filteredname.length > 0) {
        res.json(filteredname)
    } else {
        res.status(404).json({error: 'No se encontraron coincidencias'})
    }
})

app.get('*', (req, res) => {
    res.status(403).send("Lo sentimos, la página que buscas no existe")
})
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto http://localhost:${PORT}/`));