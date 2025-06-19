const prompt = require('prompt-sync')()
const inicio = 1
let n = Number(prompt('Digite um número: '))

function fatorial(n) {
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número.");
  if (n < 0) throw new Error("Número negativo: fatorial menor que zero.")
  if (n === 0) return inicio
  return n * fatorial(n - 1)
}

try {
  console.log(fatorial(n));
} catch (error) {
  console.error("Erro!", error.message)
}