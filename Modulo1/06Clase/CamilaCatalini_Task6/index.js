const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const productos = require('./productos.js');

app.set('view engine', 'ejs');
app.use(express.static('views'));

// La ruta raíz
app.get('/', (req, res) => {
  const data = {
    title: 'SUPER FRUTAS',
    message: 'Las mejores frutas al mejor precio'
  }
  res.render('index', data);
  });

app.get('/productos', (req, res) => {
  const data = {
    title: 'OFERTAZAS!!!',
    productos
}
  res.render('productos', data)
});

app.get('/producto/:id', (req, res) => {
  let data;
  productos.forEach(producto => {
    if ( producto.nombre == req.params['id']){
      data = {producto}
    }
  });
  if(data){
    res.render('producto', data)
  }else{
    res.status(404).send('Lo siento, no tenemos esa fruta.');
  }
  
});


app.use((req, res) => { 
  res.status(404).send('Lo siento, la página que buscas no existe.');
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });