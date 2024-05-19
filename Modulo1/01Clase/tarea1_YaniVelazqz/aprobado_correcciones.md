## Correcciones para la Tarea

### Función listarPaises
La función listarPaises parece estar bien definida, pero hay un pequeño error en la forma en que se usa console.table. Deberías pasar el array como argumento a console.table, en lugar de intentar asignar el array a console.table. Debería ser así: console.table(paises);.

### Función cambiarNombre:

En la función cambiarNombre, declaras una constante tuNombre y luego intentas reasignarle un valor dentro del bloque try, estás declarando nuevamente la constante dentro del bloque try, lo cual no es necesario y podría causar confusión. Simplemente podrías intentar reasignar el valor a la constante tuNombre sin declararla nuevamente.

### Mejoras Generales:
Sería útil agregar comentarios que expliquen el propósito y la funcionalidad de cada función y bloque de código. Esto facilitará la comprensión del código. Asegúrate de entender la diferencia entre declarar una constante y asignarle un valor. 