# Resumen del Proyecto de Melisa

Quisiera comentarte sobre la implementación que realizaste en nuestro proyecto de Node.js. Noté que estás incluyendo estilos CSS dentro del HTML generado para nuestras respuestas HTTP, y me gustaría discutir por qué eso puede no ser la mejor práctica y cómo podemos mejorar nuestro código.

En primer lugar, es importante recordar los requisitos de la tarea: Se nos pidió crear un servidor web que respondiera con HTML adecuado, pero no se mencionaba la inclusión de estilos CSS, esto significa que, aunque el HTML que has generado es correcto, agregar estilos CSS no estaba dentro del alcance de lo que se pedía, además, queremos mantener una buena separación de responsabilidades en nuestro código, esto significa que la lógica del servidor (como la generación de respuestas HTTP) y la presentación (como los estilos CSS) deben estar separadas. Cuando mezclamos estilos CSS directamente en nuestro HTML, nuestro código se vuelve más difícil de entender y mantener, especialmente a medida que el proyecto crece.

Te sugiero que consideres eliminar los estilos CSS del HTML generado y te enfoques en proporcionar respuestas HTML simples y limpias. Por ejemplo:

'''
else if (request.url === "/cursos") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    respuesta = "<h1>Accediste al apartado de cursos</h1>";
}
'''

Al hacer esto, mantendremos nuestro código más organizado, fácil de entender y más fácil de mantener a largo plazo, te recomiendo que veas nuevamente la clase y corroborar estos datos.

¡Gracias por tu atención y esfuerzo en este proyecto! Vas muy bien

Lisa

