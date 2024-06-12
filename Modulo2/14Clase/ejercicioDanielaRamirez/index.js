// Server 
const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;

const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongodb.js')

// To avoid TypeError: Cannot read property '_id' of undefined
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Home route
app.get('/', (req, res) => {
    res.status(200).end("<h1>Esta es mi página de frutas.</h1><p>¡Bienvenida/o!</p>");
});

// Endpoint to GET all fruits
app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();
    if(!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('Productos')
    const frutas = await db.collection('Frutas').find().toArray()
    await disconnectToMongoDB()
    res.status(200).json(frutas);
});

// Endpoint to GET fruits by name
app.get('/frutas/nombre/:nombre', async (req, res) => {
    const nombreFruta = req.params.nombre

    // Connect MongoDB
    const client = await connectToMongoDB();

    // Check if MongoDB is connected
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    // Use regular expression to search for fruit name
    const regex = new RegExp(nombreFruta.toLowerCase(), 'i');
    // console.log(regex)

    // Put the database name in the db variable
    const db = client.db('Productos')

    // Find the fruit by name in the collection
    const frutas = await db.collection('Frutas').find({ nombre: regex }).toArray()

    // Disconnect from MongoDB
    await disconnectToMongoDB()

    // If the fruit is not found, return 404 + message
    frutas.length == 0 ? res.status(404).send('No se encontró la fruta con el nombre '+ nombreFruta): res.json(frutas)
})

// Endpoint to GET fruits by price
app.get('/frutas/precio/:precio', async (req, res) => {
    const precioFruta = parseInt(req.params.precio)

    // Connect to MongoDB
    const client = await connectToMongoDB();

    // Check if MongoDB is connected
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    // Put the database name in the db variable
    const db = client.db('Productos') 

    // Find the fruit by price in the collection
    const frutas = await db.collection('Frutas').find({ importe: { $gte: precioFruta } }).toArray()

    // Disconnect from MongoDB
    await disconnectToMongoDB()

    // If the fruit is not found, return 404 + message
    frutas.length == 0 ? res.status(404).send('No encontre la fruta con el precio '+ precioFruta): res.json(frutas)
})

// Endpoint to POST a new fruit
app.post('/frutas',async (req, res) => {
    const nuevaFruta = req.body
    console.log(req.body)

    // If user doesn't send the fruit in the right format
    if (!nuevaFruta) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }

    // Connect to MongoDB
    const client = await connectToMongoDB();

    // Check if MongoDB is connected
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    const db = client.db('Productos') 
    const collection = await db.collection('Frutas')
    collection.insertOne(nuevaFruta)
    .then(() => {
        console.log('¡Fruta creada exitosamente!')
        res.status(201).send(nuevaFruta)
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al crear la nueva fruta')
    }).finally(async () => { await disconnectToMongoDB() })
})

// Endpoint to PUT some data to a fruit
app.put('/frutas/:id',async (req, res) => {
    const id = req.params.id
    const nuevosDatos = req.body
       console.log(req.body)
    
    // If user doesn't send the data of the fruit in the right format
    if (!nuevosDatos) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    const db = client.db('Productos') 
    const collection = await db.collection('Frutas')
    collection.updateOne({id: parseInt(id)}, {$set: nuevosDatos})

    // Primero busca y si lo encuetra actualiza
    // collection.findOneAndUpdate({id: parseInt(id)}, {$set: nuevosDatos})
    .then(() => {
        console.log('Fruta actualizada exitosamente')
        res.status(200).send(nuevosDatos)
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al actualizar los datos de la fruta')
    }).finally(async () => { await disconnectToMongoDB() })
})

// Endpoint to DELETE a fruit
app.delete('/frutas/:id',async (req, res) => {
    const id = req.params.id

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    const db = client.db('Productos') 
    const collection = await db.collection('Frutas')
    collection.deleteOne({id: parseInt(id)})
    // Borrar de a muchos
    // collection.deleteMany({id: parseInt(id)})
    .then(() => {
        console.log('Fruta eliminada exitosamente')
        res.status(204).send('Fruta eliminada')
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al eliminar la fruta')
    }).finally(async () => { await disconnectToMongoDB() })
})

// Endpoint page not found
app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
// Start server
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );