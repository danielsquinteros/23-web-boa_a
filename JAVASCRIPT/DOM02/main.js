console.log('hola desde js!');

const button = document.getElementById('button')

//addEventListener


//Método que recibe dos parametros
//El primer parametro que recibe es el tipo de evento
//El segundo parametro que recibe es una función que ejecuta lo que necesito hacer
//Respecto a la función (del segundo parametro) puede recibir 

//Tipos de eventos
// 1. Click -> El usuario hizo click
// 2. submit -> Funciona cuando uno envia un formulario
// 3. mouseover ->  El usuario pasó su mouse encima del botón
// 4. mouseout -> El usuario quitó su mouse del botón
// 5. mousemove -> El usuario movio su mouse del botón
// 6. change -> Cuando el elemento cambia de valor (esta clickeado y luego se suelta)


button.addEventListener('click', (event) => {
    console.log('haz hecho click');
    // event.target me trae  el elemento que disparo el evento
    event.target.style.color = 'red'
})

button.addEventListener('mouseover', (event) => {
    event.target.textContent = 'pasaste por encima, cuidado😭!'
})
button.addEventListener('mouseout', (event) => {
    event.target.textContent = 'saliste, por favor, vuelve 💔!'
})
button.addEventListener('mousemove', (event) => {
    event.target.textContent = 'te estas moviendo🏃🏻!'
})

const inputName = document.getElementById('name')
inputName.addEventListener('keydown', (e) => { 
    if(e.code === "Space"){
        alert('Oye bro, quieres jugar conmigo?, no puedes agregar un espacio')
    }
}) 

inputName.addEventListener('change', (event) => {
    console.log(event.target.value);
})

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    console.log(email.value, password.value);
})

const formSuma = document.getElementById('formSuma')

formSuma.addEventListener('submit', (event)=>{
    event.preventDefault();
    const value1 = document.getElementById('valor1')
    const value2 = document.getElementById('valor2')

    const resultado = parseInt(value1.value) + parseInt(value2.value)

    const root = document.getElementById('root');
    root.innerHTML = root.innerHTML + `<p>El resultado es: ${resultado}</p>`
})


