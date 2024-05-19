## Desafío para la próxima clase:

Al proyecto construído en las prácticas de la clase anterior debemos sumarle el archivo con la estructura .JSON.

Integraremos este archivo con los endpoint que creamos la clase anterior. Los mismos eran:

- /productos
- /productos/:id
- /productos/:nombre

### Prácticas
Este archivo con extensión .json, debe ser leído utilizando el módulo FileSystem API. Luego, su contenido debe ser convertido a un array de objetos JS, y almacenado en una variable.

Finalmente integrarás la lógica necesaria en los tres endpoints creados, para poder:
- listar todos los objetos del array
- devolver un objeto buscando el mismo por su propiedad :id
- devolver uno o más objetos filtrando los mismos por su propiedad nombre. (puede recibir parte del nombre)