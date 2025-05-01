const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

function printTenTimes (numero) {
  if (isNaN(numero)) {
    console.log('Não é um número')
    sair = prompt('Deseja sair? [S/N]') // Qualquer resposta diferente de "n" (não) fechará o App
    if (sair.toUpperCase() == 'N') {
      numero = Number(prompt('Insira um número: '))
      printTenTimes(numero)      
    }
    return
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero}`)
  }
  sair = prompt('Deseja sair? [S/N]')
  if (sair.toUpperCase() == 'N') {
    numero = Number(prompt('Insira um número: '))
    printTenTimes(numero)
  }
  return
}
printTenTimes(numero)
