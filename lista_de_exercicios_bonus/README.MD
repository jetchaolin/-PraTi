# **Curso Mais Prati - Primeira Lista de Exercícios**

Repositório composto de exercícios resolvidos em JavaScript utilizando de `Node.js` para interpretar código JS em terminal e `prompt-sync` para obter os inputs do usuário.

## **Pré-requisitos**

* [Node.js](#instale-o-nodejs-na-sua-máquina)
* [prompt-sync](#instale-o-prompt-sync)

## **Exercícios**

1. Escreva um programa para calcular a **redução** do tempo de vida de um fumante.
 Pergunte a **quantidade** de cigarros fumados **por dias** e quantos **anos** ele já fumou.
 Considere que um fumante perde **10 min** de vida acada cigarro. Calcule quantos dias de
 vida um fumante **perderá** e exiba o total em dias.

2. Escreva um programa que pergunte a **velocidade** de um carro. Caso ultrapasse **80 Km/h**, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
 multa, cobrando **R$ 5,00** por cada Km **acima** dave locidade permitida.

3. Faça um algoritmo que pergunte a **distância** que um passageiro deseja percorrer em
**Km**. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até **200Km** e
R$ 0.45 para viagens mais longas.


## **MODO DE INSTALAÇÃO**

### Instale o `Node.js` na sua máquina. 

#### 1. Você pode baixar o `Node.js` no [link](https://nodejs.org/en/download/) e instalar na sua máquina.

#### 2. Ou você pode utilizar o `nvm` para isso.

**Baixe e instale o `nvm`**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

**Reinicie o `shell`**

```sh
\. "$HOME/.nvm/nvm.sh"
```

**Baixe e instale `Node.js`**

```sh
nvm install 22
```

**Verifique a versão do `Node.js`**

```sh
node -v # Should print "v22.15.0".
nvm current # Should print "v22.15.0".
```

**Verifique a versão do `npm`**

```sh
npm -v # Should print "10.9.2".
```
<br />

## **Baixe o repositório com os exercícios**
 
```sh
# Clona o repositório para sua máquina
git clone https://github.com/jetchaolin/-PraTi.git
# Navegue até a pasta dos exercícios
cd exercicios/lista_de_exercicios/v2
```

## **Instale o prompt-sync**

```
npm i prompt-sync
```

<br />

## **Rode o comando abaixo no seu terminal para executar o programa:**
 
1. Para executar os exercícios, utilize o comando:
```sh
node main.js
```

2. Tenha certeza de estar na pasta do projeto ou indicar o caminho.
```sh
node <nome_do_diretorio>/main.js
```
Por exemplo:

```sh
# Caso o working directory seja -PraTi/exercicios/lista_de_exercicios/v2
node exercicio-1-par-ou-impar/main.js
```

## Para mais detalhes

- O exercícios podem ser encontrados em suas respectivas pastas.

- Para informaçoes especificas de cada exercício, leia o as instruções no terminal do respectivo exercício.
