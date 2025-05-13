const prompt = require('prompt-sync')();

let valorA = Number(prompt('Digite o valor A: '));
let valorB = Number(prompt('Digite o valor B: '));
let valorC = Number(prompt('Digite o valor C: '));

if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
  console.log('A, B e C formam um triângulo...');
  if (valorA == valorB && valorA == valorC) {
    console.log('Um triângulo Equilatero');
  } else if (valorA == valorB && valorA != valorC || valorA == valorC && valorB != valorC || valorB == valorC && valorA != valorC) {
    console.log('Um triângulo Isosceles');
  } else {
    console.log('Um triângulo Escaleno');
  }
}