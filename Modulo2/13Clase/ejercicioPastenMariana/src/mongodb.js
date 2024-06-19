//conexion nodejs con mongodb

// referencia a dependencia dotenv
const dotenv = require('dotenv');
dotenv.config();

//referencia a driver mongodb
const {MongoClient} = require('mongodb');

    //url de cluster, instancia al driver
const url =process.env.MONGODB_URLSTRING || "";
    //client configuration
const client = new MongoClient(url);
    

//model asincrónico
//conexión a base de datos
async function connectToMongoDB(){
    try{
        await client.connect();
            console.log('Conectado a MongoDB');
        return client;
    }
    catch (error){
        console.error('Error al conectar a MongoDB:',error);
        return null;
    }
}
//desconexión a base de datos
async function disconnectFromMongoDB(){
    try{
        await client.close();
            console.log('Desconectado de MongoDB');
    }
    catch (error){
        console.error('Error al desconectar de MongoDB:',error);
    }
}
//exportación de módulos para trabajarlas luego desde la aplicación principal de Node.js
module.exports = {connectToMongoDB,disconnectFromMongoDB};


