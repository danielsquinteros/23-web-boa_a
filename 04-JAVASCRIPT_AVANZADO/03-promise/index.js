console.log('Hola mundo!')


// La promesa recibe una función que tenga dos parámetros 
//El primer parámetro de la función es si se cumple
// El segundo parámetro de la función es si NO se cumple

let number = 51;

const p = new Promise((resolve, reject) => {
    if(number >= 50) {
        resolve('parametroAlThen')
    } else {
        reject('parametroAlCatch')
    }
})

p.then((parametroAlThen) => {
    // console.log('1 - SE RESOLVIO',parametroAlThen )
})
.catch((parametroAlCath) => {
    // console.log('2 - ERROR', parametroAlCath)
})


/* SEGUNDO EJEMPLO */

/* OPERACIÓN SINCRONA */
// OPERACIÓN SINCRONICA

let y = 10;

// console.log('1. Proceso iniciado')

setTimeout(() => {
    y = y * 3 + 2
    // console.log('2. Proceso termiando')
}, 2000)

// console.log('3. el resultado es: ', y)

/* 
1. Proceso iniciado
3. el resultado es:  10
2. Proceso termiando
*/


/* OPERACIÓN ASINCRONA */
let x = 20;

// console.log('1. Proceso iniciado');

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        x = x + 20
        // console.log('2. Proceso terminado')
        resolve(x);
    }, 2000)
})

promesa.then(res => {
    // console.log('3. El resultado de x es: ', res)
})

const profesor = {
    name: "Daniel",
    efectivo: 20000
}

const completo = {
    price: 5000
}

const day = {
    alumnis: [
        "Patricio", "Andro", "Abbias", "David", "Axel"
    ]
}

const promesaCompraCompleto = new Promise((resolve, reject) => {
    setTimeout(() => {
        // profesor.efectivo (20.000) / completo (2.300) = 8,69
        const completoQueMeAlcanzan = profesor.efectivo / completo.price
        if(completoQueMeAlcanzan >= day.alumnis.length){
            resolve(`Si puedo comprar completos, ${completoQueMeAlcanzan}, ${day.alumnis.length} `)
        } else {
            reject(`No pudo comprar completo por que no me alcanza el dinero', ${completoQueMeAlcanzan}, ${day.alumnis.length} `)
        }
    }, 5000)
})

promesaCompraCompleto
.then((message) => {
    console.log('Se cumplio', message)
})
.catch((error) => {
    console.log('No se cumplio', error)
})