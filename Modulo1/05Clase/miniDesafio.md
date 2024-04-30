Prácticas
Definiremos una constante PORT, con el valor 3008. En el servidor web, debemos
tener definidas a las siguientes rutas:

● “/”

● “/cursos”

● “/contacto”

Sesteamos el método header() en c/u de ellas para enviar content-type en formato
HTML. En el método end() debemos enviar un tag H1 con un título descriptivo para la ruta que estamos navegando. Ejemplo:

● “Bienvenidas a nuestra web” => para la raíz “/” del sitio

● “Bienvenidas a nuestra sección cursos” => para /cursos

- Recordemos agregar también el control de rutas inexistentes, respondiendo con un mensaje acorde, pero en formato TEXTO PLANO.

- En el control de rutas inexistentes, crearemos una estructura JSON, la cual debe enviarse como respuesta a las rutas inexistentes que sean peticionadas. Ejemplo: {“error”: “404”, “description”: “No se encuentra la ruta o recurso solicitado.”}

- Modificaremos también package.json, agregando el script correspondiente para inicializar el proyecto con Nodemon.