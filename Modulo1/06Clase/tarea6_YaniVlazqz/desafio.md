 Prácticas
____________________________________________________________________

La estructura del servidor web base debe ser similar a la siguiente:

Ruta Raíz (/): Página principal del sitio.
Ruta Productos (/productos): Página para mostrar productos.
Ruta Inexistente (/*): Control de errores para rutas inexistentes.

Plantillas HTML/EJS

Debemos crear dos plantillas HTML/EJS:

Página Principal: Servida a través de la URL principal del sitio.
Página de Productos: Contendrá una tabla HTML.

Uso de Encabezado Común
Definir un encabezado <head> común para ambos documentos EJS.
Insertar este <head> en ambos documentos utilizando la función include() de EJS.

Documento Productos.ejs
El documento productos.ejs deberá contener una tabla HTML.
Dentro del <tbody>, generar cada fila <tr> y cada celda <td> utilizando el ciclo for de EJS basado en la información contenida en el array productos.

Control de Rutas Inexistentes
Agregar un control de errores creando una plantilla EJS dedicada para rutas inexistentes.

Integración de Framework CSS
Integrar un framework CSS como Bootstrap, Milligram o cualquier otro en el desarrollo de cada plantilla.