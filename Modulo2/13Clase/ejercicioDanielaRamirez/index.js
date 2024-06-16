const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongodb.js')

//Middleware
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Home route
app.get('/', (req, res) => {
    res.status(200).end("<h1>Esta es mi página de frutas.</h1><p>¡Bienvenida/o!</p>");
});

// Endpoint to get fruit by name
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

// Endpoint to get fruit by price
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

// Endpoint page not found
app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
// Start server
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );