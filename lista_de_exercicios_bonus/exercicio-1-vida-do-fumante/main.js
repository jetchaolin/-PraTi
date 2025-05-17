const prompt = require('prompt-sync')();

let cigarrosPorDia = Number(prompt('Quantos cigarros voce fuma por dia? '))
let anosFumando = Number(prompt('Quantos anos voce fuma? '))
let totalDiasFumado = anosFumando * 365
let totalCigarros = totalDiasFumado * cigarrosPorDia
let tempoPerdido = totalCigarros * 10
let tempoPerdidoEmDias = Math.ceil((tempoPerdido / 1440) % 30)
let tempoPerdidoEmMeses = Math.ceil((tempoPerdido / 43200) % 12)
let tempoPerdidoEmAnos = Math.floor(tempoPerdido / 525600)

console.log(`Voce perdeu${tempoPerdidoEmAnos == 0 ? '' : ` ${tempoPerdidoEmAnos} ano(s),`}${tempoPerdidoEmMeses  == 0 ? '' : ` ${tempoPerdidoEmMeses} mes(es) e`}${tempoPerdidoEmDias == 0 ? '' : ` ${tempoPerdidoEmDias} dia(s)`}`)