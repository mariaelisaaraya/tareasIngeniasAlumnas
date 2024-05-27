const express = require('express'); 
const cursos = require('./resources/cursos');
const app = express();
const dotenv = require('dotenv');
        dotenv.config();
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => { 
    res.send('Bienvenido al servidor web con rutas dinamicas! :D'); 
}    
);

app.get('/cursos', (req, res) => {
    res.json(cursos);
});

app.get('/curso/codigo/:id', (req, res) => {
    let id = parseInt(req.params.id);
    //verificamos q el id sea de tipo number
    if (typeof id === 'number') {
        //inicializamos la variable en vacio
        let result = []
        //recorremos el array de cursos
        for (let i of cursos) {
            //si el id del curso es igual al id pasado por parametro, lo agregamos al array result
            if (i.id === id) {
              result.push(i)
              break
            }
        }
        //si el array result tiene elementos, los mostramos, sino mostramos un mensaje de error
        result.length > 0 ?  res.json(result) : res.status(404).json({ id: 'Error', descripcion: 'Curso no encontrado. :C' })
    }
});

app.get('/curso/nombre/:nombre', (req, res) => {
    // convierte el nombre a minusculas y elimina los espacios en blanco
    let nombre = req.params.nombre.trim().toLowerCase()
    //verifica que el nombre no sea vacio
    if (nombre !== ''){
        let result = []
        //busca el nombre del curso en el array de cursos
        result = cursos.filter((curso) => 
            //INCLUDES se utiliza para la busqueda parcial ej: si solo puso 2 letras
            curso.nombre.toLowerCase().includes(nombre)
        )
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'Curso no encontrado. :C' })
    }
});

//Me devuelve todos los cursos que tiene dicha categoria

app.get('/cursos/categoria/:categoria', (req, res) => {
    let categoria = req.params.categoria.trim().toLowerCase();
    if (categoria !== ""){
        let resultado = [];
        //busca el nombre del curso en el array de cursos
        resultado = cursos.filter((curso) => 
            //INCLUDES se utiliza para la busqueda parcial ej: si solo puso 2 letras
            curso.categoria.toLowerCase().includes(categoria)
        )

        resultado.length > 0 ?
            res.json(resultado) :
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias'}]);
    }

});


app.get('*', (req, res) => {    
    res.status(404).send('Ruta no encontrada');
});


app.listen(PORT, () => {    
    console.log(`Server started on http://localhost:${PORT}`);  
});