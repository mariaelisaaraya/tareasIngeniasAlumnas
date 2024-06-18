const dotenv = require('dotenv');
      dotenv.config();

const { MongoClient } = require('mongodb');
const URL = process.env.MONGO_URLSTRING || ""
const client = new MongoClient(URL)

async function connectToMongoDB (){
      try {
            await client.connect()
            console.log('Conectando a mongoDB')
            return client
      }     catch (error){
            console.log('Error al conectarse a mongoDB:' + error)
            return null
      }
}

const disconnectToMongoDB = async () => {
      try {
            await client.close()
            console.log('Desconectando de mongoDB')
      }     catch (error) {
            console.log('Error al desconectarse de mongoDB:' + error)
      }
}

module.exports ={ connectToMongoDB, disconnectToMongoDB}
