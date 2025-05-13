// let livro = {
//   nome: 'Marley e Eu',
//   anoLancamento: '2024',
//   autor: 'Will Smith',
//   nrPaginas: 12,
//   genero: 'Comédia',
//   atores: ['Scooby', 'Super Cão', 'Batcão'],

//   mostrarCaracteristicas: function() {
//     return `${this.nome} é um livro para ficar alegre.` 
//   }
// }
// console.log(livro.mostrarCaracteristicas())


// let filme = {
//   titulo: 'Hight School Musical',
//   anoLancamento: 2007,
//   atores: ['Zac effron', 'Arthur Morgan', 'Cloud Strife'],
//   genero: 'Guerra',

//   mostrarCaracteristicas: function() {
//     return `${this.titulo} é um filme de drama.` 
//   }
// }

// console.log(filme.mostrarCaracteristicas())



function Anime(nome, maisForte, maisFraco, nota) {
  return {
    nome,
    maisForte,
    maisFraco,
    nota
  }
}

let anime1 = Anime("Naturo", "Ebisu", "Konohamaru", 5)
// let anime2 = Anime("One Piece", "Coby", "Ace", 5)

// console.log(anime2)



// let jogadores = ['Caça Rato', 'Ganso', 'Pato']

// for(let key in jogadores) {
//   console.log(jogadores[key])
// }

// let palavra = 'Gremio'

// for(let char of palavra) {
//   console.log(palavra[char])
// }

// for (let i = 0; i < Object.keys(anime1).length; i++) {
//   console.log(Object.values(anime1)[i])
// }

// console.log(Object.keys(anime1))



let professor = {
  nome: 'Stark Parker',
  materia: 'Física',
  notas: {
    aluno1: [5, 7],
    alunoe2: [3, 7],
  }
}

let somaNotas = 0
let numeroAlunos = 0

for(let aluno in professor.notas) {
  somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

  numeroAlunos++
}

let media = somaNotas/numeroAlunos

if(media >= 6) {
  console.log(`A média da turma é ${media} e está acima do padrão`)
} else {
  console.log(`A média da turma é ${media} e está abaixo do padrão`)
}

console.log(media)