const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDb')
const bodyParser = require('body-parser');


//MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

//Endpoint HOME
app.get('/', (req, res) => {
    res.status(200).end("Bienvenido a mi API de frutas!" );
}); 

//Endpoint GET frutas
app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();

    if (!client) {
        res.status(500).send('Error to connect with MongoDB')
        return;
    }

    const db = client.db('Producto')
    const frutas = await db.collection('frutas').find().toArray()
    await disconnectToMongoDB()

    res.status(200).json(frutas)
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
});

//Endpoint POST frutas
app.post('/frutas', async (req, res) => {
    const newFruit = req.body;
    console.log(newFruit)

    //Verificacion de formato
    if (!newFruit) {
        res.status(400).send('Bad request')
    }

    //Conexión a la base de datos
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error to connect with MongoDB')

    }

    const db = client.db('Producto')
    const collection = db.collection('frutas')

    //Insertar fruta
    collection.insertOne(newFruit).then(() => {
        console.log('Fruit created successfully')
        res.status(201).send(newFruit)
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Error to create new fruit')
    }).finally(async () => {
        await disconnectToMongoDB()
    })
});

//Endpoint PUT frutas
app.put('/frutas/:id', async (req, res) => {
    const id = req.params.id
    const updatedFruit = req.body
    console.log(updatedFruit)

    //Verificacion de formato
    if (!updatedFruit) {
        res.status(400).send('Bad request')
    }

    //Conexión a la base de datos
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error to connect with MongoDB')
    }

    const db = client.db('Producto')
    const collection = await db.collection('frutas')

    collection.updateOne({ id: parseInt(id) }, { $set: updatedFruit }).then(() => {
        console.log('Fruit updated successfully')
        res.status(200).send(updatedFruit)
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Error to update fruit')
    }).finally(async () => {
        await disconnectToMongoDB()
    })
});

//Endpoint DELETE frutas
app.delete('/frutas/:id', async (req, res) => {
    const id = req.params.id

    //Conexión a la base de datos
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error to connect with MongoDB')
    }

    const db = client.db('Producto')
    const collection = await db.collection('frutas')

    collection.deleteOne({ id: parseInt(id) }).then(() => {
        console.log('Fruit deleted successfully')
        res.status(204).send('Fruit deleted successfully')
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Error to delete fruit')
    }).finally(async () => {
        await disconnectToMongoDB()
    })
});


//No se encuentra la ruta solicitada
app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`Fruits API listening on http://localhost:${PORT}`) );