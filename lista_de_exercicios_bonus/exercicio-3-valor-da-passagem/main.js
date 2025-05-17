const prompt = require('prompt-sync')()

let distancia = Number(prompt('Qual a distancia da viagem? '))
let limite = 200
let preco = 0.50
let desconto = 0.45

if (isNaN(distancia)) {
  console.log('Distância inválida')
  return
}

if (distancia <= limite) {
  console.log(`O valor da passagem é R$ ${(distancia * preco).toFixed(2)}`)
} else {
  console.log(`O valor da passagem com desconto é R$ ${(distancia * desconto).toFixed(2)}`)
}