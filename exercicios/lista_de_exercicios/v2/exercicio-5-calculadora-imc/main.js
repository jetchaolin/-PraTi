const prompt = require('prompt-sync')()

let peso = Number(prompt('Informe o peso: '))
let altura = Number(prompt('Informe a altura: '))
if (isNaN(altura) || isNaN(peso)) {
  console.log('Valores inválidos')
  return
} else if (altura > 100) {
  altura = altura / 100
  console.log(`Altura: ${altura}m`)
} else if (altura >= 10 && altura < 100) {
  altura = altura / 10
  console.log(`Altura: ${altura}0m`)
}

let imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.5) {
  console.log(`IMC: ${imc}\nBaixo peso`)
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log(`IMC: ${imc}\nPeso normal`)
} else if (imc >= 25 && imc <= 29.9) {
  console.log(`IMC: ${imc}\nSobrepeso`)
} else {
  console.log(`IMC: ${imc}\nObesidade`)
}
