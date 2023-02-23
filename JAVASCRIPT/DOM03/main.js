//Creación de elementos

// const parrafo = `<p></p>`

const parrafo = document.createElement('p')
const textContentParrafo = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam delectus rem provident repellendus quia, magni cumque repudiandae perferendis cum dolores eius quae facere fugit dicta similique ab fugiat consequatur!')
parrafo.appendChild(textContentParrafo)
parrafo.setAttribute('id', 'parrafo')


const titulo = document.createElement('h3')
const textContentTitulo = document.createTextNode('Titulo h3')
titulo.appendChild(textContentTitulo)
titulo.setAttribute('class', 'titulo')


const div = document.createElement('div')
div.setAttribute('class', 'container')


div.appendChild(titulo)
div.appendChild(parrafo)


// const stringTotal = `<div class="container"><h3 class="titulo">Titulo h3</h3><p id="parrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam delectus rem provident repellendus quia, magni cumque repudiandae perferendis cum dolores eius quae facere fugit dicta similique ab fugiat consequatur!</p></div>`

const root = document.getElementById('root')
root.appendChild(div)

