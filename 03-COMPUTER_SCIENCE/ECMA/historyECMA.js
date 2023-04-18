//ES5
// Clases las veremos el Miércoles

//ES6
//Arrow function
function funcionNormal(){
    // console.log('Funcion normal')
}

funcionNormal()

const arrowFunction = () => {
    // console.log('Funcion flecha')
}

arrowFunction()

// LET Y CONST 
// let -> se puede cambiar✅, scope local, vive solamente dentro del bloque, o hacia un subbloque
// const -> no se puede cambiar ✅, scope local,  vive solamente dentro del bloque, o hacia un subbloque


// Template string
const name = "Daniel"
const age = 27

// console.log("Soy " + name + " tengo " + age)
// console.log(`Soy ${name} tengo ${age}`)

//Desestructuración de Arreglos
const personaArray = ['Daniel Q', 27, 'Chile']
// const [ nombre, edad, pais, profesion = 'No especificado' ] = personaArray
// console.log(nombre)
// console.log(edad)
// console.log(pais)
// console.log(profesion)

//Desestructuración de objetos
const personaObject = {
    nombre: "Daniel",
    edad: 27,
    pais: "Chile",
}
const { nombre, edad, pais } = personaObject
// console.log(personaObject.nombre) 
console.log(nombre) 
console.log(edad)
console.log(pais)


const mostrarInfo = ({ nombre, edad, pais, profesion = 'Sin profesión' }) => {
    console.log(`OBJECT -> Hola ${nombre}, que bueno que seas de ${pais} y que tu edad sea ${edad}, profesion de ${profesion}`)
}

mostrarInfo(personaObject)



const mostrarInfoArray = ([nombre, edad, pais, profesion = 'Sin profesion']) => {
    console.log(`ARRAY -> Hola ${nombre}, que bueno que seas de ${pais} y que tu edad sea ${edad}, profesion de ${profesion}`)
}

mostrarInfoArray(personaArray)

//Módulos
// Conectar archivos de JS en el index.html


//ES7
const base = 3;
const exponente = 10;

console.log(base ** exponente)

const array = [1, "Carlos", true, 33]
const findName = array.includes("Carlos")

const names = "Daniel,Felipe,Andro,Carlos"
const nameArray = names.split(",")
console.log(nameArray)

//ES9

// Rest operators -> Yo puedo recibir una cantidad indefinida de parametros en una función /...
//... en los parametros de una función es REST OPERATOR
const suma = (a, b, ...otrosNumeros) => {
    console.log(otrosNumeros)
    const res = a + b
    return res
}

const resultado = suma(2,3,4,5,6,6,7,12,2,12,123,123,123,123,123,12,31,231,23,123,123,123)
// Haz un función que independiente los parametros que reciba, que los sume!

//Spread operator /...
// OBLIGACIÓN ENTENDERLO POR FAVOOOOOR!!!!!!!!!!!!!!
//Descomponer el elementos, en elementos individuales

//Para arreglos
const nombres = ["Felipe", "Abbias", "Carlos", "Patricio"]
// const nombresNuevos = ["Felipe", "Abbias", "Carlos", "Patricio, "Diego", "Axel"]
const nombresNuevos = [...nombres, "Diego", "Axel"]
console.log('---->', nombresNuevos)
console.log(...nombres)


//Para objetos
const auto = {
    name: "BWM",
    color: "rojo",
    año: 2022
}
// Juntar objetos
// const autoDetallesTecnicos = { hp: 240, name: "BWM", color: "rojo", año: 2022 }
const autoDetallesTecnicos = { hp: 240, ...auto}
console.log(autoDetallesTecnicos)