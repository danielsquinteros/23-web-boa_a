console.log('Hola mundo');

const getAlumniById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const alumnis = [
                {
                    id: 1,
                    name: "Axel",
                    course: "Kata Javascript Avanzado"
                },
                {
                    id: 2,
                    name: "Andro",
                    course: "Kata Javascript Avanzado"
                },
                {
                    id: 3,
                    name: "Cristian",
                    course: "Kata Javascript Avanzado"
                },
            ]
            const alumni = alumnis.find(alumni => alumni.id === id)
            if(!alumni){
                const error = new Error('Alumno no encontrado')
                reject(error)
            } 
            resolve(alumni)
        }, 1000)
    })
    return promise;
}

const promise1 = getAlumniById(1)
const promise2 = getAlumniById(2)
const promise3 = getAlumniById(3)
const promise4 = getAlumniById(4)

//Promise.all -> un buen compañero, o vamos todos o no va nadie
Promise.all([promise1, promise2,promise3, promise4])
.then((alumnis) => {
    console.log('La resolución de la promesa 1, 2, 3, 4:', alumnis)
})
.catch(err => {
    console.log(err)
})

//Promise.allSettled -> devuelve todas las promesas INDEPENDIENTE si se haya cumplido o no
Promise.allSettled([ promise1, promise2, promise3, promise4 ])
.then(res => console.log('La resolución de la promesa 1, 2, 3, 4 en allSettled', res))
.catch(err => console.log(err))