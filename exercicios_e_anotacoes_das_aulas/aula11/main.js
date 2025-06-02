
// function fatorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     let arm = n * fatorial(n - 1);
//     console.log(arm);
//     return arm;
//   }
// }
// console.log(fatorial(5));

// function x(n) {
//   let soma = 0;
//   for (let i = 1; i <= n; i++) {
//     soma += i;
//   }
//   return soma;
// }
// console.log(x(10));

// function x(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return n + x(n - 1);
//   }
// }
// console.log(x(10));

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// console.log(fib(5));

let categorias = [
  { 
    id: 1, 
    nome: 'Eletrônicos',
    filhos: [
      { id: 2, nome: 'Celulares', filhos: [] },
      { id: 3, nome: 'Computadores', filhos: [
        { id: 4, nome: 'Tablets', filhos: [] },
      ] },
    ]
  },
  {
    id: 5,
    nome: 'Louças',
    filhos: []
  }
]

function exibirCategorias(lista, nivel = 0) {
  for(let categoria of lista) {
    console.log(' '.repeat(nivel * 2) + categoria.nome);
    if (categoria.filhos.length > 0) {
      exibirCategorias(categoria.filhos, nivel + 1);
    }
  }
}
exibirCategorias(categorias);