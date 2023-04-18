const database = [
    {
       name: "Camilo Garrido",
       module: "kata_js",
       exams: "10,20,30,50,70,100",
       is_active: false,
    },
    {
       name: "Nahara Casanova",
       module: "kata_intro_web",
       exams: "15,50,70,100",
       is_active: true,
    },
    {
       name: "Felipe Plaza",
       module: "kata_intro_web",
       exams: "70,20,30,50,70,100,00",
       is_active: true,
    },
    {
       name: "Franco Martinez",
       module: "kata_intro_web",
       exams: "30,100,100,100,70,100",
       is_active: true,
    },
    {
       name: "Francisca Fuentes",
       module: "kata_js",
       exams: "40,100,30,50,70,100",
       is_active: true,
    },
    {
       name: "Diego Angulo",
       module: "kata_js",
       exams: "00,30,55,90,100",
       is_active: true,
    },
]

const alumnos_reprobados = []
const alumnos_aprobados = []


database.forEach(alumno => {
    const name = alumno.name;
    const active = alumno.is_active;

    // Primer desafio -> convertir los exams a un arreglo, de string a array
    const exams = alumno.exams.split(","); //[ '10', '20', '30', '50', '70', '100' ]
    const examsNummber = []; //[ 10, 20, 30, 50, 70, 100 ]
    exams.forEach(exam => {
        examsNummber.push(parseInt(exam))
    })

    //"00,30,55,90,100" -> [ 10, 20, 30, 50, 70, 100 ] a través de:
    // 1. split(",")
    // 2. a través de un forEach que transforma los textos a numero y luego pushea a examsNumber" 

    if(active === true){
        //Condición 1 - Cumplio, esta activo
        if(examsNummber.length >= 5){
            //Condición 2 -  Cumplio con tener más de 5 calificaciones

            let isNotasMayorDiez = true; //Bandera o switcher
            // Condición 3 - Voy a revisar cada nota, si todas son mayor a 10 devolveré true, si solo una no es mayor a 10 devolveré false
            examsNummber.forEach(exam => {
                if(exam <= 10){
                    isNotasMayorDiez = false;
                }
            })

            if(isNotasMayorDiez === true){
                // Todas son mayor a 10
                alumnos_aprobados.push(name)
            } else {
                alumnos_reprobados.push(name)
            }
        } else {
            alumnos_reprobados.push(name)
        }
    } else {
        alumnos_reprobados.push(name)
    }
});


console.log('aprobados ---->', alumnos_aprobados)
console.log('reprobados ---->', alumnos_reprobados)