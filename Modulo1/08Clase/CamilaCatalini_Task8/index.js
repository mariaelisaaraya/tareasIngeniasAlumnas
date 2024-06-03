const express = require('express');
const productos = require('./productos'); 
const app = express();
const PORT = 3000;


function getAllProductos() {
    return productos ? productos :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

//TRAE TODOS LOS PRODUCTOS
//http://localhost:3000/productos/
app.get('/productos', (req, res) => {
      res.json(getAllProductos())
})

//TRAE LOS PRODUCTOS ORDENADOS POR NOMBRE ASCENDENTE Y DESCENDENTE
//http://localhost:3000/productos/ordenados/?orden=asc
//http://localhost:3000/productos/ordenados/?orden=des
app.get('/productos/ordenados/', (req,res)=>{
  let orden = req.query.orden;
  let productosO = getAllProductos();
    //console.log(name)
    if(orden==='asc'){
      let productosOrdenAsc = productosO.sort((a,b)=>{
        if(a.nombre < b.nombre){
          return -1;
        }else{
          return 1;
        }
      });
      //console.log(productosOrdenAsc)
      res.json(productosOrdenAsc);
    }else if(orden==='des'){
      let productosOrdenDes = productosO.sort((a,b)=>{
        if(a.nombre > b.nombre){
          return -1;
        }else{
          return 1;
        }
      });
      //console.log(productosOrdenDes)
      res.json(productosOrdenDes);
    }
})

//TRAE UN SOLO PRODUCTO SEGUN EL ID
//http://localhost:3000/producto/codigo/1
app.get('/producto/codigo/:id', (req, res) => {
  let codigoProducto = parseInt(req.params['id']);
  if (typeof codigoProducto === 'number') {
      let result = [];
      for (let p of productos) {
          if (p.id === codigoProducto) {
            result.push(p);
            break
          }
      }
      result.length > 0 ? 
      res.json(result) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' });
  }

})
 
//TRAE PRODUCTOS SEGUN EL NOMBRE (Busqueda parcial)
//http://localhost:3000/producto/nombre/tablet
app.get('/producto/nombre/:nombre', (req, res) => { 
  let param = req.params['nombre'].trim().toLowerCase();
  //console.log(param)
  if (param !== '') {
      let result = [];
      
      productos.forEach(p => {
        if(p.nombre.toLowerCase().includes(param)){
          result.push(p);
        }  
      });

      result.length > 0 ? 
      res.json(result) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
  }
})

//TRAE PRODUCTOS SEGUN LA CATEGORIA
//http://localhost:3000/productos/categoria/relojes
app.get('/productos/categoria/:categoria', (req, res) => { 
  let param = req.params['categoria'].trim().toLowerCase();
  //console.log(param)
  if (param !== '') {
      let result = [];
      
      productos.forEach(p => {
        if(p.categoria.toLowerCase().includes(param)){
          result.push(p);
        }  
      });

      result.length > 0 ? 
      res.json({'categoria':param,'productos':result}) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
  }
})

app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));