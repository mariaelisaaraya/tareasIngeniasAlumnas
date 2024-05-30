/*let paises=['Argentina','Uruguay','Brasil','Chile','Paraguay','Bolivia','Venezuela'];


function listarpaises(array){
    console.log('Listado de paises contenidos en el array: ',array)
    console.table(array)
}

listarpaises(paises);*/
const nombre='Donna Clark'
function cambiarnombre(){
    const tuNombre='Estefania Vago'
    try{
        tuNombre=nombre
    }
    catch{
        console.error('Se ha producido un error al intentar cambiar el valor de una constante')
    }
    finally{
        console.log('El nombre de la constante tuNombre es: ',tuNombre) 
    }
}
cambiarnombre();
