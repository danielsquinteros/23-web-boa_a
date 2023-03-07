console.log('Hola estoy conectando al HTML');

var persona_nombre = 'Daniel'

// IF ANIDADO
if(persona_nombre === 'Martyn'){
    console.log('Hola Martyn, ¿como estas?');
} else if (persona_nombre === 'Lautaro') {
    console.log('Hola Lautaro, ¿como estas?');
} else if (persona_nombre === 'Andro') {
    console.log('Hola Andro, ¿como estas?');
} else {
    console.log('Hola, tu no eres Martyn ni Lautaro ni Andro');
}

// Operador Lógico OR ||
// Verificar si una de las condiciones es verdadera

var cliente_tiene_efectivo = false;
var cliente_tiene_debito = true;

//Efectivo o debito -> puede ser una de las dos // con que una sea true pasa
//Efectivo y debito -> necesito pagar con las dos necesariamente

if(cliente_tiene_efectivo || cliente_tiene_debito) {
    console.log('El cliente puede comprar');
} else {
    console.log('El cliente no puede comprar');
}


//Operador Lógico AND -> &&
// Tiene que ser si o si las dos true

var entrada = true;
var carnet = true;

if(entrada && carnet){
    console.log('Puedes ingresar al estadio');
} else {
    console.log('No puedes ingresar al estadio');
}

//Operador Lógico NOT  -> !

var estaVivo = false;

if(!estaVivo){ //true
    console.log('Esta vivo 🥳');
} else {
    console.log('Esta muerto 💀');
}