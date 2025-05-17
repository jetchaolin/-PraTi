const promt = require('prompt-sync')();

let valor = 0
let limite = 5
let valorFinal = 0

console.log(`Digite ${limite} valores`)
for (let counter = 1; counter <= limite; counter++) {
  switch (counter) {
    case 1:
      valor = Number(promt('Primeiro valor: '))
      break;
    case 2:
      valor = Number(promt('Segundo valor: '))
      break;
    case 3:
      valor = Number(promt('Terceiro valor: '))
      break;
    case 4:
      valor = Number(promt('Quarto valor: '))
      break;
    case 5:
      valor = Number(promt('Quinto valor: '))
      break;
    default:
      console.log('Opção inválida')
      break;
  }
  valorFinal += valor
}
if (isNaN(valorFinal)) {
  console.log('AVISO: Digite apenas números!')
  return
}
console.log(`A soma total é: ${valorFinal}`)