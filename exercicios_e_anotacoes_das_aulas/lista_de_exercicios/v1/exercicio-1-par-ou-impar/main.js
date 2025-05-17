const prompt = require('prompt-sync')();

let numero = Number(prompt('AVISO: Apenas números inteiros serão calculados - Digite um número: '))
let numeroInteiro = parseInt(numero)

if (numeroInteiro.toFixed(0) % 2 == 0) {
  console.log(`O número ${numeroInteiro} é par`)
} else {
  console.log(`O número ${numeroInteiro} é ímpar`)
}