// let diaDaSemana = 'sábado';

// if (diaDaSemana === 'Sábado' || 'sábado') {
//   diaDaSemana = 'sabado';
// }

// switch (diaDaSemana.toLowerCase()) {
//   case 'sabado':
//   case 'domingo':
//     console.log('Final de Semana');
//     break;
//   case 'segunda':
//   case 'terça':
//   case 'quarta':
//   case 'quinta':
//   case 'sexta':
//     console.log('Dia Útil');
//     break;
//   default:
//     console.log('Dia inválido');
// }
const prompt = require('../calculadora/node_modules/prompt-sync')();

let diaDaSemana = Number(prompt('Informe o dia da semana:\n1 - Domingo\n2 - Segunda\n3 - Terça\n4 - Quarta\n5 - Quinta\n6 - Sexta\n7 - Sábado\n'));

switch (diaDaSemana) {
  case 1:
  case 7:
    console.log('Final de Semana');
    break;
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log('Dia Útil');
    break;
  default:
    console.log('Dia inválido');
}