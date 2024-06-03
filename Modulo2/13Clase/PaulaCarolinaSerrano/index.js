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

//ruta que devuelve toda la colección
app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('Frutas');
    const frutas = await db.collection('Frutas').find().toArray();

    await disconnectFromMongoDB();
    res.json(frutas);
})

//ruta que devuelve un documento por su ID
app.get('/frutas/:id', async (req, res) => {
    const frutaID = parseInt(req.params.id) || 0;
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('Frutas');
    const frutas = await db.collection('Frutas').findOne({id: frutaID});
    if(frutas.length == 0){
        res.status(404).send('No se encontró el recurso');
        return;
    }

    await disconnectFromMongoDB();
    res.json(frutas);
})

//devuelve el o los documentos cuyo nombre sea igual o incluya lo especificado en el URL param.
app.get('/frutas/nombre/:nombre', async (req, res) => {
    const frutaNombre = req.params.nombre.trim().toLowerCase();
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('Frutas');
    const frutas = await db.collection('Frutas').find({ nombre: { $regex: new RegExp(frutaNombre, 'i') } }).toArray();
    if(frutas.length == 0){
        res.status(404).send('No se encontró el recurso');
        return;
    }

    await disconnectFromMongoDB();
    res.json(frutas);
})

//devuelve aquellos documentos cuyo precio sea igual o mayor al especificado en el URL param.
app.get('/frutas/precio/:precio', async (req, res) => {
    const frutaPrecio = parseInt(req.params.precio);
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('Frutas');
    const frutas = await db.collection('Frutas').find({importe: {$gte:frutaPrecio}}).toArray();
    if(frutas.length == 0){
        res.status(404).send('No se encontró el recurso');
        return;
    }

    await disconnectFromMongoDB();
    res.json(frutas);
})

//manejo de rutas inexistentes
app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );
  