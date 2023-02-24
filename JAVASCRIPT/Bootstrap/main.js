const buttonTicket = document.getElementById('button-ticket')

const previewCard = (title, urlImage, description) => {
    return `
    <div class="card">
        <img src="${urlImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
</div>`
}

buttonTicket.addEventListener('click',(event) => {
    const root = document.getElementById('root')

    const title = document.getElementById('input1-title').value
    const image = document.getElementById('input2-image').value
    const description = document.getElementById('input3-description').value

    // Padre completo
    let div = document.createElement('div')
    div.className = "col-6 mt-2"

    let button = document.createElement('a')
    button.className = 'btn btn-outline-danger'
    button.textContent = 'Eliminar'

    div.innerHTML =  div.innerHTML + previewCard(title,image, description)

    //Ver los hijos de los hijos
    div.children[0].children[1].appendChild(button);

    // Agrego al hijo dentro de root
    root.appendChild(div)

    button.addEventListener('click', () => {
        // Elimino al hijo dentro de root
        root.removeChild(div)
    })

})

// const createCard = (title, description, image) => {
//     const date = new Date();

//     let div = document.createElement('div')
//     div.className = 'card mb-3'

//     let img = document.createElement('img')
//     img.setAttribute('src', image)
//     img.className = 'card-img-top'

//     let divCard = document.createElement('div')
//     divCard.className = 'card-body'

//     let h5 = document.createElement('h5')
//     h5.className="card-title"
//     h5.textContent = title

//     let button = document.createElement('button')
//     button.className="btn btn-outline-danger"
//     button.setAttribute('type','button')
//     button.textContent = 'Eliminar'
//     console.log(button)

//     button.addEventListener('click', () => {
//         cards.removeChild(div)
//     })

//     let pDescription = document.createElement('p')
//     pDescription.className="card-text"
//     pDescription.textContent = description


//     let pDate = document.createElement('p')
//     pDate.className="card-text"
//     pDate.innerHTML = `<small class="text-muted">${date}</small>`

//     divCard.appendChild(h5)    
//     divCard.appendChild(pDescription)    
//     divCard.appendChild(pDate)    
//     divCard.appendChild(button)    

//     div.appendChild(img)
//     div.appendChild(divCard)

//     cards.appendChild(div)

// }