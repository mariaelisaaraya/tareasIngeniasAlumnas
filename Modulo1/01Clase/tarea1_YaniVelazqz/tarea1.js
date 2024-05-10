//Introduccion a la programación backend
let paises = ['Argentina', 'Chile', 'Uruguay', 'Brasil', 'Paraguay', 'Bolivia', 'Venezuela'];
const nombre = 'Donna Clark';

function listarPaises(paises) {
    console.log("Listado de paises contenidos en el array: "); 
    console.table = paises;
}

function cambiarNombre() {
    const tuNombre = 'Yanina Velazqz';
    try { 
        const tuNombre = nombre;
    } catch(error) {
        console.log("Se ha producido un error al intentar cambiar el valor de una constante");
    } finally {
    console.log("El nombre de la constante tuNombre, es: ", tuNombre);  
    }
}




