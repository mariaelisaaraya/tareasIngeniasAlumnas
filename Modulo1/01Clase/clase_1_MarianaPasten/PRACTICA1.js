// Crea un array llamado paises, en donde agregarás los siguientes elementos:
// Argentina, Uruguay, Brasil, Chile, Paraguay, Bolivia, Venezuela
// Crea seguido a este, una constante llamada nombre. En ella agregarás el nombre “Donna Clark”

let paises=['Argentina', 'Uruguay', 'Brasil', 'Chile', 'Paraguay', 'Bolivia', 'Venezuela'];
const nombre='Donna Clark';

// Crea una función llamada listarPaises() que reciba un parámetro llamado Array. 
// ● En el cuerpo de la función agrega un console log con la leyenda “Listado de países contenidos 
// en el array:” y luego console table, que liste la información del array recibido como parámetro.

function listarPaises(Array){
    console.log('Listado de países contenidos en el array:');
    console.table(Array);
}

listarPaises(paises)

// Crea una función simple llamada cambiarNombre(). En esta define al inicio una constante llamada 
// tuNombre, e ingresa tu nombre de pila o nombre completo.

function  cambiarNombre(nombre){
    const tuNombre="Mariana";
//     Agrega la cláusula try - catch - finally. en el bloque try intenta asignarle a la constante 
// tuNombre, el valor de la constante nombre.
    try{
        tuNombre=nombre;
    }
//     En catch() controla el error mediante console error, agregando la leyenda “Se ha producido un 
// error al intentar cambiar el valor de una constante”. Agrega el parámetro err a este mensaje 
// de consola.
    catch(error){
        console.error('Se ha producido un error al intentar cambiar el valor de una constante',error);
    }
//     En finally muestra un console log con la leyenda “El nombre de la constante tuNombre, es:” y 
// agrega la constante homónima como segundo parámetro.
    finally{
        console.log('El nombre de la constante tuNombre, es:',tuNombre);
    }
}
let namee='Nicole';
cambiarNombre(namee);