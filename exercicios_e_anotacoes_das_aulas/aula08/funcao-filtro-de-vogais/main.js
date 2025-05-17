let nome = 'Julio Cesar'

let vogais = (str) => {
  let arr = ['a', 'e', 'i', 'o', 'u']
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    result.push(arr.filter(e => e == str[i]))
  }
  return result.join('')
}
console.log(vogais(nome))


// Exemplo da aula

function vogais(str) {
  let vow = str.match(/[aeiou]/gi)
  return vow ? vow.join('') : 0
}
console.log(vogais(nome))