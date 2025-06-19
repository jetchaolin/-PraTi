class Lista {
  constructor(nome) {
    this.nome = nome
    this.pedidos = []
  }

  addOrder(objeto) {
    this.pedidos.push(objeto)
  }
}

class Pedido {
  constructor(cliente, total) {
    this.cliente = cliente
    this.total = total
  }
}

let ListaDeClientes = new Lista('Clientes')

let pedido_01 = new Pedido('Glauber', 50)
let pedido_02 = new Pedido('Samia', 30)
let pedido_03 = new Pedido('Cleber', 45)
let pedido_04 = new Pedido('Henrique', 82)
let pedido_05 = new Pedido('Fernanda', 21)
let pedido_06 = new Pedido('Glauber', 35)
let pedido_07 = new Pedido('Samia', 8)
let pedido_08 = new Pedido('Cleber', 5)
let pedido_09 = new Pedido('Henrique', 40)
let pedido_10 = new Pedido('Fernanda', 25)
let pedido_11 = new Pedido('Glauber', 28)
let pedido_12 = new Pedido('Cleber', 61)
let pedido_13 = new Pedido('Henrique', 12)
let pedido_14 = new Pedido('Fernanda', 132)
let pedido_15 = new Pedido('Fernanda', 17)

ListaDeClientes.addOrder(pedido_01)
ListaDeClientes.addOrder(pedido_02)
ListaDeClientes.addOrder(pedido_03)
ListaDeClientes.addOrder(pedido_04)
ListaDeClientes.addOrder(pedido_05)
ListaDeClientes.addOrder(pedido_06)
ListaDeClientes.addOrder(pedido_07)
ListaDeClientes.addOrder(pedido_08)
ListaDeClientes.addOrder(pedido_09)
ListaDeClientes.addOrder(pedido_10)
ListaDeClientes.addOrder(pedido_11)
ListaDeClientes.addOrder(pedido_12)
ListaDeClientes.addOrder(pedido_13)
ListaDeClientes.addOrder(pedido_14)
ListaDeClientes.addOrder(pedido_15)

let clientesTotal = ListaDeClientes.pedidos.reduce((pedidosTotal, clienteEPagamento) => { 
  let nomeDoCliente = clienteEPagamento.cliente
  
  pedidosTotal[nomeDoCliente] = (pedidosTotal[nomeDoCliente] || 0) + clienteEPagamento.total

  return pedidosTotal
}, {})

console.log(clientesTotal)