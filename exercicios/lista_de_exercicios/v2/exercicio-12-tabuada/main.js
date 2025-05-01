const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));
console.log(' ---------------------')

if (isNaN(numero)) {
  console.log('Não é um número')
  return
}

for (let i = 1; i <= 10; i++) {
  console.log(` | ${i} | x | ${numero} | = | ${i * numero} |`)
  console.log(' ---------------------')
}