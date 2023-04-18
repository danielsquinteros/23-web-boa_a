console.log('hola mundo')

// Objeto persona
let persona = {
    name: "Felipe",
    nota: 50,
    edad: 27,
    estatura: 160,
    peso: 80,
    hermanos: ["Fabian", "Andro"],
    is_soltero: false,
    // is_student: true,
}

console.warn('Acceder a propiedad')
console.log('Forma 1', persona.nota)
console.log('Forma 2', persona['nota'])


// Agregandole una nueva propiedad
persona.is_student = true;

console.log(persona)

const personas = [
    "hola",
    12,
    false,
    ["hola", "mundo"],
    {
        name: "Felipe",
        nota: 50,
        edad: 27,
        estatura: 160,
        peso: 80,
        hermanos: ["Fabian", "Andro"],
        is_soltero: false,
        // is_student: true,
    },
]