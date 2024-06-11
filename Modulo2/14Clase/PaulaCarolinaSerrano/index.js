const express = require("express");
const { connectToMongoDB, disconnectFromMongoDB } = require("./src/mongodb");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const PORT = process.env.PORT || 3008;

//middleware
app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8"); //establece para todas las respuestas un encabezado HTTP llamado Content-Type, especifica el formato de la respuesta (json) y la codificación de caracteres (utf8)
  next(); //para pasar el control al siguiente middleware o manejador de rutas
});

//ruta raiz
app.get("/", (req, res) => {
  res.status(200).end("Bienvenid@ a la API de frutas");
});

//ruta que devuelve toda la colección
app.get("/frutas", async (req, res) => {
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const frutas = await db.collection("Frutas").find().toArray();
  await disconnectFromMongoDB();
  res.status(200).json(frutas);
});

//ruta que devuelve un documento por su ID
app.get("/frutas/:id", async (req, res) => {
  const frutaID = parseInt(req.params.id) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const frutas = await db.collection("Frutas").findOne({ id: frutaID });
  //cuando usas findOne la verificación siguiente debe ser negando la constante frutas.
  if (!frutas) {
    res.status(404).send("No se encontró el recurso");
    return;
  }
  await disconnectFromMongoDB();
  res.status(200).json(frutas);
});

//devuelve el o los documentos cuyo nombre sea igual o incluya lo especificado en el URL param.
app.get("/frutas/nombre/:nombre", async (req, res) => {
  const frutaNombre = req.params.nombre.trim().toLowerCase();
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const frutas = await db
    .collection("Frutas")
    .find({ nombre: { $regex: new RegExp(frutaNombre, "i") } })
    .toArray();
      //cuando usas find la verificación siguiente debe ser chequeando la longitud del array.
  if (frutas.length === 0) {
    res.status(404).send("No se encontró el recurso");
    return;
  }
  await disconnectFromMongoDB();
  res.status(200).json(frutas);
});

//devuelve aquellos documentos cuyo precio sea igual o mayor al especificado en el URL param.
app.get("/frutas/precio/:precio", async (req, res) => {
  const frutaPrecio = req.params.precio;
  let parsedPrecio;
  try {
    parsedPrecio = parseInt(frutaPrecio);
    if (isNaN(parsedPrecio)) {
      throw new Error("Precio no válido");
    }
  } catch (err) {
    res.status(400).send("Precio no válido");
    return;
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const frutas = await db
    .collection("Frutas")
    .find({ importe: { $gte: parsedPrecio } })
    .toArray();
  if (frutas.length===0) {
    res.status(404).send("No se encontró el recurso");
    return;
  }
  await disconnectFromMongoDB();
  res.status(200).json(frutas);
});

// POST: crea un recurso nuevo
app.post("/frutas", async (req, res) => {
  const nuevaFruta = req.body;
  console.log(req.body);
  if (nuevaFruta === undefined) {
    res.status(400).send("Error en el formato de los datos de la fruta");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const collection = db.collection("Frutas");
  collection
    .insertOne(nuevaFruta)
    .then(() => {
      console.log("Nueva fruta creada");
      res.status(201).send(nuevaFruta);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al crear");
    })
    .finally(async () => {
      await disconnectFromMongoDB();
    });
});

// PUT: modifica un recurso existente ubicándolo mediante su id
app.put("/frutas/:id", async (req, res) => {
  const id = req.params.id;
  //Agrego verificación. Si le paso letras por ejemplo me dice ID no válido:
  let parsedId;
  try {
    parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      throw new Error("ID no válido");
    }
  } catch (err) {
    res.status(400).send("ID no válido");
    return;
  }
  const nuevosDatos = req.body;
  console.log(req.body);
  if (!nuevosDatos) {
    res.status(400).send("Error en el formato de los datos de la fruta");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const collection = db.collection("Frutas");
  collection
    .updateOne({ id: parsedId }, { $set: nuevosDatos })
    // primero busca y si lo encuetra actualiza
    // collection.findOneAndUpdate({id: parseInt(id)}, {$set: nuevosDatos})
    .then((result) => {
        //verifica que se haya modificado algun recurso:
      if (result.modifiedCount === 0) {
        res.status(404).send("Fruta no encontrada");
        return;
      } else {
        console.log("Nueva fruta actualizada");
        res.status(200).send(nuevosDatos);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al actualizar");
    })
    .finally(async () => {
      await disconnectFromMongoDB();
    });
});

// DELETE: elimina un recurso ubicándolo mediante su id
app.delete("/frutas/:id", async (req, res) => {
  const id = req.params.id;
  //Esta verificacion no funciona. Si no le paso el ID me tira un error 404 en formato html que no se de donde sale:
  if(!req.params.id){
    return res.status(400).send('El formato de datos es erróneo o inválido')
  }
  //esta verificación sí funciona. Si le paso letras por ejemplo me dice ID no válido:
  let parsedId;
  try {
    parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      throw new Error("ID no válido");
    }
  } catch (err) {
    res.status(400).send("ID no válido");
    return;
  }

  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const collection = db.collection("Frutas");
  collection
    .deleteOne({ id: parsedId })
    // borrar de a muchos
    // collection.deleteMany({id: parseInt(id)})

    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).send("Fruta no encontrada");
        return;
      } else {
        console.log("Fruta eliminada");
        res.status(200).send("Fruta eliminada");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al eliminar");
    })
    .finally(async () => {
      await disconnectFromMongoDB();
    });
});

//PATCH
app.patch("/frutas/:id", async (req, res) => {
  const id = req.params.id;
  //Agrego verificación. Si le paso letras por ejemplo me dice ID no válido:
  let parsedId;
  try {
    parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      throw new Error("ID no válido");
    }
  } catch (err) {
    res.status(400).send("ID no válido");
    return;
  }
  const nuevosDatos = req.body;
  console.log(req.body);
  if (!nuevosDatos) {
    res.status(400).send("Error en el formato de los datos de la fruta");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("Frutas");
  const collection = db.collection("Frutas");
  collection
    .updateOne({ id: parsedId }, { $set: nuevosDatos })
    .then((result) => {
      if (result.modifiedCount === 0) {
        res.status(404).send("Fruta no encontrada");
        return;
      } else {
        console.log("Nueva fruta actualizada");
        res.status(200).send(nuevosDatos);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al actualizar");
    })
    .finally(async () => {
      await disconnectFromMongoDB();
    });
});

//manejo de rutas inexistentes
app.get("*", (req, res) => {
  res.status(404).json({
    error: "404",
    message: "No se encuentra la ruta solicitada",
  });
});

//Inicia el servidor
app.listen(PORT, () =>
  console.log(`API de frutas escuchando en http://localhost:${PORT}`)
);
