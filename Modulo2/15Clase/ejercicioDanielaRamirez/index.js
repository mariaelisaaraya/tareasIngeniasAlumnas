// Server
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const PORT = process.env.PORT || 3008
const secretKey = process.env.SECRET_KEY;
const productos = require('./src/productos.js')
const usuarios = require('./src/usuarios.js')

app.use(express.json());

// Endpoint to login
app.post('/login', (req, res) => {
    // Get username and password from request body
    const username = req.body.username
    const password = req.body.password

    console.log(`Datos recibidos: Usuario: ${username}, Password: ${password}`)

    // Find user in the DB
    const userToValidate = usuarios.find((usr)=> usr.username === username)

    if (userToValidate) {
        if (username === userToValidate.username && password === userToValidate.password) {
            const token = jwt.sign({ username: username }, secretKey, { expiresIn: '2h' })
            res.status(200).json({ token: token })
        } else {
            res.status(401).json({ error: 'Credenciales inválidas.' });
        }
    } else {
        res.status(401).json({ error: 'Credenciales inválidas.' });
    }
})

// Middleware to verify token
function verifyToken(req, res, next) {
    // Get token from headers
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

// Protected route
app.get('/rutaProtegida', verifyToken, (req, res, next) => {
    const username = req.decoded.username || null
    res.status(200).json(productos)
    next()
})

// Start server
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`) )