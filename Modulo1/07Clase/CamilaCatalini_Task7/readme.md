## Desafío 7:

- Se agregaron endpoints que permitan buscar tanto por código de curso como también por nombre.

## Rutas definidas

  1. “/cursos”  --> Se obtienen todos los cursos.
  2. “/curso/codigo/:id”  --> Se obtiene el curso especificado por id.
  3. “/curso/nombre/:nombre” --> Se obtiene lista de cursos por nombre.(Busqueda parcial)

 En cada busqueda si no encuentra coincidencias devuelve un msj.