const express = require ('express');
const {connectToMongoDB,disconnectFromMongoDB} = require('./src/mongodb');
const app= express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use((req,res,next)=>{
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Ruta ppal 
app.get('/',(req,res)=>{
    res.status(200).end('¡Bienvenido a la API de frutas!');
});

// Acceso a bb.dd y a una colección mongodb
//definicion de rutas y establecimiento de conexion al clúster
//base de datos, coleccion. retorno de datos obtenidos

app.get('/frutas', async (req,res) =>{
    const client = await connectToMongoDB();
    if (!client){
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }
    const db = client.db('productos');
    const frutas = await db.collection('frutas').find().toArray();

    await disconnectFromMongoDB();
    res.status(200).json(frutas);
});

app.get('/frutas/:id', async (req,res)=> {
    const frutaId = parseInt(req.params.id)|| 0; //el parametro recibido convertido a entero
    if (frutaId === undefined){
        res.status(400).send('Error no se ingresaron parametros.');
        return;
    }
    const client = await connectToMongoDB ();
    const db =client.db('productos');
    const fruta =await db.collection('frutas').findOne({id:frutaId});

    await disconnectFromMongoDB();
    res.status(200).json(fruta)
});

// la ruta /frutas/nombre/:nombre , buscar y retornar todas aquellas frutas 
//que contengan el nombre o parte del nombre informado como parámetro

app.get('/frutas/nombre/:nombre', async (req,res)=> {
    const frutaname = req.params.nombre.trim().toLowerCase(); 
    if (frutaname === undefined){
        res.status(400).send('Error no se ingresaron parametros.');
        return;
    }
    const regex = new RegExp(frutaname,'');
    const client = await connectToMongoDB ();
    if (!client){
        res.status(500).send('error al conectarse a MongoDb');
    }
    const db =client.db('productos');
    const frutanom = await db.collection('frutas').find({ nombre: regex}).toArray();
    if ((frutanom.length) == 0){
        res.status(400).send('No se encontraron coincidencias.');
        return;
    }
    await disconnectFromMongoDB();
    res.status(200).json(frutanom);
});

//la ruta /frutas/precio/:precio , buscar y retornar todas aquellas 
//frutas que tengan el mismo precio informado o un precio superior a este

app.get('/frutas/precio/:precio', async (req,res)=> {
    const frutacost = parseInt(req.params.precio) || 0; 
    if (frutacost === undefined){
        res.status(400).send('Error no se ingresaron parametros.');
        return;
    }
    const client = await connectToMongoDB ();
    if (!client){
        res.status(500).send('error al conectarse a MongoDb');
    }
    const db =client.db('productos');
    const frutaprecio = await db.collection('frutas').find({importe:{$gte: frutacost}}).toArray();
    if (frutaprecio.length == 0){
        res.status(400).send('No se encontraron coincidencias.');
        return;
    }
    await disconnectFromMongoDB();
    res.status(200).json(frutaprecio)
});
//respuesta para rutas inexistentes 
app.use((req,res) => {// app.get('*',(req,res) => {})
    res.status(404).send('El servidor no pudo encontrar el recurso solicitado.');
});
//método permite al servidor escuchar las solicitudes en el puerto especificado
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})