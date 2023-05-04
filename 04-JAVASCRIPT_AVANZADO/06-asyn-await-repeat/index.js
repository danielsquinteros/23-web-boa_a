const getBookByIdPromise = (id) => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            const booksDB = [
                {
                    id: 1,
                    title: "Nunca te pares",
                    autor: 'Phil Knight',
                    tag: 'Emprendimiento'
                },
                {
                    id: 2,
                    title: 'Los lideres comen al final',
                    autor: 'Simon Sinek',
                    tag: 'Auto-conocimiento'
                },
                {
                    id: 3,
                    title: 'Hábitos Atómicos',
                    autor: 'James Clear',
                    tag: 'Auto-conocimiento'
                }
            ]
            const book = booksDB.find(book => book.id === id)
            if(!book){
                reject('Book not found')
            } else {
                resolve(book)
            }
        }, 2000)
    })
    return promise
}

// Ocupemos las palabras reservadas async / await
// async -> asíncronico -> se va a demorar en resolver, así que puedes hacer otra cosa mientras
// await -> que vas a esperar, aqui va la promesa, va a esperar la promesa

// El async solo se implementa con funciones

// ESTA PROMESA QUE ESTA CON THEN Y CATCH PARA PASARLA ASYNC / AWAIT TENGO ENCERRARLA DENTRO DE UNA FUNCIÓN
// ESTA FUNCIÓN NO ES UNA FUNCIÓN NORMAL, SINO QUE ES UNA FUNCIÓN ASICRONICA

getBookByIdPromise(0)
.then(res => {
    console.log('FORMA ANTIGUA')
    console.log('Existe el libro', res)
    console.log('=============')
})
.catch(err => {
    console.log('FORMA ANTIGUA')
    console.log('No se encontro el libro', err)
    console.log('=============')
})

// La función que va a encerrar mi promesa le pondre getData
// Yo sé que existe una proceso que se demorara

// async / await -> try un catch para tomar el resolve y el reject correspondientmente
const getData = async (id) => {
    // para lo que viene del resolve encierralo dentro de un try
    try {
        const bookEncontrado = await getBookByIdPromise(id);
        console.log('=============')
        console.log('FORMA NUEVA')
        console.log('Book encontrado', bookEncontrado)
        console.log('=============')
    } catch(err){
        // para lo que viene del reject encierralo dentro un catch
        console.log('Es un error de la forma nueva', err)
    }
}

getData(0)