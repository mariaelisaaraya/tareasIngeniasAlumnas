## Desafío para la próxima clase:

- Crearemos un proyecto con Express JS construyendo un backend que sirva datos, mediante diferentes endpoints, a
partir de un array de objetos. Éste contendrá las siguientes rutas:
-   ● /productos
-   ● /productos/:id
-   ● /productos/:nombre

Dispondremos de un array de productos, que tendrá estas
características: {id - nombre - importe - stock}

### Prácticas

- En el servidor web debemos definir las siguientes rutas:
    
1. ● /productos
   
    ○ Al peticionar está ruta, debe devolver el listado de productos
completo, en formato JSON. Los mismos deben estar ordenados por
nombre.

2. ● /productos/:id

    ○ Al peticionar está ruta, debe devolver un solo producto, buscando el
mismo por el ID. Si no lo encuentra, debe devolver un mensaje de
error en formato JSON.

3. ● /productos/:nombre

    ○ Al peticionar está ruta, debe devolver una respuesta buscando el
producto por el nombre. Puede recibir el nombre completo, o parte
de este. Si encuentra más de un resultado, debe devolver un array
con todas las coincidencias. Si no encuentra coincidencias, debe
devolver un mensaje de error en formato JSON.