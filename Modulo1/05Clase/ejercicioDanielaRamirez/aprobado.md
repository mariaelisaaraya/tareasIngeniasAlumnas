# Resumen del Proyecto de Daniela

## Definición del Puerto
- La constante `PORT` está configurada correctamente.

## Rutas Especificadas
El proyecto define tres rutas específicas:
- `/`: Representa la página de inicio del sitio.
- `/cursos`: Representa la sección de cursos.
- `/contacto`: Representa la página de contacto.

## Configuración del Content-Type
Para cada una de las rutas especificadas se configura el encabezado `Content-Type` para enviar el contenido en formato HTML.

## Manejo de Rutas Inexistentes
Se implementa un manejo de rutas inexistentes que responde con un mensaje de error adecuado en formato JSON. Este mensaje incluye un código de error 404 y una descripción del problema.

## Archivo Readme
Felicitaciones por armar uno, necesito que agregues capturas de pantalla en el mismo con cada ruta específica de como se ve en el browser.

## Observaciones
- La línea `app.use(express.static(path.join(__dirname, 'trailerflix')));` indica la configuración para servir archivos estáticos desde el directorio "trailerflix".
Esto no fue pedido
