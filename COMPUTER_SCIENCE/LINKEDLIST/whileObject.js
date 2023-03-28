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

// console.log(linkedList.head.next.next.next.next)
// undefined = falsy = false
// null = falsy = false
//   if(null){
//     console.log('NO ES NULO')
//   } else {
//     console.log('ES NULO')
//   }
//   // while = mientras

// console.log('Nodo 1', linkedList.head)
// console.log('Nodo 2', linkedList.head.next)
// console.log('Nodo 3', linkedList.head.next.next)
// console.log('Nodo 4', linkedList.head.next.next.next)
// console.log('Nodo 5', linkedList.head.next.next.next.next)

// while funciona si existe un TRUE
// como yo sé que null es un falsy (false) mi while parará
while(linkedList.head.next){
    console.log(linkedList.head)
    linkedList.head = linkedList.head.next
}