const {connectToMongoDB, disconnectFromMongoDB} = require('./../database/mongodb');

async function getFruitForName (name){
    const db = await connectToMongoDB();
    const data = db.db('Productos');
    const result = await data.collection('frutas').find({ nombre: { $regex: new RegExp(name, 'i') } }).toArray();
    await disconnectFromMongoDB();
    if(result.length == 0){
        return {'error': 'No se encontraron resultados para la busqueda'};
    }else{
        return result     
    }
}

async function getFruitsByPrice(price){
    const db = await connectToMongoDB();
    const data = db.db('Productos');
    const result = await data.collection('frutas').find({importe: {$gte:price}}).toArray();
    await disconnectFromMongoDB();
    if(result.length == 0){
        return {'error': 'No se encontraron resultados para la busqueda'};
    }else{
       return result;
    }

    
}

module.exports = {getFruitForName, getFruitsByPrice};