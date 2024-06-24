//Se importan los módulos necesarios, como Express.
const express = require('express');
const app = express();
//Se establece la variable PORT para indicar en qué puerto se ejecutará el servidor.
const PORT = 3002;
//Conectamos con la lista a lo pedido por el cliente
const objetosDeportivos = require('./recursos/objetos');

//Defino la ruta principal
app.get('/', (request, response) => {
    response.send("Bienvenida a la tienda deportiva");
});

//Defino la ruta del array
app.get('/objetos', (request, response) => {
    response.json(objetosDeportivos);
});

//Defino la ruta dinamica '/objetos/codigo/:id'
//parámetro esperado
app.get('/objetos/codigo/:id', (request, response) => {
    let codigo = parseInt(request.params.id)
    //Hacemos una consulta de que si el código es de tipo number haga una lógica.
    if (typeof codigo === 'number') {
        let result = []
        for (let objeto of objetosDeportivos) {
            if (objeto.id === codigo) {
                result.push(objeto)
                break
            }
        }
        //result = objetos.filter(o => o.id === codigo)
        result.length > 0 ?
            response.json(result) :
            response.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias' });
    }
});

//Defino la ruta '/objetos/nombre/:nombre'
//parámetro esperado
app.get('/objetos/nombre/:nombre', (request, response) => {
    //encuentra el parámetro definido en la URL que peticiona Datos
    //uso del método  .trim() seguido del método .tolowercase()
    let parametro = request.params.nombre.trim().toLowerCase()
    console.log("params", parametro)
    if (parametro !== '') {
        let result = []
        let i = 0;
        while (i < objetosDeportivos.length) {
            let objeto = objetosDeportivos[i];
            if (objeto.nombre.toLowerCase().includes(parametro)) {
                result.push(objeto);
            }
            i++;
        }

        result.length > 0 ?
            response.json(result) :
            response.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias' });
    }
});

//Ruta predeterminada para manejar rutas inexistentes
app.get('*', (request, response) => {
    response.status(404).send('Lo siento, la pagina que buscas no existe!');
});

//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});