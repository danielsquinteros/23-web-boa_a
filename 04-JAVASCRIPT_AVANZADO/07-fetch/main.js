console.log('hola mundo')
const buttonImageDayNasa = document.getElementById('buttonImageNasa')
const root = document.getElementById('root')

// La función que va a encerrar mi promesa le pondre getData
// Yo sé que existe una proceso que se demorara

// async / await -> try un catch para tomar el resolve y el reject correspondientmente
// const getData = async (id) => {
//     // para lo que viene del resolve encierralo dentro de un try
//     try {
//         const bookEncontrado = await getBookByIdPromise(id);
//         console.log('=============')
//         console.log('FORMA NUEVA')
//         console.log('Book encontrado', bookEncontrado)
//         console.log('=============')
//     } catch(err){
//         // para lo que viene del reject encierralo dentro un catch
//         console.log('Es un error de la forma nueva', err)
//     }
// }

// getData(0)

const renderHTML = (title, description, date, imageUrl) => {
    return `
    <div class="card mb-3" style="max-width: 50%;">
        <div class="row g-0">
            <div class="col-md-12">
            <img src=${imageUrl} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-12">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><small class="text-body-secondary">${date}</small></p>
            </div>
            </div>
        </div>
    </div> 
    `
}



buttonImageDayNasa.addEventListener('click', async () => {
    const inputDateNow = document.getElementById('inputDate').value
    try {
        const respuesta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=agNJHv1TPYM346Y4e6cRbyfJik3SwuSaE101mqDb&date=${inputDateNow}`, {
            method: "GET"
        })
        const resJson = await respuesta.json()
        root.innerHTML = renderHTML(resJson.title, resJson.explanation, resJson.date, resJson.url)
    } catch (error) {
        console.log(error)
    }
})