//Introduccion a la programación backend


//creacion de un array llamado "paises".
let paises = ['Argentina', 'Chile', 'Uruguay', 'Brasil', 'Paraguay', 'Bolivia', 'Venezuela'];
//se agrega una constante llamado "nombre" seguido del nombre "Donna Clarck".
const nombre = 'Donna Clark';

//creacion de una funcion llamado "listarPaises" que recibe 
//un parametro llamado "Array".
function listarPaises(Array) {
//se agrega un console.log con la leyenda "Listado de paises
//contenidos en el array".    
    console.log("Listado de paises contenidos en el array: "); 
//se agrega un console.table para listar la informacion del
// parametro recibido de "Array"
    console.table(Array);
}

listarPaises();


//creacion de una funcion llamado "cambiarNombre()".
function cambiarNombre() {
//se agrega una constante llamado "tuNombre" seguido de un nombre
// de pila o nombre completo.
    const tuNombre = 'Yanina';
//se agrega la cláusula try - catch - finally
    try { 
//en el bloque try se le asigna a la constante "tuNombre" el valor de
// la constante "nombre".
        const tuNombre = nombre;
    } catch(error) {
//en el bloque catch se controla el error mediante console.log 
// con una leyenda "se ha producido un error al intentar cambiar 
//el valor de una constante". sumado se agrega al mensaje
// el parametro "error".
        console.log("Se ha producido un error al intentar cambiar el valor de una constante");
    } finally {
//en finally se agrega un console.log con la leyenda "El nombre de la
//constante tuNombre, es: " sumado se agrega al mensaje el valor
// de la constante "tuNombre". (homonima) como segundo parametro.
    console.log("El nombre de la constante tuNombre, es: ", tuNombre);  
    }
}

cambiarNombre();




