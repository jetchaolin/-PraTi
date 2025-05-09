// let nome = 'Julio Cesar'
// console.log(nome.length) // mostra o tamanho da string
// console.log(nome.charAt(0)) // mostra o caractere da posicao 0
// console.log(nome.indexOf('C')) // mostra a primeira ocorrencia do caractere

// console.log(nome.replace('Julio', 'Cleyton')) // substitui o primeiro argumento pelo segundo
// console.log(nome.substr(6, 5)) // pega a partir da posicao 6 e mostra 5 caracteres
// console.log(nome.toUpperCase()) // transforma tudo em maiusculo
// console.log(nome.toLowerCase()) // transforma tudo em minusculo

// console.log("   Wesley".trim()) // remove os espaços em branco do inicio e fim da string

// let invert = (nome) => {
//   let inv = '';
//   for (let i = nome.length - 1; i >= 0; i--) {
//     inv += nome[i]
//   }
//   return inv
// }
// console.log(invert(nome))

// function inverterString(palavra) {
//   return palavra.split("").reverse().join("");
// }
// console.log(inverterString(nome));


// // Não deu certo!!!
// let vogais = (str) => {
//   let arr = ['a', 'e', 'i', 'o', 'u']

//   for (let i = str.length -1; i >= 0; i++) {
//     let result = ''
//     for (let j = arr.length -1; j >= 0; i++) {
//       if (str[i] == arr[j]) {
//         result = str[i]
//       }
//     }
//   }
// }
// console.log(vogais(nome))


// function vogais(str) {
//   let vow = str.match(/[aeiou]/gi)
//   return vow ? vow.join('') : 0
// }
// console.log(vogais(nome))



// console.log(Math.ceil(100.2)) // arredonda para cima
// console.log(Math.floor(100.2)) // arredonda para baixo
// console.log(Math.round(100.2)) // arredonda para o mais próximo

// console.log(Math.sqrt(81)) // raiz quadrada
// console.log(Math.cbrt(81)) // raiz cubica
// console.log(Math.pow(9, 2)) // potencia

// console.log(Math.abs(-100.2)) // valor absoluto

// console.log(Math.random() * 100) // retorna um numero aleatorio entre 0 e 100

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (min + max))
// }
// console.log(randomNumber(1, 5))



// let date = new Date()

// console.log(date.getDate().toString().padStart(2, '0'))
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(2015, 7, 7)
// let date2 = new Date(2025, 7, 7)

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())

// console.log(milissegundosEntreDatas)

// let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

// console.log(milissegundosPorDia)

// console.log(`A diferença entre as datas é de: ${(milissegundosEntreDatas/milissegundosPorDia)*0.001}`)


// function formatDate(date) {
//   let day = date.getDate().toString().padStart(2, '0')
//   let month = (date.getMonth()).toString().padStart(2, '0')
//   let year = date.getFullYear().toString()
//   return `${day}/${month}/${year}`
// }
// console.log(formatDate(date1))


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
// console.table(matriz)


let matriz2 = []
let soma2 = 0

for (let i = 0; i < 3; i++) {
  matriz2[i] = []
  for (let j = 0; j < 3; j++) {
    matriz2[i][j] = 5
    if (i === j) {
      soma2 += matriz2[i][j]
    } 
  }
}
// console.table(matriz2)
let matriz3 = []
let soma3 = 0

for (let i = 0; i < 3; i++) {
  matriz3[i] = []
  for (let j = 0; j < 3; j++) {
    matriz3[i][j] = 0
    if (i === j) {
      soma3 += matriz3[i][j]
    } 
  }
}

for (let i = matriz.length -1; i >= 0; i--) {
  for (let j = matriz.length -1; j >= 0; j--) {
    matriz3[i][j] = ((matriz[i][j] + matriz2[i][j]))
  }
}
console.table(matriz3)