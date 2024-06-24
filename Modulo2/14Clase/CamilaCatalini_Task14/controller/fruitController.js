const {connectToMongoDB, disconnectFromMongoDB} = require('../database/mongodb');

async function getAllFruits(){
    const db = await connectToMongoDB();
    const data = db.db('Productos');

    const fruits = await data.collection('frutas').find().toArray()
    await disconnectFromMongoDB()

    //console.log(fruits)
    return fruits;
}

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

// METODO POST (crear)

async function addNewFruit(newFruit){
    const db = await connectToMongoDB();
    const data = db.db('Productos'); 
    const collection = data.collection('frutas');
    let result = {};
    await collection.insertOne(newFruit)
    
    .then( async () => {
        result = {'success': true, 'status': 201, 'msj': 'Fruta agregada exitosamente!'}
    }).catch(err => { 
        console.error(err)
        result = {'success': false, 'status': 500, 'msj': 'Error al crear nueva fruta!'}
    }).finally(async () => { 
        await disconnectFromMongoDB(); 
    })

    console.log(result);
    return result 
}


// METODO PUT (actualizar)
async function updateFruit(id, fruit){
    
    const db = await connectToMongoDB();
    const data = db.db('Productos'); 
    const collection = data.collection('frutas');
    let result = {};
    await collection.updateOne({'id': parseInt(id)}, {$set: fruit})

    .then( async () => {
        result = {'success': true, 'status': 201, 'msj': 'Fruta actualizada exitosamente!'}
    }).catch(err => { 
        console.error(err)
        result = {'success': false, 'status': 500, 'msj': 'Error al actualizar fruta!'}
    }).finally(async () => { 
        await disconnectFromMongoDB(); 
    })
    //console.log(result) 
    return result
}

// METODO DELETE (eliminar)
async function deleteFruit(id){

    const db = await connectToMongoDB();
    if (!db) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    const data = db.db('Productos');
    let result = {}; 
    const collection = data.collection('frutas')
    await collection.deleteOne({id: parseInt(id)})

    .then((r) => {
        if (r.deletedCount === 0) {
            result = {'success': true, 'status': 201, 'msj': 'No se pudo encontrar la fruta con id: '+id}
        } else {
            result = {'success': true, 'status': 201, 'msj': 'Fruta eliminada exitosamente!'}
        }      
    }).catch(err => { 
        console.error(err)
        result = {'success': false, 'status': 500, 'msj': 'Error al eliminar fruta!'}
    }).finally(async () => { await disconnectFromMongoDB() })

    //console.log(result) 
    return result
}

// METODO PATCH (modificacion parcial)
async function updateFruitField(id, fruit){
    
    const db = await connectToMongoDB();
    const data = db.db('Productos'); 
    const collection = data.collection('frutas');
    let result = {};

    console.log(fruit) 
    await collection.findOneAndUpdate({'id': parseInt(id)},  {$set: fruit})

    .then( async () => {
        result = {'success': true, 'status': 201, 'msj': 'Fruta actualizada exitosamente!'}
    }).catch(err => { 
        console.error(err)
        result = {'success': false, 'status': 500, 'msj': 'Error al actualizar fruta!'}
    }).finally(async () => { 
        await disconnectFromMongoDB(); 
    })
    //console.log(result) 
    return result
}


module.exports = {getAllFruits, getFruitForName, getFruitsByPrice, addNewFruit, updateFruit, deleteFruit, updateFruitField};