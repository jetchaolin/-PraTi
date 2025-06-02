// let car = {
//   nome: 'McQueen',
//   cor: 'vermelho',
// }

// console.log(car.nome)

// class carExemplo {
//   constructor(nome, cor) {
//     this.nome = nome
//     this.cor = cor
//   }
// }
// let carro1 = new carExemplo('Fusca', 'azul')

// console.log(carro1.nome)
// console.log(carro1.cor)

//

class Node {
  constructor(valor) {
    this.valor = valor
    this.anterior = null
    this.proximo = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  inserirInicio(v) {
    let novo = new Node(v)
    novo.next = this.head
    if (this.head) {
      this.head.anterior = novo
    }
    this.head = novo
  }

  inserirFim() {

  }

  imprimirFrente() {

  }

  impromirAtras() {
    
  }
}


class LinkedList {
  constructor() {
    this.head = null
  }

  inserirInicio(v) {
    let novo = new Node(v)
    novo.proximo = this.head
    this.head = novo
  }

  imprimir() {
    let atual = this.head
    let str = ''
    while(atual) {
      str += atual.valor + ' -> '
      atual = atual.proximo
    }
    str += 'null'
    console.log(str)
  }
}

let lista = new LinkedList()

lista.inserirInicio(10)
lista.inserirInicio(9)
lista.inserirInicio(8)

lista.imprimir()