console.log('Hola desde main.js');

//OBTENER ELEMENTOS
//OBTENER ELEMENTOS
//OBTENER ELEMENTOS
//OBTENER ELEMENTOS
//OBTENER ELEMENTOS


//getElementById: Obtener un elemento por su ID.
//getElementsByClassName: Obtener elementos por sus clase.
//getElementsByTagName: Obtener todos los elemento por Tagname (div, section, video).
//querySelectorAll: Obtengo el TODOS elemento por su selector.

//OBTENER ELEMENTOS DESDE EL PADRE
//childElementCount: cuenta todos los hijos
//firstElementChild: accedo al primer hijo
//lastElementChild: accedo al ultimo hijo
//children: todos los hijos

//OBTENER AL ELEMENTO PADRE DESDE EL HIJO
//parentElement: obtener al elemento hijo desde el padre


const parrafo = document.getElementById('parrafo')
// console.log(parrafo);

const titulo = document.getElementsByClassName('titulo');
// console.log(titulo);

const divContainer = document.getElementsByTagName('div')
// console.log(divContainer);

const body = document.getElementsByTagName('body')
// console.log(body);

const titulosSelector = document.querySelectorAll('.titulo')
// console.log(titulosSelector);

const parrafoSelector = document.querySelectorAll('#parrafo')
// console.log(parrafoSelector);

const padre = document.getElementById('padre')
// console.log(padre);

//childElementCount: cuenta todos los hijos
const hijosDelPadre = padre.childElementCount

//firstElementChild: accedo al primer hijo
const primerHijo = padre.firstElementChild

//lastElementChild: accedo al ultimo hijo
const ultimoHijo = padre.lastElementChild

//children: todos los hijos
const todosLosHijo = padre.children


const hijo1 = document.getElementsByClassName('hijo-1')
// console.log('padreeee', hijo1[0].parentElement);


//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS

// Para modificar los elementos primero y SI O SI, tengo que obtenerlo
// 1. elemento.innerHTML ✅ =  'nuevo html' -> Cambiar el contenido de un elemento HTML
// 2. elemento.attributes✅ -> me muestra los atributos que tiene un elemento de HTML
// 3. elemento.style.property✅ = 'nuevo estilo' ->	Cambiar el estilo de un elemento HTML
// 4. elemento.setAttribute(atributo, 'valor')✅ -> También podemos cambiar atributos con el método setAttribute()
// 5. element.className✅ = 'nuevas clases'
// 6. element.textContent✅ = 'nuevo texto'

const padreNuevo = document.getElementById('padre')
padreNuevo.innerHTML = padreNuevo.innerHTML + '<p id="hijo-5">Hijo 5 (JS)</p>'
// padreNuevo.innerHTML += '<p class="hijo-5">Hijo 5 (JS)</p>'

const hijo5 = document.getElementById('hijo-5')
hijo5.className = 'background-color-aqua'
console.log(hijo5);
hijo5.textContent = 'Hijo 5'
hijo5.setAttribute('class', 'background-color-red');

hijo5.style.backgroundColor = '#FF00FF'
hijo5.style.fontSize = '30px'
hijo5.style.fontFamily = 'Arial'

 
const sub = document.getElementById('subtitulo')

sub.style.fontSize = '60px';
sub.textContent = 'Titulo h2 JS';
sub.style.backgroundColor = 'red';
