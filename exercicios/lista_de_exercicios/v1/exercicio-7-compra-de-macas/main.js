const prompt = require('prompt-sync')();

let totalDeMacas = Number(prompt('Informe a quantidade de macãs: '))
let valorMenosDeUmaDuzia = 0.30
let valorMaisDeUmaDuzia = 0.25
let valorFinal = 0
let precoFinal = 0

if (totalDeMacas >= 12) {
  valorFinal = valorMaisDeUmaDuzia
} else {
  valorFinal = valorMenosDeUmaDuzia
}

console.log(
  `Total de macãs: ${totalDeMacas} unidades\n
  Preço unitário: ${(valorFinal.toFixed(2))} R$\n
  Preço final: ${(precoFinal = totalDeMacas * valorFinal).toFixed(2)} R$`
)