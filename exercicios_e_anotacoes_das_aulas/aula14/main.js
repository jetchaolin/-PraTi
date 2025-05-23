// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null
//     this.size = 0
//   }

//   push(value) {
//     let node = new Node(value)
//     node.next = this.top
//     this.top = node
//     this.size++
//   }

//   pop(value) {
//     if(!this.top) return null
//     let poppedValue = this.top.value
//     this.top = this.top.next
//     return poppedValue
//   }

//   peek() {
//     if(!this.top) return null
//     return this.top.value
//   }

//   isEmpty() {
//     return this.top === null
//   }
// }

// //
  

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    let newNode = new Node(value)
    if(this.rear) {
      this.rear.next = newNode
      this.rear = newNode
    } else {
      this.first = this.last = newNode
    }
    this.size++
  }

  dequeue() {
    if(!this.first) return null
    let dequeuedValue = this.first.value
    this.first = this.first.next
    this.size--
    return dequeuedValue
  }
}