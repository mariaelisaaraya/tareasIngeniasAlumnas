Cuando intenté utilizar el método readFile() dentro de una función como hicimos en clase, obtenía el error al parsear el json ya que figuraba como undefined. 

1° solución: Utilizar el método readFile() fuera de una función --> node index.js
2° solución: Utilizar funciones asíncronas --> node index_asinc.js

Ejemplos para el uso de las rutas:
http://localhost:3000/productos: devuelve todos los productos ordenados por nombre
http://localhost:3000/productos/5: devuelve el producto con el id=5
http://localhost:3000/productos/nombre/c: devuelve todos los productos que tengan "c" en el nombre.


Al preguntarle el motivo del error mencionado arriba (utilizando fs.readFile() dentro de una función) a chatGPT me explicó lo siguiente: 
 
"La razón principal por la que no funciona sin usar promesas en tu caso específico es debido a la naturaleza asincrónica de las funciones de lectura de archivos en Node.js. Cuando usas fs.readFile con callbacks, necesitas manejar el flujo de control para asegurarte de que el archivo se lea completamente antes de que intentes utilizar sus datos. Vamos a explicar esto con más detalle.

Naturaleza Asincrónica de fs.readFile
Cuando usas fs.readFile con un callback, el código sigue ejecutándose mientras el archivo se lee en segundo plano. Esto significa que si no manejas adecuadamente la asincronía, podrías intentar utilizar los datos del archivo antes de que estén disponibles.

Diferencia Clave
Callbacks: Necesitas pasar una función que se ejecutará después de que la operación asíncrona (lectura de archivo) se complete. Esto puede llevar a un "callback hell" si tienes múltiples operaciones asíncronas.
Promesas con async/await: Puedes escribir código asíncrono que se lee de manera más secuencial, similar al código síncrono, pero que en realidad maneja la asincronía de manera correcta y clara.

En términos de eficiencia y mejores prácticas de programación, usar promesas y async/await es generalmente la opción preferida. Aquí hay algunas razones por las que este enfoque es superior:

Beneficios de usar async/await y Promesas
Claridad y Mantenimiento del Código:

Legibilidad: El uso de async/await hace que el código asíncrono se lea de manera secuencial, lo que mejora la legibilidad y facilita el mantenimiento. En comparación, los callbacks anidados pueden llevar a un código menos legible y más difícil de seguir, conocido como "callback hell".
Flujo de Control: Con async/await, puedes escribir lógica de control (como try/catch) de manera más intuitiva, lo que mejora el manejo de errores y el flujo general del programa.
Manejo de Errores:

Errores de Promesas: Con async/await, puedes manejar errores de manera centralizada usando try/catch. En cambio, con callbacks, cada operación asíncrona debe manejar errores individualmente, lo que puede ser propenso a errores y verboso.
Eficiencia en la Ejecución:

No Bloqueante: Ambos enfoques (promesas y callbacks) son no bloqueantes, lo que es una característica fundamental de Node.js para manejar múltiples operaciones de I/O concurrentes de manera eficiente. Sin embargo, async/await con promesas es más moderno y está mejor integrado en el ecosistema actual de JavaScript.
Escalabilidad:

Modularidad y Reutilización: Con async/await, puedes estructurar tu código de manera más modular y reutilizable, lo que es beneficioso para proyectos más grandes y complejos.

Conclusión
El enfoque con promesas y async/await es generalmente más eficiente en términos de desarrollo y mantenimiento debido a su claridad, facilidad de manejo de errores y modularidad. Aunque ambos enfoques son no bloqueantes y eficientes en cuanto a ejecución, el uso de async/await es una mejor práctica de programación moderna en Node.js.
"

