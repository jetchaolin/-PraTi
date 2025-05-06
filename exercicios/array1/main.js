// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular:

// A soma de todos os elementos.

// A média dos elementos. 
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares



// let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// let soma = numeros.join('+')

// let result = eval(soma)

// console.log(`soma ${result} e media ${result/numeros.length}`)

// let numeros = [ 7, 3, 1, 2, 4, 5, 6, 8, 9, 10 ]
// let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// let pares = numeros.filter((num) => num % 2 === 0)
// let soma = 0
// let media = 0
// let pares = []



// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i]
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i])
//   }
// }

// media = soma/numeros.length

// console.log(numeros)
// console.log(`soma ${soma} e media ${media}`)
// console.log(pares)

// console.log(soma)
// console.log(soma/numeros.length)
// console.log(pares)

// console.log(numeros.sort((a, b) => a - b))



// for (let i = 0; i < numeros.length; i++) {
//   for (let j = i + 1; j < numeros.length; j++) {
//     if (numeros[i] > numeros[j]) {
//       let aux = numeros[i]
//       numeros[i] = numeros[j]
//       numeros[j] = aux
//     }
//   }
// }
// console.log(numeros)


// Array bubble sort
let numeros = [3, 6, 1, 2, -3]
let n = numeros.length

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    if (numeros[j] > numeros[j + 1]){
      let temp = numeros[j]
      numeros[j] = numeros[j + 1]
      numeros[j + 1] = temp
    }
  }
}
console.log(numeros)