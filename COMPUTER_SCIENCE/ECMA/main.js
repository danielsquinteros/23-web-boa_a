// Función normal - Forma antigua
function Saludar(nombre){
    console.log(`Hola ${nombre}`);
}

Saludar("Martyn")

// Función flecha - ARROW FUNCTION - Forma nueva
const SaludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`);
}

SaludarFlecha("Martyn Flecha")

console.log('hola')

const alumnos = [
    {
      name: "Marcos",  
      age: 16
    },  
    {
      name: "Andro",  
      age: 18
    },  
    {
      name: "David",  
      age: 16
    }  
]    


// Forma 1
// i = 0
//alumnos.length = 3
for(i = 0; i < alumnos.length; i++){
    console.log('Forma 1', alumnos[i])
}    

//Forma 2 - devuelven algo - undefined
const forma2 = alumnos.forEach(
    (alumno) => {
    console.log('Forma 2', alumno)
    return alumno
    }
)

//Forma 3 - devuelven algo - return arreglo
const forma3 = alumnos.map(
    (alumno) => {
    console.log('Forma 3', alumno)
    return alumno
    }
)

console.log('Forma 2, 56',forma2)
console.log('Forma 3, 57', forma3)


const database_trabajadores = [
	{
		nombre: "Camilo P.",
		profesion: "Backend developer",
		nacionalidad: "Chile"
	},
	{
		nombre: "Felipe P.",
		profesion: "Backend developer",
		nacionalidad: "México"
	},
	{
		nombre: "Roberto A.",
		profesion: "Backend developer",
		nacionalidad: "Perú"
	},
	{
		nombre: "Nicolas A.",
		profesion: "Backend developer",
		nacionalidad: "Perú"
	},
	{
		nombre: "Daniela K.",
		profesion: "Backend developer",
		nacionalidad: "Venezuela"
	},
	{
		nombre: "David A.",
		profesion: "UX/UI",
		nacionalidad: "Chile"
	},
	{
		nombre: "Maria A.",
		profesion: "DevOps developer",
		nacionalidad: "México"
	},
	{
		nombre: "Carlos A.",
		profesion: "Frontend developer",
		nacionalidad: "Venezuela"
	}
]