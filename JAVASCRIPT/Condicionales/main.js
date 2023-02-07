//NOSOTROS COMO DESARROLLADORES
// ver como va nuestro código

// Impresión normal
console.log('Hola mundo')

//Impresión de un error
console.error('Hola mundo')

//Impresión de una alerta
console.warn('Hola mundo')


// PARA EL USUARIO
// ENVIAR MENSAJE AL USUARIO
// alert('HOLA BIENVENIDO')

// INGRESAR DATOS
// var nota1 = prompt('Felipe, ingresa tu primera nota')
// console.log(nota1);
// console.log(typeof nota1);

// var edad = prompt('Ingresa tu edad')
// var edad_numero = Number(edad)

// console.log(edad, typeof edad);
// console.log(edad_numero, typeof edad_numero);

// //20+20 = 2020 -> concatenar -> son de tipo string
// //20+20 = 40  -> son de tipo number

//PROBLEMA 1
var edad = prompt('Ingresa tu edad')
var edad_numero = Number(edad)

var nombre = prompt('Ingresa tu nombre')

if(edad_numero >= 18){
    alert(`${nombre} es mayor de edad (${edad_numero}), ya puedes pasar, adelante! BIENVENIDO🎉`)
} else {
    alert(`${nombre}, eres menor de edad (${edad_numero}) NO PUEDES INGRESAR A LA DISCO DEV.F 😔`)
}
