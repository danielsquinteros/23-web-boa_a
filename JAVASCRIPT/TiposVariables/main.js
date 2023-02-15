console.log('Hola estoy funcionando');

// VAR
//1. Var si la puede re-declarar
//2. Si puedo inicializarla o cambiarle su valor nuevamente

var nombre // declarar
nombre = 'Lautaro' // inicializando un valor

var nombre = 'Daniel' //declarando + inicializando

console.log(nombre);

// LET
// 1. let NO se puede RE-DECLARAR
// 2. Si puede inicializar nuevamente, o cambiar su valor nuevamente
let equipo_futbol = 'Boca Juniors'
equipo_futbol = 'Colo Colo'

console.log(equipo_futbol);


//CONST
//1. const tampoco se puede RE-DECLARAR
//2. const NO se puede re-inicializar nuevamente, NO puede cambiar su valor
//3. a expeción de los ARREGLOS
const deporte = 'Futbol'
// deporte = 'Voleyball'
console.log(deporte);

const arreglo = ['Mesa', 'Silla']
console.log(arreglo);

arreglo.push('Lampara')
console.log(arreglo);

