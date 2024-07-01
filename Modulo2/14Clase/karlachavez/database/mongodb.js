const URI = process.env.MONGODB_URLSTRING || "" ;

const {MongoClient} = require('mongodb');
const client  =  new MongoClient(URI);

async function connectDB(){
    try{
        await client.connect();
        console.log("Conectado a mongo");
        return client;
    }catch(error){
        console.log("Error al conectar mongo", error);
        return null;
    }
}

async function disconecctDB(){
    try{
        await client.close();
        console.log("Desconectado de mongo");
    }catch (error){
        console.log("Error al desconectar",error);
    }
}

module.exports={connectDB,disconecctDB};
