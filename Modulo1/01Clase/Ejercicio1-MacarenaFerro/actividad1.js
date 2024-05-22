console.log('hola')
console.warn('Esto es un mensaje de advertencia')// amarillo
console.error('Esto es un mensaje de error')//rojo

const frutas = ['banana', 'manzana', 'pera']
console.table(frutas)

//crear una variable, puede cambiarse despues
let nombrecompleto = 'Macarena'
//crear una constante, estatico o inalterable
const universidad = 'UNS'
console.log(universidad)

// Funciones

//funcion sin parametro
//function mostrarMiNombre() {
//    console.log("2- Me llamo: ", nombrecompleto)
//}
//mostrarMiNombre()
//funcion con parametro
function mostrarMiNombre2(nombre) {
    console.log("2- Me llamo: ", nombre)
}
mostrarMiNombre2(nombrecompleto)
//funcion con retorno y / o parametros
function obtenerMaximo(num1, num2, num3) {
    return console.log(Math.max(num1,num2,num3))
}
obtenerMaximo(5, 2, 10)

let nombrecompleto1 = 'Macarena'
const login = false
//Condicionales
//if (nombrecompleto1 !== "") {console.log('Bienvenido', nombrecompleto1);
//} else { 
//    console.error('El usuario esta vacio');
//}

if (nombrecompleto1 !== '') {console.log('Bienvenido ${nombrecompleto1}');
} else { 
    console.error('El usuario esta vacio');
}

//condicional con llaves simplificado
//if (nombrecompleto1 !== '' && grupo === 'admin') 
//    console.log('Bienvenido' `${nombrecompleto1}`);
//else 
//    console.error('El usuario esta vacio');

// ciclo for

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//ciclo while
while(nombrecompleto == 'pancho') {console.log ('El nombre es pancho');
}

//try cacthc
const nombre = 'Dona Clark'

function cambiarnombre() {
    const tunombre = 'Maca'
    try { tunombre = nombre;
    } catch(err) {
    console.error('Se ha producido un error al intentar cambiar el valor de una constante', err);
    } finally {
    console.warn('El nombre de la constante tuNombre, es', tunombre);
    }
    
}

cambiarnombre()