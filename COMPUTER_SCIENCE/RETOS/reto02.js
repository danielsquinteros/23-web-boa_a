const database_choferes = [
    {
        name: "Felipe Andrade",
        recorrido: "A2",
	    reclamos: 19,
        total_pasajeros: [
            {
                mes: "Marzo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 130,
                            martes: 240,
                            miércoles: 135,
                            jueves: 250,
                            viernes: 345,
                            sábado: 270,
                            domingo: 255
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Camilo Gallardo",
        recorrido: "B2",
		reclamos: 439,
        total_pasajeros: [
            {
                mes: "Abril",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 188,
                            martes: 244,
                            miércoles: 145,
                            jueves: 225,
                            viernes: 544,
                            sábado: 277,
                            domingo: 188
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Diego Moreira",
        recorrido: "B2",
		reclamos: 33,
        total_pasajeros: [
            {
                mes: "Mayo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 422,
                            martes: 555,
                            miércoles: 635,
                            jueves: 878,
                            viernes: 765,
                            sábado: 434,
                            domingo: 285
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Roberto Rodriguez",
        recorrido: "A2",
 		reclamos: 66,
        total_pasajeros: [
            {
                mes: "Marzo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 222,
                            martes: 422,
                            miércoles: 314,
                            jueves: 349,
                            viernes: 228,
                            sábado: 490,
                            domingo: 244
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Daniel Quinteros",
        recorrido: "A2",
		reclamos: 90,
        total_pasajeros: [
            {
                mes: "Marzo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 460,
                            martes: 330,
                            miércoles: 455,
                            jueves: 225,
                            viernes: 114,
                            sábado: 447,
                            domingo: 335
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Diego Sepulveda",
        recorrido: "A2",
		reclamos: 10,
        total_pasajeros: [
            {
                mes: "Marzo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 134,
                            martes: 449,
                            miércoles: 315,
                            jueves: 620,
                            viernes: 775,
                            sábado: 323,
                            domingo: 835
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Felipe Sepulveda",
        recorrido: "A2",
		reclamos: 80,
        total_pasajeros: [
            {
                mes: "Marzo",
                semanas: [
                    {
                        semana: 1,
                        días : {
                            lunes: 832,
                            martes: 951,
                            miércoles: 225,
                            jueves: 740,
                            viernes: 735,
                            sábado: 700,
                            domingo: 320
                        }
                    }
                ]
            }
        ]
    },
]

// La empresa **DEV.F Transport** contrato a un nuevo contador con experiencia en programación, dado que quiere empezar a utilizar tecnología para la toma de decisiones, creando el área **Inteligencia de Negocios - DEV.F Transport.**
// El gerente te llama dado que eres el nuevo empleado, para que dentro de un mes le puedas responder las siguientes preguntas:

// **Nivel de pregunta D (Dificultad)**
// - ¿Qué conductores realizan el recorrido `A2`?
// - ¿De los conductores que realizan el recorrido `A2`, cuales tienen más reclamos?

// **Nivel de pregunta D+**
// - ¿En qué recorrido existen más reclamos `A2` o `B2`?

// **Nivel de pregunta D++**
// - ¿De los conductores que realizan el recorrido `A2`, sacar el % de reclamos en función de la cantidad de pasajeros que han recibido?

// **Nivel de pregunta D+++**
// - La empresa busca disminuir la cantidad de choferes para semana santa (Primer semana de abril) ya que quiere que la mayoría pueda disfrutar con su familia, por ende, te piden sacar el promedio de pasajeros que suben en el recorrido A2 la primera semana de abril (por cada 40 pasajeros se necesita un chofer).
//     - ¿Cuántos choferes se necesitarán para la primera semana de abril?