let matriz = []
let soma = 0

for (let i = 0; i < 3; i++) {
  matriz[i] = []
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = 10
    if (i === j) {
      soma += matriz[i][j]
    } 
  }
}
console.table(matriz)
console.log(soma)

// let mercado = []
// mercado["fruteira"] = ["banana", "maca", "laranja"]
// mercado["padaria"] = ["pão", "biscoito", "bolo"]
// mercado["acougue"] = ["peixe", "frango", "carne"]


// console.table(mercado)