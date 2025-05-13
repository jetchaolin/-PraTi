const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

let fatorial = 1

for (let i = 1; i <= numero; i++) {
  console.log(`${i}! = ${i} x ${fatorial} = ${i * fatorial}`)
  fatorial *= i
}