// let livraria = [
//   {
//     nome: 'Harry Potter e a Pedra Filosofal',
//     autor: 'J.K. Rowling',
//     ano: 1997,
//     preco: 39.90
//   },
//   {
//     nome: 'O Senhor dos Anéis: A Sociedade do Anel',
//     autor: 'J.R.R. Tolkien',
//     ano: 1954,
//     preco: 49.90
//   },
//   {
//     nome: 'O Hobbit',
//     autor: 'J.R.R. Tolkien',
//     ano: 1937,
//     preco: 29.90
//   },
//   {
//     nome: 'ruby deep dive',
//     autor: 'Andy Stewart',
//     ano: 2019,
//     preco: 59.90
//   },
//   {
//     nome: 'O Guia do Mochileiro das Galáxias',
//     autor: 'Douglas Adams',
//     ano: 1979,
//     preco: 19.90
//   }
// ]

// for(let livro of livraria) {
//   if(livro.ano < 2000) {
//     console.log(livro)
//   }
// }

// let filmes = [
//   {
//     nome: 'Harry Potter e a Pedra Filosofal',
//     genero: 'Fantasia',
//   },
//   {
//     nome: 'O Senhor dos Anéis: A Sociedade do Anel',
//     genero: 'Fantasia',
//   },
//   {
//     nome: 'O Hobbit',
//     genero: 'Fantasia',
//   },
//   {
//     nome: 'O Guia do Mochileiro das Galáxias',
//     genero: 'Ficção Científica',
//   },
//   {
//     nome: 'A Origem',
//     genero: 'Ficção Científica',
//   },
//   {
//     nome: 'Interstellar',
//     genero: 'Ficção Científica',
//   },
//   {
//     nome: 'O Senhor dos Anéis: As Duas Torres',
//     genero: 'Fantasia',
//   },
//   {
//     nome: 'O Senhor dos Anéis: O Retorno do Rei',
//     genero: 'Fantasia',
//   }
// ]
// let contagemFilmes = {}

// filmes.forEach((filme) => {
//   if(contagemFilmes[filme.genero]) {
//     contagemFilmes[filme.genero]++
//   }
//   else {
//     contagemFilmes[filme.genero] = 1
//   }
// })

// for(let genero in contagemFilmes) {
//   console.log(`Estão presentes na lista ${contagemFilmes[genero]} filmes do gênero ${genero}`)
// }

// function fatorial(numero) {
//   fatorial = 1

//   for(let i = 1; i <= numero; i++) {
//     fatorial *= i
//   }
//   console.log(fatorial)
// }
// fatorial(6)

// função de PA - Progressão Aritmética

function pa(x, y) {
  let soma = 0
  for (let i =0; i <10; i++) {
    let termo = x + i * y
    console.log(termo)
    soma += termo
  }
  console.log(`A soma dos 10 primeiros termos é ${soma}`)
}

pa(1, 3)
