const fs = require('fs');

function leerFrutas() {
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf-8');
    const FRUTAS = JSON.parse(datos);
    return FRUTAS;
}

function encontrarFruta(id) {
    DB = leerFrutas();
    const fruta = DB.filter(f => f.id === id) || 
        [{error: `Error en el indice`, description: `No se puedo encontrar un producto con el valor indicado como indice: ${id}`}];
    return fruta;
}

function guardarFrutas(frutas) {
    const datos = JSON.stringify(frutas);
    fs.writeFileSync(__dirname + process.env.DATABASE_PATH, datos);
};


module.exports = {leerFrutas, encontrarFruta, guardarFrutas}