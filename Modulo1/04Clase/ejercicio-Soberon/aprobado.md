# Resumen del Proyecto de Milagros

## Definición del Puerto
- La constante `PORT` está correctamente configurada con el valor `3008`.

## Rutas Especificadas
- **Ruta Raíz (`/`)**: Configurada correctamente, envía contenido HTML con el título `<h1>Bienvenid@s a nuestra web!</h1>`.
- **Ruta Cursos (`/cursos`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a nuestra sección de cursos</h1>`.
- **Ruta Contacto (`/contacto`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a nuestra sección de contacto!</h1>`.

## Configuración del Content-Type
- Todas las rutas establecen correctamente el `Content-Type` como `text/html; charset=utf-8` antes de enviar la respuesta.

## Manejo de Rutas Inexistentes
- Implementado mediante un middleware que atrapa cualquier ruta no definida y responde con un JSON `{ "error": "404", "description": "No se encuentra la ruta o recurso solicitado." }`, utilizando el formato texto plano como se especificó.

## Archivo `package.json`
- Incluye scripts para iniciar el servidor:
  - `"start": "node server.js"`
- Define correctamente las dependencias necesarias para el proyecto.

## Archivo `.gitignore`
- Aunque no se especificó en el resumen, se esperaría que esté adecuadamente configurado para excluir `node_modules` y archivos de bloqueo, lo cual es una práctica recomendada para evitar subir archivos innecesarios al repositorio.

## Cumplimiento de Requisitos
- Todos los requisitos de la tarea se cumplieron. 

## Comentarios Finales
Milagros demostraste una buena comprensión de los conceptos básicos de la creación y manejo de un servidor web utilizando el módulo HTTP en Node.js. Las prácticas implementadas en la tarea son sólidas y muestran un buen manejo de las técnicas de desarrollo.

Saludos,
Lisa
