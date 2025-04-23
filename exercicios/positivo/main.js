let value = 51;
let result = 0;
if (value == 0) {
  result = undefined
} else {
  result = value % 2
}

switch (result) {
  case result = 0:
    console.log('O número é par')
    break;
  case result = 1:
    console.log('O número é ímpar')
    break;
  default:
    console.log('O número é 0')
    break;    
}