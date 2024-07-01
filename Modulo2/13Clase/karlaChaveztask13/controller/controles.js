const { connectToDB,disconnectToDB } = require ('../src/mongodb');
 
async function getFruitbyname(name){

    const client = await connectToDB();
    const db = client.db('frutas');
    const frutas = await db.collection('frutas')
                    .find({nombre:{$regex:name}})
                    .toArray();
    await disconnectToDB();
    if( frutas.length == 0){
        return{'error':'No se encontraron resultado'};
    }else{
        return frutas;
    }
     
}

async function getFruitsbyPrice(price){

    const client = await connectToDB();
    const db = client.db('frutas');
    const frutas = await db.collection('frutas')
                    .find({importe:{$gte:price}})
                   .toArray();
     await disconnectToDB();
     if( frutas.length == 0){
        return{'error':'No se encontraron resultado'};
    }else{
       return frutas;
    }
    
   
}

async function getAll(){
    const client = await connectToDB();
    const db = client.db('frutas');
    const frutas = await db.collection('frutas')
                    .find()
                   .toArray();
     await disconnectToDB();
     if( frutas.length == 0){
        return{'error':'No se encontraron resultado'};
    }else{
       return frutas;
    }
}


module.exports = {getAll,getFruitbyname,getFruitsbyPrice}