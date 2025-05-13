const prompt = require('../../calculadora/node_modules/prompt-sync')();

let totalDeEleitores = Number(prompt('Digite o total de eleitores: '))
let votosBrancos = Number(prompt('Digite o total de votos brancos: '))
let votosNulos = Number(prompt('Digite o total de votos nulos: '))
let votosValidos = Number(prompt('Digite o total de votos válidos: '))

console.log(
  `Total de eleitores: ${totalDeEleitores}, 
  Percentual de votos brancos: ${((votosBrancos / numeroEleitores) * 100).toFixed(2)}%, 
  Percentual de votos nulos: ${((votosNulos / numeroEleitores) * 100).toFixed(2)}%, 
  Percentual de votos validos: ${((votosValidos / numeroEleitores) * 100).toFixed(2)}%`
)