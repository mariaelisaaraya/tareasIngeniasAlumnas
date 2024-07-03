const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

const {getAll,
    fruitById,
    getFruitsbyname,
    getFruitsbyPrice,
    createNewFruit,
    updateFruit,
    deleteFruit} = require('./constroller/ffruitcontroller')

app.use((req,res,next)=>{
    res.header("Context-Type","application/json;charset=utf-8");
    next();
})

app.get("/",(req,res)=>{
    res.json({title:"ruta principal"})
})
app.get("/frutas",async(req,res)=>{
    resultado=await getAll();
    res.status(resultado.status).json(resultado.msj)
})

app.get("/frutas/:id",async(req,res)=>{
    resultado=await fruitById(req.params.id)
    res.status(resultado.status).json(resultado.msj)
})
app.get("/frutas/nombre/:nombre",async(req,res)=>{
    resultado=await getFruitsbyname(req.params.nombre)
    res.status(resultado.status).json(resultado.msj)
})
app.get("/frutas/importe/:precio",async(req,res)=>{
    resultado=await getFruitsbyPrice(req.params.precio)
    res.status(resultado.status).json(resultado.msj)
})

app.post("frutas/",async(req,res)=>{
    resultado=await createNewFruit(req.body)
    res.status(resultado.status).json(resultado.msj)
})

app.put("frutas/:id",async(req,res)=>{
    resultado=await updateFruit(req.params.id,req.body)
    res.status(resultado.status).json(resultado.msj)
})

app.delete("frutas/:id",async(req,res)=>{
    resultado=await deleteFruit(req.params.id);
    res.status(resultado.status).json(resultado.msj)
})

app.listen(PORT,()=>console.log("escuchando port",PORT))