const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
const products = require('./src/productos.js');
const users = require('./src/usuarios.js');


//MIDDLEWARE 
app.use(express.json());

//Endpoint para Login de usuarios
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(`Received login request for user ${username} with password ${password}`);

    //Validacion de usuario
    const userToValidate = users.find(u => u.username === username)
    if (userToValidate) {
        if (username === userToValidate.username && password === userToValidate.password) {
            const token = JWT.sign({ username: username }, SECRET_KEY, { expiresIn: '2h' });
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization'] || null;
    if (token) {
        JWT.verify(token, SECRET_KEY, (err, decoded) => {
            err ? res.status(401).json({ message: 'Invalid token' }) 
                : req.decoded = decoded;
            next();
        });
    } else {
        res.status(401).json({ message: 'Token required' });
    }
}

//Endpoint para obtener productos
app.get('/rutaProtegida', verifyToken, (req, res, next) => {
    const username = req.decoded.username || null;
    res.status(200).json(products);
    next();
});
  
//Inicia el servidor
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`) );