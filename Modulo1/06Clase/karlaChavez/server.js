const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

 const products = require('./products.js');
   

app.set('view engine','ejs');
app.use(express.static('views'))

app.get('/',(req,res)=>{
    const data = {
        title: "Mi sitio web",
    }
    res.render('index',data)
})

app.get('/productos',(req,res)=>{
     const productslista =[
        {color:'blanco',productoURL:"imgs/enojado.png"},
        {color:'naranja',productoURL:'imgs/cinico.png'},
        {color:'negro',productoURL:'imgs/sonriendo.png'},
        {color:'gris',productoURL:'imgs/deslumbrando.png'},
        {color:'blanco y negro',productoURL:'imgs/feliz.png'},
    ] 
    const data = {
        title: "Listado Cute",
        products,
    }
     res.render('productos',data)
})

app.use((req,res)=>{
     res.status(404).send("Pagina not Found") 
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
