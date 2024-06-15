const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDb')


//MIDDLEWARE 
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

//Endpoint HOME
app.get('/', (req, res) => {
    res.status(200).end("Bienvenido a mi API de frutas!" );
}); 

//Endpoint GET frutas por nombre
app.get('/frutas/nombre/:nombre', async (req, res) => {
    const name = req.params.nombre
    const client = await connectToMongoDB();

    if (!client) {
        res.status(500).send('Error to connect with MongoDB')
        return;
    }

    const regex = new RegExp(name.toLowerCase(), 'i'); // i: case insensitive
    console.log(regex)

    const db = client.db('Producto')
    const frutas = await db.collection('frutas').find({ nombre: regex }).toArray()
    await disconnectToMongoDB()

    frutas.length == 0 ? res.status(404).send("Can't find the fruit with name "+ name): res.status(200).json(frutas)
})

//Endpoint GET frutas por precio
app.get('/frutas/precio/:precio', async (req, res) => {
    const price = parseInt(req.params.precio)
    const client = await connectToMongoDB();

    if (!client) {
        res.status(500).send('Error to connect with MongoDB')
        return;
    }

    const db = client.db('Producto')
    const frutas = await db.collection('frutas').find({ importe: {$gte: price} }).toArray()
    await disconnectToMongoDB()

    frutas.length == 0 ? res.status(404).send("Can't find the fruit with price"+ price): res.status(200).json(frutas)
})

//No se encuentra la ruta solicitada
app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`fruits API listening on http://localhost:${PORT}`) );