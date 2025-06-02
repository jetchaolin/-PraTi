let frase = 'olá olá mundo mundo world banana banana tobias olá ola'
let resultado = []

function filtroDePalavrasRepetidas (frase) {
  let array = conversorDePalavraEmArray(frase)
  for (let i = 0; i < array.length; i++) {
    let arr = []
    for (let j = 0; j < array.length; j++) {
      resultado.includes(array[i]) ? null : resultado.push(array[i])
    }   
  }
  console.log(resultado)
}

function conversorDePalavraEmArray(frase) {
  let arr = []
  let palavra = ''
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== ' ') {
      palavra += frase[i]
    } else {
      arr.push(palavra)
      palavra = ''
    }
  }
  arr.push(palavra)
  return arr
}

filtroDePalavrasRepetidas(frase)