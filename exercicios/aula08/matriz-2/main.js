// let matriz1 = []
// matriz1[0] = [1, 2, 3]
// matriz1[1] = [4, 5, 6]
// matriz1[2] = [7, 8, 9]
// console.table(matriz1)

// let matriz2 = []
// matriz2[0] = [9, 8, 7]
// matriz2[1] = [6, 5, 4]
// matriz2[2] = [3, 2, 1]
// console.table(matriz2)

// let matrizResultado = []
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     matrizResultado[j] === undefined ? matrizResultado[j] = [] : null
//     matrizResultado[i][j] = matriz1[i][j] + matriz2[i][j] 
//   }
// } console.table(matrizResultado)


let random = () => Math.floor(Math.random() * (0 + 10))
console.log(random)

let matriz1 = []
matriz1[0] = [random(), random(), random()]
matriz1[1] = [random(), random(), random()]
matriz1[2] = [random(), random(), random()]
console.table(matriz1)

let matriz2 = []
matriz2[0] = [random(), random(), random()]
matriz2[1] = [random(), random(), random()]
matriz2[2] = [random(), random(), random()]
console.table(matriz2)

let matrizResultado = []
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrizResultado[j] === undefined ? matrizResultado[j] = [] : null
    matrizResultado[i][j] = matriz1[i][j] + matriz2[i][j] 
  }
} console.table(matrizResultado)