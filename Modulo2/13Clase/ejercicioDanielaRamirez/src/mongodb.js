// Environment
const dotenv = require('dotenv');
dotenv.config()

// MongoDB driver
const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL_STRING || ""
const client = new MongoClient(URL)

// Async function to connect to MongoDB
async function connectToMongoDB(){
    try {
        await client.connect()
        console.log('Conectado a MongoDB')
        return client
    } catch (error) {
        console.log('Error al conectarse a MongoDB: ' + error)
        return
    }
}

// Async function to disconnect from MongoDB
const disconnectToMongoDB = async () => {
    try {
        await client.close()
        console.log('Desconectado de MongoDB')
    } catch (error) {
        console.log('Error al desconectarse de MongoDB: ' + error)
    }
}

module.exports = { connectToMongoDB, disconnectToMongoDB }