const paises = ['Argentina', 'Uruguay', 'Brasil', 'Venezuela', 'Paraguay', 'Bolivia', 'Chile']
//Aqui no se porque usar un const si, en el ejercicio dice un array que se pueda agregar, el cosnt no se puede agregar
// las const son datos no variables, no me permite modificar el valo, para ello usaria let
function listarPaises(array){
    console.log ("Listado de países:", console.table(array));

}
function cambiarNombre(){
    const tuNombre = prompt("Ingresa tu nombre:");
    try {
        tuNombre = nombre;
    }catch(err){
        console.error("Se ha producido un error al intentar cambiar el valor de una constante", err)
    }finally{
        console.log("El nombre de la constante tuNombre, es:", tuNombre)
    }
}

const nombre = ("Donna Clark");
listarPaises(paises)
cambiarNombre()