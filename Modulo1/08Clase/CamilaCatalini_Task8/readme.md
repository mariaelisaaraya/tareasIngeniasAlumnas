## Desafío 8:

- Se agregaron endpoints que permitan buscar tanto por código de curso como también por nombre y categoria.

## Rutas definidas

  1. “/productos”  --> Se obtienen todos los productos.
  2. “/producto/codigo/:id”  --> Se obtiene el producto especificado por id. Ej: http://localhost:3000/producto/codigo/1
  3. “/producto/nombre/:nombre” --> Se obtiene lista de productos por nombre.(Busqueda parcial) Ej: http://localhost:3000/producto/nombre/tablet
  4. “/productos/categoria/:categoria”  --> Se obtienen productos segun la categoria. Ej: http://localhost:3000/productos/categoria/relojes
 En cada busqueda si no encuentra coincidencias devuelve un msj.
  5. “/productos/ordenados/?orden=asc” --> Se octienen todos los productos ordenados por nombre ascendente y descendente. Ej: http://localhost:3000/productos/ordenados/?orden=asc o http://localhost:3000/productos/ordenados/?orden=des
