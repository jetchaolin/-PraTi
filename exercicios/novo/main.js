// let temperatura = 20

// let fairenheit = (temperatura * 9/5) + 32

// console.log(fairenheit)


// let numeroEleitores = 100
// let votosBrancos = 30
// let votosNulos = 10
// let votosValidos = 60

// let percentualVotosBrancos = (votosBrancos / numeroEleitores) * 100
// let percentualVotosNulos = (votosNulos / numeroEleitores) * 100
// let percentualVotosValidos = (votosValidos / numeroEleitores) * 100

// console.log(`Total de eleitores: ${numeroEleitores}, Percentual de votos brancos: ${percentualVotosBrancos}%, Percentual de votos nulos: ${percentualVotosNulos}%, Percentual de votos validos: ${percentualVotosValidos}%`)


//A turma C é composta de 60 alunos, e a turma D de 20 alunos. 
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C,
//  o percentual de aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// let turmaC = 60
// let turmaD = 20
// let entryPerC = 10
// let entryPerD = 85
// let turmaCAprovados = (entryPerC * turmaC)/100
// let turmaDReprovados = ((100 - entryPerD) * turmaD)/100
// let totalAlunos = turmaC + turmaD

// console.log(`Alunos reprovados na turma C: ${turmaCAprovados}`)
// console.log(`Alunos reprovados na turma D: ${turmaDReprovados}`)
// console.log(((turmaDReprovados + turmaCAprovados) / totalAlunos)*100)



// Faça um programa que leia o dia da semana 
// (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). 
// Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”,
// senão imprimir “Dia Útil”.

// let dia = 'Segunda'

// switch (dia) {
//   case 'Sábado':
//   case 'Domingo':
//     console.log('Final de Semana')
//     break
//   case 'Segunda':
//   case 'Terça':
//   case 'Quarta':
//   case 'Quinta':
//   case 'Sexta':
//     console.log('Dia Útil')
//     break
//   default:
//     console.log('Dia inválido')
// }



// Escreva um algoritmo para repetir a leitura de um número enquanto o valor 
// fornecido for diferente de 0. Para cada número fornecido, 
// imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido 
// a repetição deve ser encerrada sem imprimir mensagem alguma

// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. 
// Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA".
// Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO"
// e o algoritmo encerrado. Considere que a senha correta é o valor 2807.