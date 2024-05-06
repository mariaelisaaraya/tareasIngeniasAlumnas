# Resumen del Proyecto de Daniela

## Definición del Puerto
- La constante `PORT` está configurada correctamente con el valor `3050`.

## Rutas Especificadas
- **Ruta Raíz (`/`)**: Configurada correctamente, envía contenido HTML con el título `<h1>Bienvenid@s a HOME</h1>`.
- **Ruta Cursos (`/cursos`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a CURSOS!</h1>`.
- **Ruta Contacto (`/contacto`)**: Envía contenido HTML con el título `<h1>Bienvenid@s a CONTACTOS</h1>`.

## Configuración del Content-Type
- Todas las rutas establecen correctamente el `Content-Type` como `text/html` antes de enviar la respuesta.

## Manejo de Rutas Inexistentes
- Implementado mediante un middleware que atrapa cualquier ruta no definida y responde con un JSON `{ "error": "404", "description": "No se encuentra la ruta o recurso solicitado." }`.

## Archivo `package.json`
- Incluye scripts para iniciar el servidor con `nodemon` y una configuración experimental con `node --watch`.
- Define correctamente las dependencias (`express`) y dependencias de desarrollo (`nodemon`).

## Archivo `.gitignore`
- Se esperaría que esté adecuadamente configurado para excluir `node_modules` y archivos de bloqueo, aunque no se especificó en el resumen.

## Mejoras Sugeridas
### Establecimiento Explícito del Código de Estado en Rutas Exitosas
- Podes considerar establecer explícitamente el código de estado `200` en las rutas exitosas para claridad y consistencia.

### Verificación y Documentación
- Sería beneficioso agregar comentarios al código para explicar la lógica detrás de configuraciones importantes y decisiones de diseño.

### Uso de `node --watch`
- Aunque `node --watch` es una característica experimental, podes considerar utilizar `nodemon` para el desarrollo dado que proporciona una solución más probada y robusta.

¡Felicitaciones por completar esta tarea!

Abrazos,
Lisa
