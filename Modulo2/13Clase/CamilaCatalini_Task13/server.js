const express = require('express');
const {getFruitForName, getFruitsByPrice} = require('./controller/fruitController')
const {connectToMongoDB, disconnectFromMongoDB} = require('./database/mongodb');
const app = express();
const PORT = process.env.PORT || 3008;

// Middleware.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API de frutas')
});


// Retornar todas aquellas frutas que contengan el nombre o parte del nombre informado como parámetro.
app.get('/frutas/nombre/:nombre', async (req, res) => {
    const fruitName = req.params.nombre.trim().toLowerCase();
    const result = await  getFruitForName(fruitName);
    res.json(result);
})

// Retornar todas aquellas frutas que tengan el mismo precio informado o un precio superior a este.
app.get('/frutas/precio/:precio', async (req, res) => {
    const price = parseInt(req.params.precio);
    const result = await getFruitsByPrice(price)
    res.json(result);
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});