console.log('Hola asycn/await')

const getBookByIdAsyncAwait = (id) => {
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


//¿Cual es la función que se demora en traer la información?
// getBookByIdAsyncAwait

// ¿Qué es getData? -> función que engloba la promesa
// getData es una función asíncrona porque engloba la promesa

//¿Donde pongo el await?
// El await -> va donde se encuentra la promesa, donde tiene que esperar
const getData = async (id) => {
    const bookFinded = await getBookByIdAsyncAwait(id)
    console.log('Imprime right now', bookFinded)
}

getData(1)