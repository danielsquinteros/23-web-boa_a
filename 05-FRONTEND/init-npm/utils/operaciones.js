const suma =(a, b) => {
    return a + b
}

const resta = (a, b) => {
    return a - b
}


// FORMATO COMMONJS
// module.exports = { suma, resta };


//FORMATO ECM
// Aquí tengo que importarlo del otro archivo pero si o si tiene que ser el mismo nombre
// export { suma };

// La opción que van a ver en React   
// export default suma;
export default { suma, resta };