const prompt = require('prompt-sync')();

let nota = Number(prompt('Informe a nota: '))

if (nota > 10 || nota < 0 || isNaN(nota)) {
  console.log("Nota inválida")
} else if (nota >=7) {
  console.log("Aprovado")
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}