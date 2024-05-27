const express = require('express');
const productos = require('./productos'); 
const app = express();
const PORT = 3000;

function getAllProductos() {
    return productos ? productos :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

app.get('/productos', (req, res) => { 
    const ordenamientoPorNombre = productos.sort((a,b) => {
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1
        }
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1
        }
        return 0
    }) 
    
    res.json(ordenamientoPorNombre)
})

app.get('/productos/:id', (req, res) => {
    const producto = productos.find(producto => producto.id == req.params.id)
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontró el producto con el id ${req.params.id}.` }) 
})
 
app.get('/productos/nombre/:nombre', (req, res) => { 
    const producto = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(req.params.nombre.toLowerCase()))
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontraron productos con el nombre ${req.params.nombre}.` })
})



app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));