function memoize(fn) {
  const cache = {}
  return function (...args) {
    const chave = JSON.stringify(args)
    if (cache[chave] === undefined) {
      cache[chave] = fn.apply(this, args)
    }
    return cache[chave]
  }
}

let numero = Math.floor(Number(30))
let chave = Math.floor(Number(15))

const binomial = memoize(function (numero, chave) {
  if (chave === 0 || chave === numero) return 1
  return binomial(numero - 1, chave - 1) + binomial(numero - 1, chave)
})
console.log(binomial(numero, chave))