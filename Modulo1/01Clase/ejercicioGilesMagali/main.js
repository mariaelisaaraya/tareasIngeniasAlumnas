function listarPaises(array) {
    console.log("Listado de países contenidos en el array:");
    console.table(array);
}

const paises = ["Argentina", "Brasil", "Chile", "Colombia", "Perú"];
listarPaises(paises);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function cambiarNombre() {
    const tuNombre = "Magalí"; 

    try {
        tuNombre = nombre;
    } catch (err) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante:", err);
    } finally {
        console.log("El nombre de la constante tuNombre es:", tuNombre);
    }
}

const nombre = "Donna Clark";
cambiarNombre();