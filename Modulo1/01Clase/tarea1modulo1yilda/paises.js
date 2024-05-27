const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia", "Venezuela"];
const nombre = "Donna Clark";

function listarPaises(Array) {
    console.log("Listado de países contenidos en el array:");
    console.table(Array);
}

listarPaises(paises);

function cambiarNombre() {
    const tuNombre = "Yilda Rivero";
    try {
        tuNombre = nombre;
    } catch (error) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante");
    } finally {
        console.warn("El nombre de la constante tuNombre es: ", tuNombre);
    }
}

cambiarNombre();