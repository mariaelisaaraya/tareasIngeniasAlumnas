// Variables de entorno
const dotenv = require("dotenv");
dotenv.config();

// Iniciar con MongoDB
const { MongoClient } = require("mongodb");
const URL = process.env.MONGO_URL_STRING || "";
console.log("MongoDB URL:", URL); // Agrega esta línea para verificar la URL

const client = new MongoClient(URL);

// Función asíncrona tradicional para conectar con MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Te conectaste a MongoDB 💋");
        return client;
    } catch (error) {
        console.log("Error al conectarse a MongoDB 💋☠️: " + error);
        return null;
    }
}

// Función flecha para desconectar de MongoDB
const disconnectToMongoDB = async () => {
    try {
        await client.close();
        console.log("Desconectado de MongoDB 💖");
    } catch (error) {
        console.log("Error al desconectar de MongoDB 💔: " + error);
    }
};

module.exports = { connectToMongoDB, disconnectToMongoDB };