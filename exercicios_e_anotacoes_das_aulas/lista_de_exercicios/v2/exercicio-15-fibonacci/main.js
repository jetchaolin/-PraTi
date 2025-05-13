let inicio = 0
let counter = 1
let array = [1]

for (let i = 0; i <= 8; i++) {
  if (i == 0) {
    inicio = inicio + array[i]
  } else {
    inicio = array[i - 1] + array[i]
  }
  array.push(inicio)
}

console.log('          Sequência de Fibonacci')
console.log(' -------------------------------------------')
console.log(`| ${array.join(' | ')} |`)
console.log(' -------------------------------------------')

// Opção sem array 💪
// let memoria = 0, contador = 1;
// console.log("Sequência de Fibonacci:");
// for (let i = 0; i < 10; i++) {
//   console.log(memoria);
//   let prox = memoria + contador;
//   memoria = contador;
//   contador = prox;
// }