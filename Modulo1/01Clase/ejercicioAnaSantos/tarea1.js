let paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia", "Venezuela"];
let nombre = "Donna Clark";

function listarPaises(paises) {
    console.log("Listado de paises contenidos en el array:")
    console.table(paises)
};

function cambiarNombre() {
    //let tuNombre = "Ana Santos"
    const tuNombre = "Ana Santos"

    try {
        tuNombre = nombre
    } catch (error) {
        console.error("Se ha producido un error al intentar cambiar el nombre")
    } finally {
        console.log("El nombre de la constante tuNombre es: ", tuNombre)
    }

};

cambiarNombre()

listarPaises()