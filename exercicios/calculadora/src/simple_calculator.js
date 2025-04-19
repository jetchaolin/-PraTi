const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite o primeiro número: '))
console.log(num1)
let operacao = prompt('Digite a operação desejada (+, -, *, /): ')
console.log(num1 ,operacao)
let num2 = Number(prompt('Digite o segundo número: '))
console.log(num1 ,operacao, num2)
let resultado;
if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
} else if (operacao === '*') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    resultado = num1 / num2;
} else {
    console.log('Operação inválida');
}
console.log('resultado')
console.log(`${num1} ${operacao} ${num2} = ${resultado}`);