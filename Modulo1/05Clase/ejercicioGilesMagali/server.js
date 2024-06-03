///Creación del servidor///
const express = require('express');
const app = express();
const PORT = 3050;
    
        app.get('/', (req, res) => {
            res.send('Bienvenidas a nuestra web');
        });

        app.get('/cursos', (req, res) => {
            res.send('Cursos');
        });
        app.get('/contacto', (req, res) => {
            res.send('Contacto');
        });
        ////////Middleware///////////
        app.use((req, res)=>{
            res.status(404).json({ error: '404', description: 'No se encuentra la ruta o recurso solicitado.' });
        });

        // Inicia el servidor //
        app.listen(PORT , () => {
            console.log("Listening in http://localhost:"+PORT);
        });
        
