const promt = require('prompt-sync')();

let valor = 0
let limite = 5
let valorFinal = 0

for (let counter = 1; counter <= limite; counter++) {
  switch (counter) {
    case 1:
      valor = Number(promt('Digite o primeiro valor: '))
      break;
    case 2:
      valor = Number(promt('Digite o segundo valor: '))
      break;
    case 3:
      valor = Number(promt('Digite o terceiro valor: '))
      break;
    case 4:
      valor = Number(promt('Digite o quarto valor: '))
      break;
    case 5:
      valor = Number(promt('Digite o quinto valor: '))
      break;
  }
  valorFinal += valor
}
console.log(`A soma total é: ${valorFinal}`)