console.log('Hola mundo')

const obtenerAlumniById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let alumnis = [
                {
                    id: 1,
                    name: 'Martyn'
                },
                {
                    id: 2,
                    name: 'Felipe'
                },
                {
                    id: 3,
                    name: 'Felipe'
                }
            ]
            const alumni = alumnis.find(alumni => alumni.id === id);
            // Truth si existe un valor -> true
            if(alumni){
                resolve(alumni)
            } else {
                // undefined -> false
                reject('Alumno no existe bro 😭')
            }
        }, 1000)
    })
    return promise
}

const obtenerNotasById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let notas = [
                {
                    id: 1,
                    notas: [60, 52, 70]
                },
                {
                    id: 2,
                    notas: [50, 62, 63]
                }
            ]
            const nota = notas.find(nota => nota.id === id)
            // Truthy
            // si existe un valor -> true
            if(nota){
                resolve(nota)
            } else {
                // undefined -> false
                reject('No existe notas relacionas a ese id bro 😭')
            }
        }, 2000)
    })
    return promise
}

obtenerAlumniById(3)
.then((res) => {
    console.log('1. Alumno Encontrado', res)
    obtenerNotasById(res.id)
    .then(resNotas => {
        console.log('2. Notas encontradas',resNotas)
    })
    .catch(err => {
        console.log('3. Hubo error', err)
    })
})
.catch(err => {
    console.log('4. hubo un error', err)
})

// 1. Crear las promesas de cada función
// 2. encontrar por código
// 3. Sumar las distancias y dividirlas en 60 para obtener las horas