class Product {
  constructor(tipo) {
    this.tipo = tipo
    this.produtos = []
  }

  addProduct(produto) {
    this.produtos.push(produto)
  }
}

class Garrafa {
  constructor(modelo, marca, preco) {
    this.marca = marca
    this.nome = modelo
    this.preco = preco
  }
}

let Garrafas = new Product('Garrafa')

let garrafa01 = new Garrafa('Quick Flip', 'Stanley', 300)
let garrafa02 = new Garrafa('Quencher Protour', 'Stanley', 360)
let garrafa03 = new Garrafa('Aerolight Flip Straw Splash', 'Stanley', 269)
let garrafa04 = new Garrafa('Quencher Rose Quartz', 'Stanley', 319)
let garrafa05 = new Garrafa('Aerolight™ Transit', 'Stanley', 259)

Garrafas.addProduct(garrafa01)
Garrafas.addProduct(garrafa02)
Garrafas.addProduct(garrafa03)
Garrafas.addProduct(garrafa04)
Garrafas.addProduct(garrafa05)

function filterProductName(produtos) {
  return produtos.map((x) => x.nome)
}

function productsSortedByPrice(produtos) {
  let sorted = produtos.sort((a, b) => a.preco - b.preco)
  return filterProductName(sorted)
}
console.log(productsSortedByPrice(Garrafas.produtos))