const usuarios = require('../src/usuarios.js');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

async function validateUserAndcreateToken(username,password){
    const userToValidate = usuarios.find((usr)=> usr.username === username)
    if (userToValidate) {
        if (username === userToValidate.username && password === userToValidate.password) {
            const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' });
            return {'status':200,'msj':{'Token': token }}
        } else {
            return {'status':401,'msj':'Credenciales inválidas.'}
        }
    } else {
        return {'status':401,'msj':'Credenciales inválidas.'}
    }
}

async function verifyToken(req, res, next) {
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

module.exports = {validateUserAndcreateToken,verifyToken};