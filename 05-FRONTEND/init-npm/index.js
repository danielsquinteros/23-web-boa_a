// FORMATO COMMONJS
// const operaciones = require('./utils/operaciones');
// const { suma, resta } = require('./utils/operaciones');

//FORMATO ECM -> REACT
import operaciones from './utils/operaciones.js'
const { suma, resta } = operaciones;

const resSuma = suma(2, 3)
const resResta = resta(2, 3)

// const resSuma = suma(2, 3)
// const resResta = resta(2, 3)
console.log(resSuma, resResta)
