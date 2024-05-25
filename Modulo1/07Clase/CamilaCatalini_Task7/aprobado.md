## Corrección Camila

- Usa nombres descriptivos para las rutas: Los nombres de las rutas son importantes para que otras personas desarrolladores entiendan fácilmente lo que hace cada una. Por ejemplo en lugar de /cursos/nombre/:nombre, podría ser más descriptivo nombrarla /cursos/buscar/:nombre.

- Manejo de errores más consistente: Es recomendable tener un manejo de errores más consistente en todas las rutas. Actualmente, solo la ruta /cursos/codigo/:id maneja un error 404 cuando no se encuentra ningún curso. Podrías aplicar un manejo similar en la ruta /cursos/nombre/:nombre para mantener la coherencia.

- Optimización del código: En lugar de usar un bucle for para buscar un curso por código en la ruta /cursos/codigo/:id, podrías usar el método find() de los arrays, que hace el trabajo de búsqueda y hace que el código sea más claro y conciso, es un consejo, se encuentra funcional actualmente.

- Manejo de entrada de la persona usuaria: Al tratar con entradas proporcionadas por la persona usuaria, como el código de curso o el nombre, es importante validar los datos para evitar posibles vulnerabilidades de seguridad, como ataques de inyección de código.

- Documentación del API: Agregar en el Readme comentarios o documentación sobre cómo usar cada endpoint puede ser útil para otras personas desarrolladoras que utilicen tu API en el futuro.

Ejemplo

## Rutas definidas

  1. “/cursos”  --> Se obtienen todos los cursos.

Ejemplo de solicitud:

GET /cursos


Respuesta esperada:

[
{ id: 1, nombre: "Curso 1", descripcion: "Descripción del curso 1" },
{ id: 2, nombre: "Curso 2", descripcion: "Descripción del curso 2" },
...
]


Agregar ejemplos de uso puede facilitar el entendimiento y la adopción de tu API para trabajar en equipo

Felicitaciones Cami!