console.log('Estoy conectado');

alert('¡Hola Bienvenido al juego “Mortal Life P3”!');
var name = prompt('Ingresa tu nombre');
var age = prompt('Ingresa tu edad');
var height = prompt('Ingresa tu altura en CM');

var age_number = Number(age)
var height_number = Number(height)

console.log(typeof age_number);
console.log(typeof height_number);

if(age_number >= 18) {
    if(height_number >= 160) {
        alert(`${name} estas mamadisim@, puedes ingresar 🎉`)
    } else {
        alert(`${name} tas bien xikito en estatura 😞`)
    }
} else {
    alert(`${name} tas bien xikito en edad 😞`)
}