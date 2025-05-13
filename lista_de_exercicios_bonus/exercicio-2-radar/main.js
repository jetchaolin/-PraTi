const prompt = require('prompt-sync')()

let velocidade = Number(prompt('Qual a velocidade do carro? '))

if (isNaN(velocidade)) {
  console.log('Velocidade inválida')
  return
}

let radar = 80
let multa = (velocidade - radar) * 5

if (velocidade > radar) {
  console.log(`Voce foi multado em R$ ${multa.toFixed(2)}!`)
} else {
  console.log(`Velocidade dentro do limite`)
}
