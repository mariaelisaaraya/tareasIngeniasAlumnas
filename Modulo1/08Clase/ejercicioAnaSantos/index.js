const express = require('express');
const productos = require('./products'); 
const app = express();
const PORT = 3000;

function getAllProductos() {
    return productos ? productos :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

//Endpoint que retorna en formato JSON todos los productos
app.get('/productos', (req, res) => { 
    const sortedProductosByName = productos.sort((a, b) => {
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
    const producto = productos.find(producto => 
        producto.id == req.params.id)
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontraro el producto con el id ${req.params.id}.` })
})
 
//Endpoint que retorna en formato JSON los productos segun un nombre o pseudonombre
app.get('/productos/nombre/:nombre', (req, res) => { 
    //filter es para devolver un array con todos los elementos que cumplan la condición
    const producto = productos.filter(producto => 
        producto.nombre.trim().toLowerCase()
            .includes(req.params.nombre.trim().toLowerCase()))
    res.json(producto ? producto : 
        { id: 'Error', descripcion: `No se encontraron productos con el nombre ${req.params.nombre}.` })
})


app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));