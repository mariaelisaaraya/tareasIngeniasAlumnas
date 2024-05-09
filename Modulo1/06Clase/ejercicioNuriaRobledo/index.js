const express = require('express'); 
const app = express();
const path  = require('path');  
const PORT = 3008;  


//array de productos
const products = [
    {
        id: 1,
        name: 'Ordenador portatil',
        price: 500
    },
    {
        id: 2,
        name: 'Ordenador sobremesa',
        price: 800
    },
    {
        id: 3,
        name: 'Tablet',
        price: 300
    },
    {
        id: 4,
        name: 'Smartphone',
        price: 400
    }
];

//inicializamos el motor de plantillas
app.set('view engine', 'ejs');
app.use(express.static('views'));


//Ruta para PAG PRINCIPAL
app.get('/', (req, res) => {   
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenidos a mi sitio web con el motor de plantillas EJS',
        productsURL: '/productos'
    };

    res.render('index', data);
});


//Ruta para PAG PRODUCTOS
app.get('/productos', (req, res) => {    
    const data = {
        title: 'Listado de productos de la tienda',
        message: 'Nuestros productos:',
        products: products
    };

    res.render('productos', data);
});



// Rutas inexistentes
app.use((req, res) => {
    const data = {
        title: 'Error 404',
        message: 'La página que estás buscando no fue encontrada.'
    };
    res.status(404).render('error', data);  

});

app.listen(PORT, () => {    
    console.log(`Server started on http://localhost:${PORT}`);  
});