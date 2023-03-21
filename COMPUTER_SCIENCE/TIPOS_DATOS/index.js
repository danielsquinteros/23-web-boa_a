console.log('hola mundo')

/* PRIMITIVOS */

const tipoUndefined = undefined
//El type of me devuelve el tipo de datos pero en cadena de texto (string)
console.log(typeof tipoUndefined)

const tipoBoolean = true
console.log(typeof tipoBoolean)

const tipoNumber = 12
console.log(typeof tipoNumber)

const tipoString = 'cadena de texto'
console.log(typeof tipoString)

const tipoBigInt = 2n
console.log(typeof tipoBigInt)

const tipoSymnol = Symbol()
console.log(typeof tipoSymnol)

const typeNull = null
// BUG DE JAVASCRIPT
console.log('----->', typeof typeNull)


// OBJETOS 
const tipoObject = {}
console.log(typeof tipoObject)

const tipoArray = []
console.log(typeof tipoArray)

const tipoClase = new Date()
console.log(typeof tipoClase)

const tipoFuncion = () => {
}

console.log(typeof tipoFuncion)


let numero = 12 
console.log(typeof numero, numero)
numero = 'Cadena de texto'
console.log(typeof numero, numero)

console.log('---------------------')

/* MUTABILIDAD */

const nombreOriginal = 'Benjamin';
let nombreCopiado = nombreOriginal;  
nombreCopiado = 'Fabian';

console.log('nombreCopiado', nombreCopiado)
console.log('nombreOriginal', nombreOriginal)

/* INMUTABILIDAD */
const edadesOriginal = [20, 27]
let edadesCopia = edadesOriginal

edadesCopia[0] = 40
console.log('edadesCopia', edadesCopia)
console.log('edadesOriginal', edadesOriginal)

const nameOriginal = {
    nombre: 'Daniel',
    edad: 27
}

let nameCopia = nameOriginal
nameCopia.nombre = 'Martyn'


console.log('nameCopia', nameCopia)
console.log('nameOriginal', nameOriginal)


const vivoOriginal = null
let vivoCopia = vivoOriginal

vivoCopia = 'existe';

console.log('vivoOriginal', vivoOriginal)
console.log('vivoCopia', vivoCopia)


const nombresOriginal = ['Martyn', 'Patricio']

console.log(nombresOriginal)
console.log(...nombresOriginal)
/* SPREAD OPERATOR */ 
/* ¿Spread Operator? */
// OBLIGACIÓN ENTENDERLO POR FAVOOOOOR!!!!!!!!!!!!!!
//Descomponer el elementos, en elementos individuales

const nombresCopia = [...nombresOriginal]

console.log('nombresOriginal', nombresOriginal)

nombresCopia.push('Vicente');
console.log('nombresCopia', nombresCopia)