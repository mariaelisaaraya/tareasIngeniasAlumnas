const paises = ['Argentina', 'Uruguay', 'Brasil', 'Venezuela', 'Paraguay', 'Bolivia', 'Chile'];

function listarPaises(paises){
    console.log("Listado de paises en el array:");
    console.table(paises);
    console.log("Cantidad de paises en el array: " + paises.length);
}

listarPaises(paises)



const nombre = "tatiana";

function cambiarNombre() {
    const tuNombre = ["tati"];
    try {
        tuNombre = nombre;
    } 
    catch(err) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante.", err)
    } 
    finally {
        console.log("El nombre de la constante tuNombre es:", tuNombre)
    }
}

cambiarNombre()
