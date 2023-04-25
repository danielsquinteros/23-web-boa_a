const getUsers = () => {
    // Tiempo que se demora la API en ir a la base de datos y traerme todos los usuarios
    setTimeout(() => {
        const users = [
            {
                id: 1,
                name: "Abbias"
            },
            {
                id: 2,
                name: "Patricio"
            }
        ]
        return users;
    }, 500)
}

// const users = getUsers(); 
// console.log(users) //Undefined


const getUserCallback = (callback) => {
    // Tiempo que se demora la API en ir a la base de datos y traerme todos los usuarios
    setTimeout(() => {
        const users = [
            {
                id: 1,
                name: "Abbias"
            },
            {
                id: 2,
                name: "Patricio"
            }
        ]
        callback(users)
    }, 2000)
}

// const usersCallback = getUserCallback(
//     (users) => { console.log('Respuesta asíncrona', users)}
// );


const getBooks= () => {
    setTimeout(() => {
        const booksDB = [
            { 
                id: 1,
                title: "Nunca te pares",
                autor: 'Phil Knight'
            }, 
            { 
                id: 2,
                title: 'Los lideres comen al final',
                autor: 'Simon Sinek'
            },
            { 
                id: 3,
                title: 'Hábitos Atómicos',
                autor: 'James Clear' 
            }
        ]
        return booksDB;
    }, 2000)
}

// const books = getBooks();

//CALLBACK VIDA REAL
const getAllBooksCB = (callback) => {
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
        callback(booksDB)
    }, 2000)
}
const booksCB = getAllBooksCB(
    (books) => {
        console.log('Books callback', books)
    }
);


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
getBookById(
    1, 
    (err, book) => {
        if(err){
            return console.log(err.message)
        } else {
            console.log(book)
        }
    }
);
