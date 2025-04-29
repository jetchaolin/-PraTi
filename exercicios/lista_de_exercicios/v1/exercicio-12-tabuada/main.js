const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${numero} = ${i * numero}`)
}