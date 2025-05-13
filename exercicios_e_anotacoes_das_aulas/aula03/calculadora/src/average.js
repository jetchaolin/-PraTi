const prompt = require('prompt-sync')();
let num = Number(prompt('Digite o primeiro número: '))
let sum = 0;
let counter = 0;
// while (num !== 0) {
//   sum += num;
//   console.log(num);
//   counter ++;
//   num = Number(prompt('Digite o próximo número: '))
// }

do {
  sum += num;
    console.log(num);
    counter ++;
    num = Number(prompt('Digite o próximo número: '))
}  while (num !== 0)

let average = sum / counter;
console.log(average)