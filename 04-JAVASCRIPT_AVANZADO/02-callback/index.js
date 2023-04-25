// FUNCIÓN SIN CALLBACK
const suma = (a, b) => {
    return a + b
}

const result = suma(1, 2);
console.log('Resultado sin callback', result)

// FUNCIÓN CON CALLBACK
//callback -> yo le paso una función
const sumaCallback = (a, b, callback) => {
    callback(a + b)
    // (4 + 6) => {
    //     console.log('Resultado con callback', 4 + 6)
    // }
    console.log('Linea 13')
}

const resultCallback = sumaCallback(4, 6, 
    // (a + b)
    (result) => {
        console.log('Resultado con callback', result)
    }
)

