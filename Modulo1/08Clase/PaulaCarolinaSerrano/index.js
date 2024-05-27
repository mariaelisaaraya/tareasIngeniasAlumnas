const express = require('express');
const productos = require('./resources/productos'); 
const app = express();
const PORT = 3000;

//Función que retorna todos los productos ordenados por el nombre
function getAllProductos() {
    productos.sort((a, b) =>{
        if (a.nombre < b.nombre) return -1
        if (a.nombre > b.nombre) return 1
        return 0
    })
    return productos ? productos :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

//Ruta para acceder a todos los productos
app.get('/productos', (req, res) => { 
    res.json(getAllProductos())
})

//Ruta para encontrar un producto mediante su ID
app.get('/productos/:id', (req, res) => {
    let codigo = parseInt(req.params.id);
    if (typeof codigo === 'number') {
        const result = productos.find(producto => producto.id === codigo)
        result != undefined ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese ID.' })
    }
})

//Ruta para encontrar el/los productos por su nombre
//Si dejaba la ruta como pedía el desafío no me funcionaba porque me tomaba todos los parámetros ingresados en el navegador como si fueran ID y me arrojaba un TypeError. Por eso le agregué "/nombre"
app.get('/productos/nombre/:nombre', (req, res) => { 
    const name = req.params.nombre.trim().toLowerCase()
    const result = productos.filter(producto => producto.nombre.toLowerCase().includes(name))
    result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron productos con ese nombre.' })

})

//Manejo de rutas inexistentes
app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})

app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));