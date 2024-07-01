const dotenv = require('dotenv');
    dotenv.config();

const URI = process.env.MONGODB_URLSTRING || "";

const { MongoClient } =  require('mongodb');
const client = new MongoClient(URI);

async function connectToDB(){
    try{
        await client.connect();
        console.log("Conectado a mongo");
        return client
    }catch (error){
        console.error("Error al conectar mongo",error);
        return null;
    }

   
}

async function disconnectToDB(){
    try{
        await client.close();
        console.log("Desonectado de mongo");
    }catch (error){
        console.error("Error al desconectar mongo",error);
    }

}
 
module.exports = {connectToDB,disconnectToDB};