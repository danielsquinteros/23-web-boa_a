console.log('Hola estoy conectado');

//Funciones
// Las funciones son conjunto de instrucciones que podemos llamar cuando sean requeridas en determinao momento de nuestro código

// 3 tipos de funciones

//Sintáxis básica
// 1. Función con nombre -> tradicional
function miFuncion(){
    console.log('Código a ejecutar FUNCION NORMAL');
}

//Para mandar a llamar a la función, tenemos que invocarla escribiendo su nombre y en caso que lo requiera le pasamos los parametros
miFuncion()

//1. Función con nombre que recibe parámetros
function miFuncionConParametros(param1, param2, param3) {
    console.log(param1, param2, param3);
}

miFuncionConParametros('27', 'Lautaro', 'Argentina')


//2. Función anonima
// function(){
//     console.log('soy una función');
// }


//3. Función flecha -> arrow function
const funcionFlecha = (param1, param2, param3) => {
    console.log('Código a ejecutar, FUNCIÓN FLECHA');
    console.log(param1, param2, param3);
}

funcionFlecha('27', 'Lautaro', 'Argentina')

const saludar = (nombre, edad) => {
    console.log(`Chao ${nombre}, ${edad}`);
}

saludar('Daniel', 27)


const suma = (num1, num2) => {
    const resultado = num1 + num2
    console.log(`${resultado}`);
    return resultado;
}

//return
// Es una palabra reservada para indicar donde finala nuestra función y/o que nos debe regresar/retornar
// Todo despues del return, NO SE VA A EJECUTAR

suma(20, 30)
suma(40, 50)
suma(50, 50)


const resultado = suma(20, 30);
console.log(`Este es el resultado`, resultado);