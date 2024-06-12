const express = require('express');
const {getFruitForName, 
       getFruitsByPrice,
       addNewFruit,
       updateFruitField,
       getAllFruits,
       deleteFruit,
       updateFruit} = require('./controller/fruitController');
const app = express();
const PORT = process.env.PORT || 3008;

// para evitar TypeError: Cannot read property '_id' of undefined
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// Middleware.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API de frutas')
});

// Se obtienen todas las frutas.
app.get('/frutas', async (req, res) => {
    const result = await getAllFruits();
    res.json(result);
})

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

// POST
app.post('/frutas',async (req, res) => {
    const newFruit = req.body;
    console.log(newFruit)
    
    if (!newFruit) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }

    const result = await addNewFruit(newFruit);
    res.status(result.status).send(result.msj);
})

// PUT
app.put('/frutas/:id',async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    
    const result = await updateFruit(id, newData);
    res.status(result.status).send(result.msj);
})

// DELETE
app.delete('/frutas/:id',async (req, res) => {
    const id = req.params.id

    const result = await deleteFruit(id);
    res.status(result.status).send(result.msj);
})

// PATCH
app.patch('/frutas/:id',async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const result = await updateFruitField(id,data);
    res.status(result.status).send(result.msj);
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});