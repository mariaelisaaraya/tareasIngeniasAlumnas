--- Inicié el servidor :
                    npm init -y
    * para obtener el archivo package.json, agregando:
                                        "start": "node -watch index.js"

    * Instalé la plantilla Express, y agregué el archivo .gitignore para ignorar la carpeta de node_modules.

Empiezo creando la carpeta recursos , dentro guardo un archivo con el nombre de productos.js, dentro de ese archivo creo una lista de articulos.
Acontinuación creo el archivo index.js, agrego el servidor: puerto = 3002, sumado a las declaraciones de la plantilla instalada.
Siguiendo enlisto por orden los endpoits pedido en el desafio con las siguientes rutas:

● /productos
● /productos/:id
● /productos/:nombre

●/productos
○ Cuando ingreso a ésta ruta /productos, obtengo el listado de articulos con sus nombres en forma ascendente en formato JSON.
--El método utilizado fue con sort().

● /productos/id/:id
○ Si me dirijo a está ruta agregando /id/8, obtengo el articulo como respuesta JSON.  Si no lo encuentra, establece el código de estado de la respuesta en 404 y envia un mensaje de error en formato JSON.
--El método utilizado fue con find().

● /productos/nombre/:nombre
○ Si ingreso a está ruta nombre/zapatos, recibo una respuesta con el nombre completo, ó parte de este. También ingresando nombre/s recibo una respuesta exitosa con los articulos que incluyen esa letra.
Si no lo encuentra , recibo un mensaje de error en formato Json.
--El método utilizado fue con filter().


** Para probar mi servidor ingreso a la terminal y doy un:
                                                    npm start


__Agrego pasos funcionando en la carpeta 'views'
