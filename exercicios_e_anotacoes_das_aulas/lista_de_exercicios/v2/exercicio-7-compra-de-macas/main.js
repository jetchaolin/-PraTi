const prompt = require('prompt-sync')();

let totalDeMacas = Number(prompt('Informe a quantidade de macãs: '))
let valorMenosDeUmaDuzia = 0.30
let valorMaisDeUmaDuzia = 0.25
let valorFinal = 0
let precoFinal = 0

function badPracticesFunction(totalDeMacas, valorFinal, valorMaisDeUmaDuzia, valorMenosDeUmaDuzia, precoFinal) {
  if (isNaN(totalDeMacas)) {
    console.log('Quantidade inválida')
    sair = prompt('Deseja sair? [S/N]')
    if (sair.toUpperCase() == 'N') {
      totalDeMacas = Number(prompt('Informe a quantidade de macãs: '))
      badPracticesFunction(totalDeMacas, valorFinal, valorMaisDeUmaDuzia, valorMenosDeUmaDuzia, precoFinal)
    }
    return
  } else if (totalDeMacas >= 12) {
    valorFinal = valorMaisDeUmaDuzia
  } else {
    valorFinal = valorMenosDeUmaDuzia
  }
  console.log(
    `Total de macãs: ${totalDeMacas} unidade${totalDeMacas > 1 ? 's' : ''}\n
    Preço unitário: R$ ${(valorFinal.toFixed(2))}\n
    Preço final: R$ ${(precoFinal = totalDeMacas * valorFinal).toFixed(2)}`
  )
}
badPracticesFunction(totalDeMacas, valorFinal, valorMaisDeUmaDuzia, valorMenosDeUmaDuzia, precoFinal)
