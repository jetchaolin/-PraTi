const prompt = require('prompt-sync')();

let entrada = Number(prompt('Opção 1\nOpção 2\nOpção 3\nEscolha uma opção: '));

switch (entrada) {
  case 1:
    console.log('Opção 1');
    break;
  case 2:
    console.log('Opção 2');
    break;
  case 3:
    console.log('Opção 3');
    break;
  default:
    console.log('Opção inválida');
}