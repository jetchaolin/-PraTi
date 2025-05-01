# **Curso Mais Prati - Primeira Lista de Exercícios**

Repositório composto de exercícios resolvidos em JavaScript utilizando de <sup>`Node.js`</sup> para interpretar código JS em terminal e <sup>`prompt-sync`</sup> para obter os inputs do usuário.

### **Pré-requisitos**

* <sup>`Node.js`</sup> instalado em sua máquina.
* Biblioteca <sup>`prompt-sync`</sup> instalada na pasta do seu projeto.

### **Exercícios**

1. **Par ou Ímpar**: Escreva um programa que recebe um <ins>número inteiro</ins> e verifica se ele é **par** ou **ímpar**
 utilizando uma estrutura de controle <sup>if</sup>.
2. **Classificação Etária**: Crie um programa que **classifica a idade** de uma pessoa em categorias (*criança,
 adolescente, adulto, idoso*) com base no <ins>valor fornecido</ins>, utilizando uma estrutura de
 controle <sup>if-else</sup>.
3. **Avaliação**: Implemente um programa que recebe uma <ins>nota</ins> de 0 a 10 e classifica como
 **"Aprovado", "Recuperação"**, ou **"Reprovado"** utilizando <sup>if-else if</sup>.
4. **Menu Interativo**: Crie um **menu interativo** no console que oferece ao usuário a escolha de <ins>três opções</ins>.
 Utilize <sup>switch-case</sup> para implementar a lógica de cada opção selecionada.
5. **Calculadorade IMC**: Escreva um programa que calcula o **Índice de Massa Corporal** (IMC) de uma pessoa e
 determina a categoria de peso (*baixo peso, peso normal, sobrepeso, obesidade*)
 utilizando <sup>if-else</sup>.
6. **Qual Triângulo**: Ler <ins>três valores</ins> para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 formam realmente um *triângulo*. Caso forme, deve ser indicado o tipo de triângulo:
 **Isósceles, escaleno** ou **eqüilátero**.
7. **Preço das Maçãs**: As maçãs custam **R$ 0,30** se forem compradas <ins>menos</ins> do que uma dúzia, e **R$ 0,25** se
 forem compradas <ins>pelo menos</ins> doze. Escreva um <sup>algoritmo</sup> que leia o número de maçãs
 compradas, calcule e escreva o **valor total** da compra.
8. **Dois Valores em Ordem Crescente**: Escreva um <sup>algoritmo</sup> para ler <ins>2 valores</ins> (*considere que não serão lidos valores iguais*)
 e escreve-los em ordem **crescente**.
9. **Contagem Regressiva**: Implemente um programa que exibe uma **contagem regressiva** de 10 até 1 no console
 utilizando um loop <sup>for</sup>.
10. **Número Repetido 10x**: Escreva um <sup>algoritmo</sup> para ler um <ins>número inteiro</ins> e **escrevê-lo** na tela **10 vezes**.
11. **Soma de 5 Números**: Escreva um programa que solicita ao usuário <ins>5 números</ins> e calcula a **soma total**
 utilizando um loop <sup>for</sup>.
12. **Tabuada**: Crie um programa que exibe a **tabuada** de um <ins>número</ins> fornecido pelo usuário (*de 1 a 10*) utilizando um loop <sup>for</sup>.
13. **Média de Números até 0**:  Fazer um <sup>algoritmo</sup> para receber <ins>números decimais</ins> até que o usuário <ins>digite 0</ins> e fazer
 a **média aritmética** desses números.
14. **Fatorial**: Crie um programa que calcula o **fatorial** de um <ins>número</ins> fornecido pelo usuário
 utilizando um loop <sup>for</sup> ou <sup>while</sup>.
15. **Sequência de Fibonacci**: Escreva um programa que gera e imprime os primeiros **10 números** da sequência de **Fibonacci** utilizando um loop <sup>for</sup>.

### **MODO DE INSTALAÇÃO**

### Instale o <sup>`Node.js`</sup> na sua máquina. 

#### 1. Você pode baixar o <sup>`Node.js`</sup> no [link](https://nodejs.org/en/download/) e instalar na sua máquina.

#### 2. Ou você pode utilizar o <sup>[nvm](#baixe-e-instale-o-nvm)</sup> para isso.

**Baixe e instale o <sup>nvm</sup>**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

**Reinicie o <sup>shell</sup>**

```sh
\. "$HOME/.nvm/nvm.sh"
```

**Baixe e instale <sup>Node.js</sup>**

```sh
nvm install 22
```

**Verifique a versão do <sup>Node.js</sup>**

```sh
node -v # Should print "v22.15.0".
nvm current # Should print "v22.15.0".
```

**Verifique a versão do <sup>npm</sup>**

```sh
npm -v # Should print "10.9.2".
```
<br />

### **Baixe o repositório com os exercícios**
 
```sh
# Clona o repositório para sua máquina
git clone https://github.com/jetchaolin/-PraTi.git
# Navegue até a pasta dos exercícios
cd exercicios/lista_de_exercicios/v2
```

<br />

### **Rode o comando abaixo no seu terminal para executar o programa:**
 
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

### Para mais detalhes

- O exercícios podem ser encontrados em suas respectivas pastas.

- Para informaçoes especificas de cada exercício, leia o as instruções no terminal do respectivo exercício.
