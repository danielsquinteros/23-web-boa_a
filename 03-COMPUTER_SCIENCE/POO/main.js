console.log('Hola mundo')

const persona01 = {
    nombre: "Carlos",
    apellido: "Ramirez",
    Saludar(){
        console.log('Hola soy Carlos')
    },
    Despedir(){
        console.log('Adios Carlos')
    },
}

//CUANDO TENGO UNA FUNCIÓN DENTRO DE UN OBJETO -> MÉTODO
//Invocar o ejecutarla
// persona01.Saludar()
// persona01.Despedir()


// Las clases son los moldes de los objetos
// EC5

/* se inicia la clase */
/* ¿Cómo se llama el molde? con MAYUSCULA */
class Persona {
    /* Constructor: ¿Qué va a tener tu molde ?*/
    constructor(nombre, apellido){
        /* this hace refencia al objeto que estamos construyendo */
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // método set y get -> OFRECE JAVASCRIT ASÍ NO TENGO QUE HACER MÉTODO
    // set -> cambiar un valor de un objeto
    // get -> obtener o leer el valor de un objeto

    get getNombre(){
        return `HOLAAAAA ${this.nombre}`
    }

    set setNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }

    set setApellido(apellidoNuevo){
        this.apellido = apellidoNuevo;
    }

    /* Función dentro de una clase = Método */
    dimeElNombre(){
        return `Tu nombre es: ${this.nombre}, y tu apellido es ${this.apellido}`
    }
}
/* se termina la clase */


/* persona02 es un object que es instancia de clase Persona */
const persona02 = new Persona("Benjamin", "Rivera")
const persona03 = new Persona("Diego", "Rivera")
const persona04 = new Persona("Felipe", "Rivera")
const persona05 = new Persona("Camilo", "Rivera")

// console.log(persona02.getNombre)
// persona02.setNombre = 'Diego'
// persona02.setApellido = 'Quinteros'
// console.log(persona02.getNombre)

// Un empleado SI O SI es una persona
class Empleado extends Persona {
    constructor(nombre, apellido, departamento, sueldo){
        /* SUPER -> nombre y apellido viene de la clase Persona, pero considerarlo en el Empleado */
        super(nombre, apellido)
        this.departamento = departamento;
        this.sueldo = sueldo;
    }

    get getDepartamento(){
        return `Tu departamento es ${this.departamento}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, apellido, departamento, sueldo, beneficios){
        super(nombre, apellido, departamento, sueldo)
        this.beneficios = beneficios
    }

    get getBeneficios(){
        return this.beneficios;
    }

    dimeNombreYBeneficios(){
        return `${super.dimeElNombre()} y tienes los siguientes beneficios ${this.beneficios}`
    }
}

// const empleado01 = new Empleado ('Daniel', 'Quinteros', 'TI', 10000000)
// console.log(empleado01.getNombre)
// empleado01.setNombre = 'Felipe'
// console.log(empleado01.getNombre)
// console.log(empleado01.dimeElNombre())

const gerente01 = new Gerente ('Daniel', 'Quinteros', 'TI', 10000000, ['vacaciones x 4 semanas', 'descuento en farmacia'] )

console.log(gerente01)
console.log(gerente01.getDepartamento)
console.log(gerente01.dimeNombreYBeneficios())


//¿Cómo yo puedo obtener el prototipo de un objeto?
//__

const gerente = {
    name: "daniel",
    __proto__: "jeje"
}
console.log(gerente.name)

console.log(gerente01.__proto__.__proto__)