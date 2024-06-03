// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config();

//importación del driver oficial de MongoDB
const {MongoClient} = require('mongodb');

//instancia del driver
const URL = process.env.MONGODB_URLSTRING || "";
const client = new MongoClient(URL);

//Se debe usar un modelo asincrónico ya que los tiempos de respuesta de un servidor Cloud escapan a nuestro control

//función para conectar a la bbdd
async function connectToMongoDB(){
    try {
        await client.connect();
        console.log("Conectado a MongoDB");
        return client;
    }catch(error){
        console.error('Error al conectar con MongoDB: ', error);
        return null;
    }
}
//función para desconectarse de la bbdd
async function disconnectFromMongoDB(){
    try{
        await client.close();
        console.log("Desconectado de MongoDB");
    }catch(error){
        console.error('Error al desconectar de MongoDB: ', error);
    }
}

module.exports = {connectToMongoDB, disconnectFromMongoDB};
