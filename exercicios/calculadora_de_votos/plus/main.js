const prompt = require('../../calculadora/node_modules/prompt-sync')();

let totalDeEleitores = Number(prompt('Digite o total de eleitores: '))
let votosBrancos = Number(prompt('Digite o total de votos brancos: '))
let votosNulos = Number(prompt('Digite o total de votos nulos: '))
let votosValidos = totalDeEleitores - (votosBrancos + votosNulos)
if (votosBrancos + votosNulos + votosValidos !== totalDeEleitores) {
  console.log('Votos inválidos')
} else {
  console.log(`Votos brancos: ${((votosBrancos / totalDeEleitores) * 100).toFixed(2)}%`)
  console.log(`Votos nulos: ${((votosNulos / totalDeEleitores) * 100).toFixed(2)}%`)
  console.log(`Votos válidos: ${((votosValidos / totalDeEleitores) * 100).toFixed(2)}%`)
  console.log(`Total de votos válidos: ${votosValidos}`)
}