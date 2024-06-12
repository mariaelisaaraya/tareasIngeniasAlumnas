const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3008
const productos = require('./src/productos.js');

const { verifyToken,
        validateUserAndcreateToken} = require('./controller/tokenController');

app.use(express.json());

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const result = await validateUserAndcreateToken(username,password);
    res.status(result.status).json(result.msj);
})

app.get('/rutaprotegida', verifyToken, (req, res, next) => {
    const username = req.decoded.username || null
    res.status(200).json(productos)
    next()
})

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`) );