class Queue {
    constructor(){
        this.items = {}
        this.front = 0
        this.end = 0
    }
    //Agregar
    enqueue(element){
        this.items[this.end] = element
        this.end++
    }
    //Eliminar
    dequeue(){
        if(this.front === this.end){
            return null
        } else {
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        }
    }
    getSize(){
        return this.end - this.front
    }
    isEmpty(){
        if(this.getSize() === 0){
            return true
        } else {
            return false
        }
    }

    peek(){
        if(this.getSize() === 0){
            return null
        }
        return this.items[this.front]
    }

    print(){
        console.log(this.items)
    }
}

const cola = new Queue()
cola.enqueue('Abbias')
cola.enqueue('Daniel')
cola.enqueue('Martyn')
cola.enqueue('Andro')
cola.enqueue('Patricio')
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
console.log(cola)