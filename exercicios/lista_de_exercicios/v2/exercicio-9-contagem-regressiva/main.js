let valor = 10

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contagemRegressiva(valor) {
  for (let i = valor; i >= 1; i--) {
    console.log(i)
    await sleep(1000)
  }
}
contagemRegressiva(valor)