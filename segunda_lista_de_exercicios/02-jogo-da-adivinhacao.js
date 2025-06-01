const prompt = require('prompt-sync')();

let chute = ''
let tentativas = 0
let numeroAleatorio = Math.floor(Math.random() * 100 + 1)

while (chute !== numeroAleatorio && !isNaN(chute) && chute !== 0) {
  function processadorDeEntrada(entrada) {
    entrada = Number(prompt('Digite um número de 1 a 100: '))
    if (isNaN(entrada) || entrada === 0) {
      console.log('Chute inválido')
      sair = prompt('Deseja sair? [S/N]') // Qualquer resposta diferente de "n" (não) fechará o App
      if (sair.toUpperCase() == 'N') {
        console.log('AVISO: Apenas números inteiros!')
        entrada = processadorDeEntrada(entrada)
      }      
    }
    return entrada
  }
  chute = processadorDeEntrada(chute)
  tentativas++
  !isNaN(chute) && chute !== 0 ? (chute > numeroAleatorio ? console.log('Mais baixo') : console.log('Mais alto')) : false
}

if (chute === numeroAleatorio) {
  return console.log(`Parabéns, vocé acertou em ${tentativas} tentativas!\nObrigado por jogar`)
}
console.log(`Obrigado por jogar`)