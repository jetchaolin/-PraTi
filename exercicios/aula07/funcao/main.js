// Funções que não retornam nada = "Procedimentos"

// function RetornaParOuImpar(valor) {
//   let resultado

//   if (valor % 2 === 0) {
//     resultado = 'par'
//   } else {
//     resultado = 'impar'
//   }
//   return resultado
// }



// let numero = 10
// let resultado = RetornaParOuImpar(numero)

// console.log(`O número ${numero} é ${resultado}`)

// function calculaArea(largura, altura) {
//   let area = largura * altura
//   return area
// }

// let largura = 10
// let altura = 15
// let area = calculaArea(largura, altura)
// console.log(`A area da parede é ${area}`)



// let array = [3, 6, 1, 2, -3]
// let n = array.length

// function ordenaArray(array) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       if (array[j] > array[j + 1]){
//         let temp = array[j]
//         array[j] = array[j + 1]
//         array[j + 1] = temp
//       }
//     }
//   }
//   console.log(array)
// }
// ordenaArray(array)


// Uma função por parametro é um callback

// let exibeNome = function (nome) {
//   console.log(`Ola ${nome}`)
// }

// let exibeNome1 = (nome) => console.log(`Ola ${nome}`)

// exibeNome1('Matheus')



// let sucesso = () => console.log('Requisição foi um sucesso')
// let erro = function() { console.log('Requisição falhou') }

// function requiscao(sucesso, erro) {
//   if (true) {
//     sucesso()
//   } else {
//     erro()
//   }
// }
// requisicao((message) => console.log(message), erro)


let arr = [1, 2, 3, 4, 5]
function somaArr(arr) {
  // arr.reduce((acc, val) => acc + val, 0) // dar uma olhada
  let soma = 0
  let maior = 0
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i]
    if (arr[i] > maior) {
      maior = arr[i]
    }
  }
  return [soma, maior]
}

console.log(somaArr(arr))