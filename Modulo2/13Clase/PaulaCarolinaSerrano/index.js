const express = require('express');
const {connectToMongoDB, disconnectFromMongoDB} = require('./src/mongodb');
const app = express();
const PORT = process.env.PORT || 3008;

//middleware
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

//ruta raiz
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API de frutas')
});

app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('frutas');
    const frutas = await db.collection('frutas').find().toArray();

    await disconnectFromMongoDB();
    res.json(frutas);
})

app.get('/frutas/:id', async (req, res) => {
    const frutaID = parseInt(req.params.id) || 0;
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('frutas');
    const frutas = await db.collection('frutas').findOne({id: frutaID});
    if(!frutas){
        res.status(404).send('No se encontró el recurso');
        return;
    }

    await disconnectFromMongoDB();
    res.json(frutas);
})

