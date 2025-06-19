# **Curso Mais Prati - Segunda Lista de Exercícios**

Repositório composto de exercícios resolvidos em JavaScript utilizando de `Node.js` para interpretar código JS em terminal e `prompt-sync` para obter os inputs do usuário.

## **Pré-requisitos**

* [Node.js](#instale-o-nodejs-na-sua-máquina)
* [prompt-sync](#instale-o-prompt-sync)

## **Exercícios**

1. Validação de Datas:
   Crie a função `ehDataValida(dia, mes, ano)` que retorne `true` se os valores
   formarem uma data real (meses de 28–31 dias, ano bissexto para
   fevereiro) e `false` caso contrário.
2. Jogo de Adivinhação:
   Escreva um script que gere um `número aleatório` de 1 a 100 e peça ao
   usuário, para adivinhar. Use `while` para repetir até acertar, `contando 
   tentativas` e exibindo `“mais alto”` ou `“mais baixo”` a cada palpite errado.
3. Palavras Únicas:
   Dada uma string (ex.: "olá olá mundo mundo"), use `if/else` e `for` para extrair
   todas as palavras `únicas` e exibi-las em um `array`.
4. Fatorial Recursivo:
   Implemente `function` fatorial(n) de forma `recursiva`; trate n < 0 lançando
   um `Error`, e n === 0 retornando 1.
5. Debounce:
   Crie `function` debounce(fn, delay) que receba uma `função fn` e um `delay 
   em ms`, retornando uma nova função que só executa fn se `não for 
   chamada` novamente dentro do intervalo.
6. Memoization:
   Implemente `function` memoize(fn) que `armazene em cache` chamadas
   anteriores de fn (por argumentos), retornando resultados `instantâneos` em
   repetidas invocações.
7. Mapeamento e Ordenação:
   Dado um `array` produtos = [{ nome, preco }, …], crie uma `função` que
   retorne um novo array apenas com os `nomes`, ordenados por `preço 
   crescente`, usando `map`, `sort`.
8. Agrupamento por Propriedade:
   Em vendas = [{ cliente, total }, …], use `reduce` para gerar um `objeto` onde
   cada chave é um `cliente` e o valor é a `soma` de `todos` os seus total.
9. Conversão Entre Formatos:
   Escreva `duas` funções:
   ○ paresParaObjeto(pares) recebe um `array` de pares [ [chave,
   valor], … ] e retorna o `objeto` equivalente.
   ○ objetoParaPares(obj) faz o inverso, retornando um `array` de
   pares.

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
npm -v
```

<br />

## **Baixe o repositório com os exercícios**

```sh
# Clona o repositório para sua máquina
git clone https://github.com/jetchaolin/-PraTi.git
# Navegue até a pasta dos exercícios
cd segunda_lista_de_exercicios
```

## **Instale o prompt-sync**

```sh
npm i prompt-sync
```

<br />

## **Rode o comando abaixo no seu terminal para executar o programa:**

1. Para executar os exercícios, utilize o comando node como no exemplo abaixo:

```sh
node 01-validacao-de-datas.js
```

2. Tenha certeza de estar na pasta do projeto ou indicar o caminho.

```sh
node <nome_do_diretorio>/00-nome-do-exercicio.js
```

## Para mais detalhes

- O exercícios podem ser encontrados na raiz da pasta.
- Para informações específicas de cada exercício, leia o as instruções no terminal do respectivo exercício.
