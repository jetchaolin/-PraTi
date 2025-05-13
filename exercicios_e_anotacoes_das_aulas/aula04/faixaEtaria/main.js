let range = "A";
let result = 0;

if (range <= 2) {
  result = 0;
} else if (range >= 3 && range <= 11) {
  result = 1;
} else if (range >= 12 && range <= 17) {
  result = 2;
} else if (range >= 18 && range <= 59) {
  result = 3;
} else if (range >= 60 && range <= 109) {
  result = 4;
} else if (range > 109) {
  result = 5;
} else {
  result = undefined;
}

switch (result) {
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
