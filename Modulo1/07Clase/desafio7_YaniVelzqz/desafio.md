:::::::::::::::::: Desafío para la próxima clase:

Al servidor de ejemplo que utilizamos en esta unidad, le agregaremos algunos endpoints adicionales, que permitirán buscar tanto por código de curso como también por nombre. Veamos a continuación el detalle de la consigna completa.


---------------------------- Prácticas -------------------------------

En el siguiente servidor web debemos definir las rutas:

“/curso/código/:id”
“/curso/nombre/:nombre”

El código de curso debe recibir un parámetro numérico. Convertimos al mismo en un valor numérico usando parseInt(), verificamos que así sea usando typeof y finalmente buscamos el curso en cuestión iterando el array. Cuando encontramos el mismo, lo agregamos al array resultado y lo retornamos como respuesta interrumpiendo la posible continuidad de una iteración innecesaria.

Cuando buscamos por nombre, la búsqueda deberá ser parcial, o sea, que se pueda enviar parte del nombre del curso. El endpoint podrá devolver uno o más cursos resultantes