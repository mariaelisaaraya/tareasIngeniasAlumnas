const dotenv = require('dotenv');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();  
const { leerFrutas, encontrarFruta, guardarFrutas } = require('./src/frutas.manager');
const PORT = process.env.PORT || 3008;
let DB = [];

// Middleware
dotenv.config();
app.use(bodyParser.json());

app.use((req, res, next) => {
    DB = leerFrutas();
    next();
})


// Web server
app.get('/', (req, res) => {
    res.send(DB);
});

//Endpoint GET para obtener una fruta por su id
app.get('/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    const fruta = encontrarFruta(id);
    
    res.status(200).send(fruta);
});

//Endpoint POST para guardar una fruta
app.post('/', (req, res) => {
    const nueva = req.body;
    if (nueva.id) {
        res.status(400).send({error: `Error en el indice`, description: `No se puede crear un producto con un id ya existente`});
    }
    const lastId = DB[DB.length - 1].id;
    const nuevaId = lastId + 1;
    nueva.id = nuevaId;
    DB.push(nueva);
    guardarFrutas(DB);

    console.log(nueva)
    res.status(201).send(`Fruta guardada con ID: ${nuevaId}`);
});

//Endpoint PUT para modificar una fruta
app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const frutaNueva = req.body;
    const frutaVieja = DB.find(fruta => fruta.id === id);
    if (frutaNueva.id) {
        res.status(400).send({error: `Error en el indice`, description: `No se puede modificar el id de un producto ya existente`});
    }
    if (frutaVieja) {
        frutaNueva.id = id;
        console.log(frutaNueva);
        DB[id-1] = frutaNueva;

        guardarFrutas(DB);
        res.status(200).send(`Fruta modificada con el id ${id}`);
    } else {
        res.status(404).send({error: `Error en el indice`, description:`No se pudo encontrar un producto con el id ${id}`});
    }
});

//Endpoint DELETE para borrar una fruta
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruta = DB.find(fruta => fruta.id === id);
    if (fruta) {
        DB = DB.filter(fruta => fruta.id !== id);
        guardarFrutas(DB);
        res.status(200).send(`Fruta con id ${id} eliminada`);
    } else {
        res.status(404).send({error: `Error en el indice`, description:`No se pudo encontrar un producto con el id ${id}`});
    }
});



app.get('*', (req, res) => {
    res.status(404).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));