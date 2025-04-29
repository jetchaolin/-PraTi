const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite o valor 1: '))
let valor2 = Number(prompt('Digite o valor 2: '))

if (valor1 > valor2) {
  console.log(`Valores\n-${valor2}\n-${valor1}`)
} else {
  console.log(`Valores\n-${valor1}\n-${valor2}`)  
}
