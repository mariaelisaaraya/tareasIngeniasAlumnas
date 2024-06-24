Primeramente arranco el servidor para obtener el archivo `package.json`,

luego instalé la plantilla node express:
                            `npm node i express`

_Agrego el archivo gitignore para ignorar node_modules.

Agregué las rutas que se pide en el desafío en un archivo `index.js`:

--Creación de la Ruta Raíz que reponde a la `URL` principal del Servidor Web.

--Una segunda Ruta Array, que responde a : `/objetos` (opté hacer una lista de objetos deportivos.). Se enumera todo el set de datos de objetos en cuestión. El archivo apartado de `objetos.js` se encuentra ubicado en la carpeta `recursos`.

--Esta ruta específica maneja solicitudes GET a `/objetos/codigo/:id`, dónde :
`''` es un parámetro que representa el `ID` de un objeto.
El código recupera un objeto de una matriz llamada objetosDeportivos según el ID proporcionado, y lo devuelve ya sea exitoso o no como `JSON` si lo encuentra; de lo contrario, devuelve un `error 404`.

--Otra Ruta misma de /objetos , con el agregado de que recibirá un parámetro adicional: `/objetos/nombre/:nombre`

Cuando buscamos por nombre, la búsqueda es parcial, o sea, se puede enviar parte del nombre del objeto. El endpoint puede devolver uno o más objetos resultantes.
En el código inicializa un índice `i` en 0 y luego ejecuta un bucle `while` mientras `i` sea menor que la longitud del array `objetosDeportivos`. En cada iteración, obtiene el objeto en la posición `i` del array y verifica si su nombre incluye el valor de `parametro`. Si es así, agrega el objeto al array `result`. Luego, incrementa `i` en 1 para pasar al siguiente objeto en el array. El bucle continúa hasta que se hayan revisado todos los objetos en el array `objetosDeportivos`.

--Finalmente el control de errores sobre Rutas Inexistentes.

__________________

Se pone arranque para ver la funcionalidad del servidor web.


