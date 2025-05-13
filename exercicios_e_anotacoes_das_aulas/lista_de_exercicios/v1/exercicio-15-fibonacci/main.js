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

console.log(array.join(', '))