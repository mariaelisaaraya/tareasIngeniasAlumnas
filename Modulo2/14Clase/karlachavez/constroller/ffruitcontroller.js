const {connectDB,disconecctDB} = require('../database/mongodb');


async function  getAll(){
    const client = await connectDB();
    if (!client) {
         return{'msj':"Error al conectarse a MongoDB" ,'status':404};
    }
    const db = client.db("frutas");
    const frutas = await db.collection('frutas')
                        .find()
                        .toArray();
    disconecctDB();
    if( frutas.length == 0)
        return{'msj':'No se encontraron resultado','status':404};
    else{
        return{'msj':frutas,'status':200};
    }
}  

async function  fruitById(id){
    const client = await connectDB();
    const db = client.db("frutas");
    if (!client) {
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};
   }
    const fruta = await db.collection('frutas')
            .find({id:parseInt(id)})
    disconecctDB();
    if( !fruta)
        return{'msj':'No se encontraron resultado','status':404};
    else{
        return{'msj':fruta,'status':200};
    }
}  

async function  getFruitsbyname(nombre){
    
    const client = await connectDB();
    const db = client.db("frutas");
    if (!client) {
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};
   }
    const fruta = await db.collection('frutas')
            .find({nombre:{$regex:nombre}})
                        .toArray();
    disconecctDB();
    if( fruta.length == 0)
        return{'msj':'No se encontraron resultado','status':404};
    else{
        return{'msj':fruta,'status':200};
    }
}  

async function  getFruitsbyPrice(price){
    
    const client = await connectDB();
    const db = client.db("frutas");
    if (!client) {
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};
   }
    const fruta = await db.collection('frutas')
            .find({importe:{$gte:price}})
                        .toArray();
    disconecctDB();
    if( fruta.length == 0)
        return{'msj':'No se encontraron resultado','status':404};
    else{
        return{'msj':fruta,'status':200};
    }
} 

async function  createNewFruit(fruit){
    
    const client = await connectDB();
    const db = client.db("frutas");
    if (!client) {
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};
   }

   if (fruit === undefined){
    return{'msj':"Error formato de fruta" ,'status':400}
   }

    await db.collection('frutas')
            .insertOne(fruit).then(()=>{
                console.log("nueva fruta");
                resultado={'msj':fruit,"status":200}
            }).catch((error)=>{
                resultado={'msj':"no se creo","status":500}
            }).finally(()=> disconecctDB())
    
 
} 

async function  updateFruit(id,fruit){
    let resultado;
    const client = await connectDB();
    if (!client) 
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};

   if (fruit === undefined){
    return{'msj':"Error formato de fruta" ,'status':400}
   }

    const collection =client.db("frutas").collection('frutas')
            .updateOne({id:parseInt(id)},{$set:fruit})
            .then(()=>{
                console.log(" fruta MODIFICADA");
                resultado={'msj':fruit,"status":200}
            }).catch((error)=>{
                console.log(error)
                resultado={'msj':"error al modificar","status":500}
            }).finally(()=> disconecctDB())
    
    return resultado
} 

async function  deleteFruit(id){
    
    const client = await connectDB();
    if (!client) 
        return{'msj':"Error al conectarse a MongoDB" ,'status':404};

    const collection =client.db("frutas").collection('frutas')
            .deleteOne({id:parseInt(id)})
            .then((result)=>{
                if (result.deletedCount===0){
                    resultado={'msj':"furta no encotrada","status":404}
                }else{
                console.log(" fruta eliminada");
                resultado={'msj':fruit,"status":200}
            }
            }).catch((error)=>{
                console.log(error)
                resultado={'msj':"error al eliminar","status":500}
            }).finally(()=> disconecctDB())
    
 
} 

module.exports ={getAll,
    fruitById,
    getFruitsbyname,
    getFruitsbyPrice,
    createNewFruit,
    updateFruit,
    deleteFruit
}
