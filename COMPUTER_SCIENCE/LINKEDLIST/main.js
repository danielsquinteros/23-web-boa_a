console.log('Funciona bien 😄')

/*
const linkedList = {
  head: {
    value: 7,
    next: {
      value: 10,
      next: {
        value: 20,
        next: {
           value: 4,
           next: null
        }
      }
    }
  }
}
*/

//La clase es el molde de como va a hacer mi objeto 

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
// const objetoDelMolde = new Node("Daniel", null)
// console.log('---->', objetoDelMolde)

//LinkedList almacena todos los nodos
//por ende, dentro DE LinkedList tengo que crearlos
class LinkedList {
    constructor(){
        this.head = null;
    }

    insertNode(value){
        //null dado que aquí va el otro nodo, pero lo voy agregar despues, por eso es null
        const newNode = new Node(value, null)
        if(this.head === null){
            // { head : { value: "Marcos", next: null} }
            this.head = newNode;
        } else {
             //Llegar a la ultima habitación la que es nula
             let current = this.head;
             while(current.next){
                current = current.next
             }
             current.next = newNode;
        }
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

    deleteNodeFromValue(value){
        if(this.head.value === value){
            this.head = this.head.next;
        } else {
            let current = this.head
            while(current.next){
                if(current.next.value === value){
                    //Encontrar el nodo y reemplazrlo
                    current.next = current.next.next;
                    return;
                }
                // Llegar al ultimo nodo que es null y parar el while  
                current = current.next
            }
        }
    }
}

const linkedList = new LinkedList()
linkedList.insertNode("Marcos") 
linkedList.insertNode("Abbias") 
linkedList.insertNode("Daniel") 
linkedList.deleteNodeFromValue("Daniel") 
linkedList.deleteNodeFromValue("Abbias") 
linkedList.insertNode("Benjamin") 
// linkedList.print() 

// console.log(linkedList)

const parcela = {
    casa: {
      pasillo: {
        habitacion_1: {
          closet_1: null,
          baño: null
        },
        habitacion_2: null
      },
      cocina: null
    }
  }

const current = parcela.casa;
while(current.pasillo){
    console.log(current)
    //current.pasillo.habitacion_2 = null
    current.pasillo = current.pasillo.habitacion_2
}