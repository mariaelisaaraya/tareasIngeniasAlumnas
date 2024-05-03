# Resumen del Proyecto de Silvina

## Definición del Puerto
- La constante `PORT` está configurada correctamente con el valor `3050`.

## Rutas Especificadas
- **Ruta Raíz (`/`)**: Configurada correctamente, envía contenido HTML con el título `<h1>Bienvenid@s a nuestra web!</h1>`.
- **Ruta Cursos (`/cursos`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a nuestra sección de cursos</h1>`.
- **Ruta Contacto (`/contacto`)**: Envía contenido HTML con el título `<h1>En esta sección podés contactarnos</h1>`.

## Configuración del Content-Type
- Todas las rutas establecen correctamente el `Content-Type` como `text/html` antes de enviar la respuesta.

## Manejo de Rutas Inexistentes
- Implementado mediante un middleware que atrapa cualquier ruta no definida y responde con un JSON `{ "error": "404", "description": "No se encuentra la ruta o recurso solicitado." }`.

## Archivo `package.json`
- Incluye scripts para iniciar el servidor con `node` y para desarrollo con `nodemon`.
- Define correctamente las dependencias (`express`) y dependencias de desarrollo (`nodemon`).

## Archivo `.gitignore`
- Adecuadamente configurado para excluir `node_modules` y archivos de bloqueo, lo cual es una práctica recomendada.

## Corrección en el Archivo Principal
- El nombre del archivo principal fue corregido en el `package.json` para coincidir con el archivo del servidor `ejercicioAlumnaSilvinaFigueroa.js`, asegurando coherencia y funcionalidad del proyecto.

¡Felicitaciones por ser el primer Pull Request! 
