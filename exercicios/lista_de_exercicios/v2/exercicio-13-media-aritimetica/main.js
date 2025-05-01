const prompt = require('prompt-sync')();

let valor = undefined
let soma = 0
let counter = 0
let step = 1

console.log('Digite um número:\nAVISO: Para parar digite 0! ')

do {
  counter += step
  valor = Number(prompt(''));
  if (isNaN(valor)) {
    console.log('Digite apenas números!')
    valor = 0
  } else{
    soma += valor
  }
} while (valor != 0);

if (soma == 0) {
  console.log('Nenhum número foi digitado!')
  return
}
console.log(`A média aritmética é: ${(soma/(counter - 1)).toFixed(1)}`)