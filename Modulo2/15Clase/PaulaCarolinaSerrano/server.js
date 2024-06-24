const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3008;
const secretKey = process.env.SECRET_KEY;
// const userToValidate = {username: 'Cameron', password: 'H@lt-And_Catch?F1re'}
const usuarios = require('./src/usuarios');
const productos = require('./src/productos');

// MIDLEWARES UTILIZADOS EN LA APLICACIÓN BACKEND
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function verifyToken(req, res, next) { 
    // Verificar el token en las solicitudes protegidas
    const token = req.headers['authorization'] || null
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
          err ? res.status(401).json({ error: 'Token inválido.' })
              : req.decoded = decoded
          next()
        })
    } else {
        res.status(401).json({ error: 'Token no proporcionado.' })
    }
}

app.post('/login', (req, res) => {
    // recibir los datos de un usuario válido para generar su JWT
    const username = req.body.username
    const password = req.body.password    
    console.log(`Datos recibidos: Usuario: ${username}, Password: ${password}`)
    const result = usuarios.find(usuario => usuario.username===username)
    if (result != undefined){
        if (username === result.username && password === result.password) {
            const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' })
            res.status(200).json({ token: token })
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    }else{
        res.status(400).json({ error: 'No se encontró el usuario' });
    }
    
})

//Si no pasa la validación, nunca veremos el contenido que entrega esta ruta de forma predeterminada
app.get('/rutaprotegida', verifyToken, (req, res, next) => {
 // Datos segurizados con un JWT válido
    console.log("hola rutaprotegida")
    const username = req.decoded.username || null
    res.status(200).json(productos)
    next()
})

app.get('*', (req, res)=>{
    res.status(404).send('La ruta no existe')
})
// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`) );