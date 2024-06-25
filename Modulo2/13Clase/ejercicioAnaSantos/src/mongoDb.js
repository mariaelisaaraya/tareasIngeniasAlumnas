const dotenv = require('dotenv');
dotenv.config()
const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL_STRING|| ""
const client = new MongoClient(URL)


async function connectToMongoDB(){
    try {
        await client.connect()
        console.log('Connecting to mongoDB...')
        return client
    } catch (error) {
        console.log('Error to connect with mongoBB: ' + error)
        return
    }
}

const disconnectToMongoDB = async () => {
    try {
        await client.close()
        console.log('Disconnecting to mongoDB...')
    } catch (error) {
        console.log('Error to disconnect with mongoDB: ' + error)
    }
}

module.exports = { connectToMongoDB, disconnectToMongoDB}