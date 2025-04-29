const prompt = require('prompt-sync')()

let peso = Number(prompt('Informe o peso: '))
let altura = Number(prompt('Informe a altura: '))

if (altura > 100) {
  altura = altura / 100
}

let imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.5) {
  console.log('Baixo peso')
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log('Peso normal')
} else if (imc >= 25 && imc <= 29.9) {
  console.log('Sobrepeso')
} else {
  console.log('Obesidade')
}
