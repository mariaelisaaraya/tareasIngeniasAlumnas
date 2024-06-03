Primeramente arranco el servidor para obtener el archivo package.json,

luego instalé la plantilla node express:
                            npm node i express

Agregué las rutas que se pide en el desafío:

--Ruta Raíz
--Ruta productos
--Rutas Inexistentes

Acontinuación fuí creando las plantillas de HTML/EJS, donde:

**La Página Principal es Servida a través de la URL principal del sitio.
**La Página de Productos donde agregué una tabla HTML.

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Uso de Encabezado Común

Realizo un encabezado <head> común para ambos documentos EJS.
Luego inserté este <head> en ambos documentos utilizando la función include() de EJS.

---------------------------------

Documento Productos.ejs

El documento productos.ejs contiene una tabla HTML.
Dentro del <tbody>, genera cada fila <tr> y cada celda <td> utilizando el ciclo for de EJS basado en la información contenida en el array frutas.

..................................

Control de Rutas Inexistentes

Agregue un control de errores creando una plantilla EJS dedicada para rutas inexistentes.

----------------------------------

Finalmente agregué estilos