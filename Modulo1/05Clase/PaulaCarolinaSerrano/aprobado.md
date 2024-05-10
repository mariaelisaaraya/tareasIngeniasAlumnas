# Resumen del Proyecto de Paula Carolina Serrano

## Definición del Puerto
- La constante `PORT` está configurada correctamente con el valor `3050`.

## Rutas Especificadas
- **Ruta Raíz (`/`)**: Configurada correctamente, envía contenido HTML con el título `<h1>Bienvenid@s a nuestra web</h1>`.
- **Ruta Cursos (`/cursos`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a nuestra sección cursos</h1>`.
- **Ruta Contacto (`/contacto`)**: Envía contenido HTML con el título `<h1>Contactate con nosotras</h1>`.

## Configuración del Content-Type
- Todas las rutas establecen correctamente el `Content-Type` como `text/html` antes de enviar la respuesta, asegurando que el contenido sea entregado como HTML.

## Manejo de Rutas Inexistentes
- Implementado mediante un middleware que atrapa cualquier ruta no definida y responde con un JSON `{ "error": "404", "description": "No se encuentra la ruta o recurso solicitado." }`, utilizando el formato `application/json`.

## Archivo `package.json`
- Incluye scripts para iniciar el servidor con `node` y para desarrollo con `nodemon`.
- Define correctamente las dependencias necesarias (`express`) y dependencias de desarrollo (`nodemon`).

## Archivo `.gitignore`
- Adecuadamente configurado para excluir `node_modules` y archivos de bloqueo, lo cual es una práctica recomendada para evitar subir archivos innecesarios al repositorio.

## Cumplimiento de Requisitos
- Todos los requisitos de la tarea han sido cumplidos adecuadamente.

## Observaciones
- Ojo con la identación.

Saludos,
Lisa
