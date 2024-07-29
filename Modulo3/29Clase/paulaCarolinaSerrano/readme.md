Estuve probando la conexión y si bien me pude conectar tuve un par de errores:

- Cuando quiero cerrar la conexión después de abrirla, osea llamar a las funciones authenticate() y closeConnection() me sale el error: "Unable to connect to the database:  Error: pool is draining and cannot accept work" o sea, solo me funciona si llamo unicamente a authenticate(). Probé hacerlo con las promesas y pasa lo mismo.

- cuando intento usar las variables de entorno a través de la importación del archivo config.js me sale el error: "Error: Cannot find module '../config'" Creo que a Jan tambien le había salido ese error y por eso usó las variables declaradas directamente en el archivo que tiene las funciones.

- Respondida en la clase **29**
