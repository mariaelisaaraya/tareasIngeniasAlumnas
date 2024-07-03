const express = require('express');
const app= express();
require('dotenv').config();
const PORT = process.env.PORT || 3008;
const secretKey = process.env.SECRET_KEY;

const jwt = require('jsonwebtoken');
const usersToValue = require('./src/usuarios');
const productos= require("./src/productos")

//middleware para manejar json
app.use(express.json())

//primera etapa : autenticacion
app.post('/login',(req,res)=>{
    const username= req.body.username;
    const password = req.body.password;
    console.log(`datos recibidos: usuario ${username} , Password:${password}`)
    const usuarioValido = usersToValue.find(usuario=>usuario.username===username)
    console.log(usuarioValido)
     if ((usuarioValido!=undefined)&&(username === usuarioValido.username && password === usuarioValido.password)){
        const token = jwt.sign({username:username},secretKey,{expiresIn:'1h'})
        res.json({token:token});
    }else
        res.status(401).json({error:"credenciales invalidas"}); 
}) 
//segunda etapa: autorizacion
function verifyToken(req,res,next){
    //middleware de verificacion de token
    const token = req.headers['authorization'] || null
    if (token) {
        jwt.verify(token,secretKey,(err,decoded)=>{
            err ? res.status(401).json({error:"token invalido"})
                : req.decoded= decoded;
            next();
        })
    }else 
        res.status(401).json({error:"token no proporcionado"})
}


app.get("/productosprotegidos",verifyToken,(req,res)=>{
    res.json(productos)
})


app.get('*', (req, res)=>{
    console.log("error")
    res.status(404).send('La ruta no existe')
})
app.listen(PORT,()=>console.log("escuchando port",PORT))