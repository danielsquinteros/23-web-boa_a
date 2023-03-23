// const stackO = { }
// stackO['0'] = 'Plato 1' 

// console.log(stackO)

class Stack {
    constructor(){
        // Almacena los items, los platos
        this.stack = {}

        //Va a ser el indice del ultimo elemento que ha entrado a la fila

        this.counter = 0
    }

    push(element){

        this.stack[this.counter] = element
        this.counter = this.counter + 1
        console.log('---->', this.counter)
    }

    pop(){
        let deletedElement
        if(this.counter >= 0){
            //Existen elementos, puedes borrar
            this.counter = this.counter - 1
            delete this.stack[this.counter]
        } else {
            return null
        }
    }

    getSize(){
        return this.counter
    }

    isEmpty(){
        if(this.getSize() > 0){
            //No esta vacio por eso es false
            return false
        } else {
            //Si esta vacio por eso es true
            return true
        }
    }

    peek(){
        return this.stack[this.counter - 1]
    }

    print(){
        console.log(this.stack)
    }
}

const stack = new Stack()
stack.push('Plato 1')
stack.push('Plato 2')
stack.push('Plato 3')
stack.push('Plato 4')
stack.push('Plato 5')
stack.push('Plato 6')
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.getSize())
console.log(stack.isEmpty())
