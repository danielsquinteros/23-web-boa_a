console.log('hola mundo')

// ¿Qué es el prototype?
// Cuando yo creo un objeto (new Persona("Benjamin", "Rivera")) 
// recibe un prototipo ->
// prototype trae la herencia del objeto que estoy creando
// por ejemplo, si tengo gerente y el prototipo de gerente es empleado
// quiere decir que gerente es una extensión de empleado
// por ende, el prototype trae todo lo que viene en empleado
// creando gerente (HERENCIA)


//PROTOTYPE -> ES UN LENGUAJE ORIENTADO OBJETOS BASADOS EN PROTOTYPOS
//PROTOTYPE MAYOR ES OBJECT
//EN JAVASCRIPT TODO SON OBJETOS -> ESTA MAL PERO TIENE ALGO DE VERDAD

const texto01 = 'Hola'
const texto02 = new String('hola')
console.log(texto01)
console.log(texto02)

const numero01 = 1
const numero02 = new Number(1)
console.log(numero01)
console.log(numero02)

const boolean01 = true
const boolean02 = new Boolean(true)
console.log(boolean01)
console.log(boolean02)


const array01 = [1,2,3]
const array02 = new Array(1,2,3)
console.log('01', array01)
console.log('02', array02)

const objeto01 = {}
const objeto02 = new Object()
console.log(objeto01)
console.log(objeto02)

function Saludar(){
    console.log('Hola')
}

console.log('Function ->', typeof Saludar)
console.log('Arreglo -> ', typeof array01)
console.log('Objeto ->', typeof objeto01)
