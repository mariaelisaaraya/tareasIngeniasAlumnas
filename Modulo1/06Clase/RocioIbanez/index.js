// Importar el módulo Express y path
const express = require('express');
const path = require('path');
const frutas = require('./productos');

// Crear una instancia de la aplicación Express
const app = express()

// Definir el puerto en el que se ejecutará el servidor,
// utilizando una variable de entorno si está disponible, o el puerto 3001 por defecto
const PORT = process.env.PORT || 3001;

// Configuración del motor de plantillas EJS para renderizar vistas
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos desde la carpeta 'views'
app.use(express.static('views'))

// Definir una ruta para el endpoint '/' 
app.get('/', (req, res) => {
    const data = {
        title: "Home",
        message: "Bienvenidas a mi sitio generado con motor de plantillas",
    }
    // Renderizar la vista
    res.render('components/home', data)
})

// Definir una ruta para el endpoint '/productos
app.get('/productos', (req, res) => {
    const data = {
        title: "Productos",
        message: "Lista de Productos",
        productos: frutas
    }
    // Renderizar la vista
    res.render('components/productos', data)
})

// Middleware para manejar solicitudes a rutas no definidas,
// devuelve un mensaje de error 404
app.use((req, res) => {
    // Renderizar la vista
    res.status(404).render('components/error', { message: "Lo siento, la página que buscas no está disponible" });
})

// Escuchar en el puerto especificado y mostrar un mensaje en la consola
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto localhost:${PORT}`);
});