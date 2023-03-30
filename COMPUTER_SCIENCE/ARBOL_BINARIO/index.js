class Node {
    constructor(value){
        this.value = value; //Y este si va a recibir el valor, de una
        this.left = null;  //Génerico, lo cambiare cuando este creando el árbol
        this.right = null; //Génerico, lo cambiare cuando este creando el árbol
    }
}

class Tree {
    constructor(){
        //this.head
        this.root = null;
    }

    isEmpty(){
        if(this.root === null){
            return true //es vacio (isEmpty), SI = true;
        } else {
            return false //es vacio (isEmpty), NO = false;
        }
    }

    insertNode(value){
        if(this.isEmpty()){
            this.root = new Node(value)
            return
        }

        //Ahora tengo que considerar casos para los elementos que lleguen
        //aux va almacenar a mi los elementos de mi arbol binario
        let  aux = this.root;

        //Mientras existan nodos en mi arbol
        while(aux){
            // en este if pasan los que son menor a 5
            if(value < aux.value){
                if(aux.left == null){
                    aux.left = new Node(value)
                    return
                } else {
                    aux = aux.left
                }

            } else { //Vamos hacia la derecha
                //Me voy a la derecha por 10 no es menor a 5
                if(aux.right == null){
                    aux.right = new Node(value)
                    return
                } else {
                    //Existe un valor en el root que lleva al nodo hijo que esta la derecha, 10
                    aux = aux.right
                }
            }
        }

    }

    inOrder(node = this.root){
        if(!node){
            return
        }
        //izquierda, value = centro, right = derecha
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }

    // deletedNode(value, node = this.root){
    //     if(!node){
    //         return null;
    //     }

    //     if(node.value === value){
    //         //no tiene hijos de izquieda y derecha
    //         if(node.left === null & node.right === null){
    //             return null
    //         }

    //         if(node.right === null){
    //             return node.left
    //         }

    //         if(node.left === null){
    //             return node.right
    //         }

    //     }
    // }
}

const tree = new Tree;
console.log(tree.insertNode(6))
console.log(tree.insertNode(4))
console.log(tree.insertNode(1))
console.log(tree.insertNode(5))
console.log(tree.insertNode(8))
console.log(tree.insertNode(9))
tree.inOrder()

/* PAUSED */ 
/* ELIMINAR, PREORDER, POSTORDER */
