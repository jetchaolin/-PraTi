const prompt = require('prompt-sync')();
let opcoes = [{ opção: 'esquerda'}, { opção: 'centro'}, { opção: 'direita'}] // V1: let entrada = Number(prompt('Opção 1\nOpção 2\nOpção 3\nEscolha uma opção: '));
console.log('Você se considera de: ')
console.table(opcoes, ['opção']);
let entrada = Number(prompt())

switch (entrada) {
  case entrada:
    console.log(`Você se considera de ${opcoes[entrada].opção}`);
    break;
  // Provavelmente faz mais sentido 🤔
  // case 0:
  //   console.log(' Vocé se considera de esquerda');
  //   break;
  // case 1:
  //   console.log('Você se considera de centro');
  //   break;
  // case 2:
  //   console.log('Você se considera de direita');
  //   break;
  default:
    console.log('Opção inválida');
}