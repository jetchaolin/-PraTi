let palavra = 'Eu comi abacaxi ontem'
let aleatorio = () => Math.floor(Math.random() * 300 + 50)
let apagar = () => process.stdout.write('\x1B[1A\x1B[1G\x1B[0K')
// let correcao = 'Eu comi maça ontem'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function imprimirMensagem (resultado) {
  apagar()
  console.log(`Fulano: ${resultado}`)
  // setTimeout(() => {
  //   // apagar()
  //   if(correcao !== resultado) {
  //     let apagando = resultado
  //     for (let i = 0; i < 14; i++) {
  //       apagando = apagando.slice(0, -1)
  //       digitacao(apagando)
  //       sleep(aleatorio())
  //     }
  //     apagar()
  //     digitacao(correcao)
  //   }
  //   resultado = correcao
  // }, 1500)  
}

function novaFuncao (letra) {
  imprimirMensagem(letra)
}

function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

let debounced = debounce(novaFuncao, 900);

async function digitacao(palavra) {
  let impressao = ''
  let count = 1
  let reticencias = '.'
  console.log(`Fulano está digitando `)
  for (let i = 0; i < palavra.length; i++) {
    let letra = ''
    letra = palavra[i]
    await sleep(aleatorio())
    apagar()
    impressao += letra
    console.log(`Fulano está digitando${reticencias.repeat(count)}`)
    debounced(impressao)
    if (count === 3) {
      count = 0
    }
    count++
  }
  await sleep(1500)
}
digitacao(palavra)

