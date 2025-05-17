const prompt = require('prompt-sync')();

let numero = Number(prompt('AVISO: Apenas números inteiros serão calculados - Digite um número: '))
let numeroInteiro = parseInt(numero)

// Versão simples sem recursão 🙈
// if (isNaN(numeroInteiro)) {
//   console.log('Não é um número inteiro')
// } else if (numeroInteiro.toFixed(0) % 2 == 0) {
//   console.log(`O número ${numeroInteiro} é par`)
// } else {
//   console.log(`O número ${numeroInteiro} é ímpar`)
// }

function printResult (numeroInteiro) {
  if (isNaN(numeroInteiro)) {
    console.log('Não é um número inteiro')
    sair = prompt('Deseja sair? [S/N]') // Qualquer resposta diferente de "n" (não) fechará o App
    if (sair.toUpperCase() == 'N') {
      numero = Number(prompt('Insira um número inteiro: '))
      numeroInteiro = parseInt(numero)
      printResult(numeroInteiro)      
    }
    return
  } else if (numeroInteiro.toFixed(0) % 2 == 0) {
    console.log(`O número ${numeroInteiro} é par`)
    sair = prompt('Deseja sair? [S/N]') // Qualquer resposta diferente de "n" (não) fechará o App
    if (sair.toUpperCase() == 'N') {
      numero = Number(prompt('Insira um número inteiro: '))
      numeroInteiro = parseInt(numero)
      printResult(numeroInteiro)      
    }
    return
  } else {
    console.log(`O número ${numeroInteiro} é ímpar`)
    sair = prompt('Deseja sair? [S/N]') // Qualquer resposta diferente de "n" (não) fechará o App
    if (sair.toUpperCase() == 'N') {
      numero = Number(prompt('Insira um número inteiro: '))
      numeroInteiro = parseInt(numero)
      printResult(numeroInteiro)      
    }
    return
  }
}
printResult(numeroInteiro)