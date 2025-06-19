let arrayDePares = [
  ['nome', 'Anderson'],
  ['nome', 'Camila'],
  ['nome', 'Uly']
]

function paresParaObjeto(pares) {
  if (pares === undefined || pares === null || pares.length === 0) return
  if (!Array.isArray(pares)) return 'Não é um array'
  let objeto = {}

  for (let i in pares) {
    objeto[`chave_0${i}`] = pares[i][0]
    objeto[`valor_0${i}`] = pares[i][1]
  }
  return objeto
}

function objetoParaPares(obj) { 
  if (obj === undefined || obj === null) return
  if (Object.prototype.toString.call(obj) !== "[object Object]") return 'Não é um objeto'
  let arr = []

  for (let value of Object.keys(obj, chave = false)) {
    if (!chave) chave = obj[value]
    if (chave !== 0 && chave !== obj[value]) arr.push([chave, obj[value]])
  }
  return arr
}

let objeto = paresParaObjeto(arrayDePares)
console.log(objeto)
console.log(objetoParaPares(objeto))

