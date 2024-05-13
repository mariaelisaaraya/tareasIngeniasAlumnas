const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const courses = require('./courses.js');

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola, mundo. Hola, Node.js!'); 
});

// Se obtiene lista de todos los cursos
app.get('/cursos', (req, res) => {
  res.json(courses); 
});

// Ruta --> “/cursos/codigo/:id”
app.get('/cursos/codigo/:id', (req, res) => {
  let courseCode = parseInt(req.params['id']);
  
  if (typeof courseCode === 'number') {
      let result = [];
      for (let course of courses) {
          if (course.id === courseCode) {
            result.push(course);
            break
          }
      }
      result.length > 0 ? 
      res.json(result) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' });
  }
});

// Ruta --> “/cursos/nombre/:nombre”
app.get('/cursos/nombre/:nombre', (req, res) => {
  let param = req.params['nombre'].trim().toLowerCase();
  console.log(param)
  if (param !== '') {
      let result = [];
      
      courses.forEach(course => {
        if(course.nombre.toLowerCase().includes(param)){
          result.push(course);
        }  
      });

      result.length > 0 ? 
      res.json(result) :
      res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
  }
});

app.use((req, res) => { 
  res.status(404).send('Lo siento, la página que buscas no existe.');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});