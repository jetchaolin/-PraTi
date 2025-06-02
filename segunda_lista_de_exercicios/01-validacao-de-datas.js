const prompt = require('prompt-sync')()

function ehDataValida(dia, mes, ano){  
  const data = new Date(ano, mes -1, dia)
  const ehValida = (
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia
  )
  return ehValida
}

let dataInserida = prompt('Digite uma data no formato DD-MM-AAAA: ')

const comparacao = dataInserida.match(/^(\d{1,2})([.,\/ -])(\d{1,2})\2(\d{2}|\d{4})$/) // Checa a formatação de data, valida que os separadores são iguais | "\2" <- 2 se refere ao grupo

if (!comparacao) return console.log(`Formato inválido! Use DD-MM-AAAA, DD/MM/AA, etc.`)

let [_, dia, separador, mes, ano] = comparacao.map((x, i) => i > 0 ? parseInt(x, 10) || x : x) // Desconstrói o array e transforma os números de strings para inteiros | parseInt() necessário para não quebrar a formatação da saida

if (ano < 100) ano = (ano <= 25) ? ano + 2000 : ano + 1900 // Checa se o ano foi digitado com 2 ou 4 dígitos se esforçando ao máximo para ajustar para 4 dígitos da forma mais adequada | 0 - 25 = + 2000 | 26 - 99 = + 1900

if (ehDataValida(dia, mes, ano)) {
  return console.log(`A data ${dia < 10 ? `0${dia}` : dia}${separador}${mes < 10 ? `0${mes}` : mes}${separador}${ano} é válida`)
}
console.log(`A data ${dia < 10 ? `0${dia}` : dia}${separador}${mes < 10 ? `0${mes}` : mes}${separador}${ano} é inválida`)

// Versão sem o objeto Date JavaScript

// const prompt = require('prompt-sync')()

// function ehDataValida(dia, mes, ano) {
//   let dataValida = `A data ${dia}-${mes}-${ano} é válida`
//   let dataInvalida = `A data ${dia}-${mes}-${ano} é inválida`

//   if (isNaN(dia, mes, ano)) {
//     return false
//   }

//   if (dia < 1 || dia > 31) {
//     return console.log(dataInvalida)
//   }

//   if (mes < 1 || mes > 12) {
//     return console.log(dataInvalida)
//   }

//   if (mes === 2) {
//     let checarBissexto = ano % 4

//     if (dia <= 28) {
//       return console.log(dataValida)
//     }

//     if (dia > 29) {
//       return console.log(dataInvalida)
//     }

//     if (checarBissexto !== 0 && dia > 28) {
//       return console.log(dataInvalida)
//     }

//     return console.log(dataValida)
//   }

//   console.log(dataValida)
// }

// let dataInserida = prompt('Digite uma data no formato DD-MM-AAAA: ')

// let partes = dataInserida.split(/[.,\/ -]/)

// if (partes.length !== 3) {
//     return console.log(`O formato ${dataInserida} é inválida`)  
// }

// let [dia, mes, ano] = partes.map(Number)
  
// let validacaoDeFormatacaoDeData = dataInserida.match(/\d{1,2}[.,\/ -]\d{1,2}[.,\/ -](\d{2}|\d{4})$/) // Checa a formatação da data e permite multiplos formatos
  
// if (!validacaoDeFormatacaoDeData) {
//   return console.log(`A formatação ${dataInserida} é inválida`)
// }
  
// ehDataValida(dia, mes, ano)