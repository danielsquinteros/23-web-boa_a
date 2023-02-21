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
console.log(padre);

//childElementCount: cuenta todos los hijos
const hijosDelPadre = padre.childElementCount

//firstElementChild: accedo al primer hijo
const primerHijo = padre.firstElementChild

//lastElementChild: accedo al ultimo hijo
const ultimoHijo = padre.lastElementChild

//children: todos los hijos
const todosLosHijo = padre.children


const hijo1 = document.getElementsByClassName('hijo-1')
console.log('padreeee', hijo1[0].parentElement);


//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS
//MODIFICAR ELEMENTOS

// Para modificar los elementos primero y SI O SI, tengo que obtenerlo
// elemento.innerHTML =  'nuevo html' -> Cambiar el contenido de un elemento HTML
// elemento.attribute = 'nuevo valor'	-> Cambiar el atributo de un elemento HTML
// elemento.style.property = 'nuevo estilo' ->	Cambiar el estilo de un elemento HTML
// elemento.setAttribute(atributo, 'valor') -> También podemos cambiar atributos con el método setAttribute()


// element.className = 'nuevas clases'✅
// element.textContent = 'nuevo texto'✅

//getElementsByTagName -> arreglo 
console.log(body);
body[0].className = 'background-color-aqua'


parrafo.textContent = 'Hola desde JS'