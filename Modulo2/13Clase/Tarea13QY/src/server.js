// Variables de entorno
require('dotenv').config();

// Defino mi servidor
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const { connectToMongoDB, disconnectToMongoDB } = require('./mongodb');

// Middleware para configuración del encabezado Content-Type
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Mensaje de bienvenida cuando entro
app.get("/", (req, res) => {
    res.status(200).send("😻🍉 Bienvenid@ a mi API de frutas 😻🍉");
});
 

// Ruta para obtener todas las frutas
app.get("/frutas", async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db("productos");
        const frutas = await db.collection("frutas").find().toArray();
        await disconnectToMongoDB();
        res.status(200).json(frutas);
    } catch (error) {
        console.error("Error al obtener frutas:", error);
        res.status(500).send("❗❗ Ups... Error al obtener frutas ❗❗");
    }
});

// Ruta para buscar frutas por nombre
app.get("/frutas/nombre/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const client = await connectToMongoDB();
        const db = client.db("productos");
        // Buscar frutas que tengan nombre
        const frutas = await db.collection("frutas").find({ nombre: { $regex: nombre, $options: 'i' } }).toArray();
        await disconnectToMongoDB();
        res.status(200).json(frutas);
    } catch (error) {
        console.error("Error al buscar frutas por nombre:", error);
        res.status(500).send("❗❗ Ups... Error al buscar frutas por nombre ❗❗");
    }
});

// Ruta para buscar frutas por importe
app.get("/frutas/importe/:importe", async (req, res) => {
    try {
        const importe = parseFloat(req.params.importe);
        const client = await connectToMongoDB();
        const db = client.db("productos");
        // Buscar frutas con precio igual o superior al proporcionado
        const frutas = await db.collection("frutas").find({ importe: { $gte: importe } }).toArray();
        await disconnectToMongoDB();
        res.status(200).json(frutas);
    } catch (error) {
        console.error("Error al buscar frutas por importe:", error);
        res.status(500).send("❗❗ Ups... Error al buscar frutas por su importe ❗❗");
    }
});

// Conectar a MongoDB y luego iniciar el servidor
connectToMongoDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`API de frutas escuchando en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error("Error al conectar a MongoDB:", err);
    });