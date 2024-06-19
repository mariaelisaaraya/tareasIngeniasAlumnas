const express = require ('express');
const app= express();
const PORT = process.env.PORT ?? 3000;
// incluyo funciones declaradas en Mongodb.js
const {connectToMongoDB,disconnectFromMongoDB} = require('./src/mongodb');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // se puede aceptar formato json en el body
app.use(bodyParser.urlencoded({extended:true}));

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
    if (!fruta){
        res.status(400).send('No se encontraron coincidencias.');
        return;
    }
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

// permite dar de alta un recurso POST

app.post('/frutas',async (req,res) => {
    const nuevaFruta = req.body;
    if(nuevaFruta === undefined){
        res.status(400).send('Error en el formato de datos a crear');
    }
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
    }
    
    const collection = await client.db('productos').collection('frutas');
    
    collection
    .insertOne(nuevaFruta)//inserta nueva elemento a la colección
    .then(() => {
        console.log('Se agregó nueva fruta:');
        res.status(201).send(nuevaFruta);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() =>{
        client.close();// async() => {await disconnectToMongoDB}
    });

});



//  permite modificar un recurso existente PUT
app.put('/frutas/:id',async (req,res) => {
    const id = req.params.id; // id del elento a modificar
    
    const nuevosDatos = req.body;//datos a actualizar
    if(!nuevosDatos){
        res.status(400).send('Error en el formato de datos recibidos.');
    }
    
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
    }

    const collection = await client.db('productos').collection('frutas');
    // modificación y actualización de datos
    collection.updateOne({ id: parseInt(id)},{ $set: nuevosDatos })
    .then(() => {
        console.log('Fruta modificada:');
        res.status(200).send(nuevosDatos);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() =>{
        client.close();
    });

});




// El método PATCH, igual que PUT, con la diferencia de que solo podemos
// indicarle una propiedad única en lugar de tener que indicarle 
// la estructura completa del documento.
// Uso del metodo PATH, para modificar el nombre de un producto

app.patch('/frutas/:id',async (req,res) => {
    const id = req.params.id; // id del elento a modificar
    
    const nuevosDatos = req.body;//datos a actualizar
    if(!nuevosDatos){
        res.status(400).send('Error en el formato de datos recibidos.');
    }
    
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
    }

    const collection = client.db('productos').collection('frutas');
    // modificación y actualización de datos
    collection.updateOne({ id: parseInt(id)},{ $set: nuevosDatos })
    .then(() => {
        console.log('Fruta modificada:');
        res.status(200).send(nuevosDatos);
    })
    .catch(error => {
        res.status(500).json({descripcion:'Error al modificar la fruta'});
    })
    .finally(() =>{
        client.close();
    });

});




//  permite eliminar un recurso DELETE
app.delete('/frutas/:id',async (req,res) => {
    const id = req.params.id; // id del elento a eliminar
    
    if(!req.params.id){
        res.status(400).send('Error en el formato de datos recibidos.');
    }
    const client = await connectToMongoDB();
    if(!client){
        res.status(500).send('Error al conectarse a MongoDB');
    }
    
    client.connect()
    .then(() => {
        const collection = client.db('productos').collection('frutas');
        return collection.deleteOne({ id: parseInt(id)});
    })
    .then((resultado) =>{
        if(resultado.deletedCount === 0){
            res.status(404).send('No se encontró fruta con el ID proporcionado:',id);
        }else {
            console.log('Fruta eliminada.');
            res.status(204).send('Fruta eliminada.');
        }
    })
    .catch(error => {
        res.status(500).send('Error al eliminar ruta');
    })
    .finally(() =>{
        client.close();
    });

});






//respuesta para rutas inexistentes 
app.use((req,res) => {// app.get('*',(req,res) => {})
    res.status(404).send('El servidor no pudo encontrar el recurso solicitado.');
});
//método permite al servidor escuchar las solicitudes en el puerto especificado
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: http://localhost:${PORT}`);
})