- Aprovechemos la base del token que hemos creado hasta aquí, y agreguemos en
esta un array de objetos que disponga de, al menos 4 usuario con diferentes
contraseñas.

- Este array reemplaza a nuestro objeto básico llamado userToValidate, utilizado en el
ejemplo anterior. En la lógica del código, previo validar el usuario, debemos buscar si
el mismo existe en el array que creamos.

- Integraremos para esto el método array.find().

- Por último, cuando el usuario recibido haya pasado la validación correspondiente,
debemos servir a través de /rutaprotegida, algún array de objetos en formato JSON.
Puede ser nuestro clásico array frutas, algún otro array que tengas con datos de tu
interés, o puedes también recuperar nuestro array trailerflix. Puede ser en formato
array de objetos JS o a través de la lectura de un archivo .JSON.