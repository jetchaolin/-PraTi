const prompt = require('prompt-sync')();

let idade = Number(prompt('Informe a idade: '));
let resultado = undefined;

if (idade <= 2) {
  resultado = 0;
} else if (idade >= 3 && idade <= 11) {
  resultado = 1;
} else if (idade >= 12 && idade <= 17) {
  resultado = 2;
} else if (idade >= 18 && idade <= 59) {
  resultado = 3;
} else if (idade >= 60 && idade <= 109) {
  resultado = 4;
} else if (idade > 109) {
  resultado = 5;
} else {
  resultado;
}

switch (resultado) {
  case 0:
    console.log('Vocé é um bebe');
    break;
  case 1:
    console.log('Você é uma criança');
    break;
  case 2:
    console.log('Você é um adolescente');
    break;
  case 3:
    console.log('Você é um adulto');
    break;
  case 4:
    console.log('Você é um idoso');
    break;
  case 5:
    console.log('Idade inválida');
    break;
  default:
    console.log('Algo deu errado.\nVerifique a idade informada!');
    break;
}
