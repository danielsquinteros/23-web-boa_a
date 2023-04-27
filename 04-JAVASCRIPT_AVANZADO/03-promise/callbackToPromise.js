const getBookById = (id, callback) => {
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
            const error = new Error;
            error.message = 'Libro no encontrado'
            return callback(error, null)
        } else {
            callback(null, book)
        }
    }, 2000)
}
// getBookById(
//     1, 
//     (err, book) => {
//         if(err){
//             console.log(err.message)
//         } else {
//             console.log(book)
//         }
//     }
// );

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

/* Cuando la promesa esta dentro de una función, 
yo tengo que retonar la promesa, para así llegar al camino que solucionar el ejercicio
*/
getBookByIdPromise(0)
.then(res => {
    console.log('Existe el libro', res)
})
.catch(err => {
    console.log('No se encontro el libro', err)
})

