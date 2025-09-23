# Quarta lista de exercícios

<div align="left">
  <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-orange" alt="Status">
  <img src="https://img.shields.io/badge/openjdk-21.0.8-yellow" alt="Java">
  <img src="https://img.shields.io/badge/junit-v4.13.2-blue" alt="React">
</div>

## **Curso Mais Prati - Exercício 7 - Java**

## **Pré-requisitos**

- [`Java 21.0.8`](#modo-de-instalação)

### Lista de Tarefas 7

* Exercício 1 — Encapsulamento (Classe Produto)
Implemente a classe Produto com atributos privados nome, preco e
quantidadeEmEstoque. Forneça getters e setters com validações: preco e
quantidadeEmEstoque não podem ser negativos e nome não pode ser nulo ou
vazio. Lance IllegalArgumentException em casos inválidos. Demonstre o uso
criando instâncias, alterando valores válidos e tentando atribuições inválidas.
* Exercício 2 — Encapsulamento com Validação de Regra (Desconto)
Estenda Produto com o método aplicarDesconto(double porcentagem). Permita
apenas valores entre 0 e 50 (inclusive) e lance exceção (IllegalArgumentException
ou DescontoInvalidoException) se a regra for violada. Mostre, em um main ou
testes, o preço antes/depois do desconto e a reação a entradas inválidas.
* Exercício 3 — Herança (Hierarquia de Funcionários)
Crie a classe base Funcionario com protected String nome e protected
BigDecimal salario (com getters). Crie Gerente e Desenvolvedor que
sobrescrevem calcularBonus(): 20% do salário para gerente e 10% para
desenvolvedor. Garanta que salários sejam positivos. Em um programa, coloque
diferentes funcionários em uma coleção do tipo List<Funcionario> e exiba o bônus
de cada um.
* Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
Defina a interface IMeioTransporte com acelerar() e frear(). Implemente Carro,
Bicicleta e Trem, cada um com lógica própria de variação de velocidade e limites.
No método principal, crie uma lista de IMeioTransporte, percorra e invoque
acelerar()/frear() demonstrando polimorfismo. Trate operações inválidas com
exceções apropriadas.
* Exercício 5 — Abstração (Sistema de Pagamentos)
Implemente a classe abstrata FormaPagamento com validarPagamento() e
processarPagamento(BigDecimal valor). Crie CartaoCredito, Boleto e Pix com
validações específicas (ex.: número do cartão, formato de boleto, chave Pix). Simule
o uso de cada forma por polimorfismo e trate erros de validação com exceções
específicas (ex.: PagamentoInvalidoException).
* Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho de Compras)
Crie o objeto de valor imutável Dinheiro (valor BigDecimal e enum Moeda) com
equals/hashCode coerentes. Modele Produto, ItemCarrinho e um Carrinho cuja
lista de itens seja imutável: operações de adicionar/remover/aplicar cupom retornam

um novo carrinho. Valide quantidades > 0, proíba valores negativos e limite cupons
a 30% com arredondamento bancário. Demonstre o fluxo completo em testes.
* Exercício 7 — Generics (Repositório Genérico em Memória)
Defina Identificavel com getId(). Crie IRepository<T extends Identificavel, ID>
com salvar, buscarPorId (retorna Optional<T>), listarTodos e remover.
Implemente InMemoryRepository com Map<ID, T>, garanta que listarTodos
devolva cópia imutável e lance EntidadeNaoEncontradaException ao remover ID
inexistente. Use com entidades como Produto e Funcionario.
* Exercício 8 — Padrão Strategy (Cálculo de Frete com Lambdas)
Modele CalculadoraFrete com calcular(Pedido): BigDecimal. Crie estratégias
Sedex, Pac e RetiradaNaLoja e permita injeção/troca da estratégia no Pedido.
Acrescente uma estratégia promocional via lambda (frete grátis acima de X). Valide
CEP/região e dispare exceções para CEP inválido. Mostre a troca de estratégia em
tempo de execução.

## **MODO DE INSTALAÇÃO**

### Instale o `Java tool kit` na sua máquina.

 1. Você pode baixar o `JDK` no [link](https://www.oracle.com/br/java/technologies/downloads/) e instalar na sua máquina.

### Instale o `Maven` na sua máquina.

 1. Você pode baixar o `Maven` no [link](https://maven.apache.org/download.cgi) e instalar na sua máquina.

### Instale as dependências do `Maven`.

Você pode instalar as dependências do `Maven` na IDE da sua escolha **ou** rodando o comando abaixo no terminal:

```sh
mvn clean install
```

### **Baixe o repositório com os exercícios**

```sh
# Clona o repositório para sua máquina

git clone https://github.com/jetchaolin/-PraTi.git # Https

git clone git@github.com:jetchaolin/-PraTi.git # Ssh

# Navegue até a pasta do exercício
cd quarta_lista_de_exercicios/
```

## Rodando os testes

Rode os testes **normalmente** na IDE da sua preferência **ou** rode um comando como o do exemplo abaixo no terminal:

```sh
# Rode o comando abaixo no diretório do exercício
# mvn -Dtest=<NomeDaClasseTeste> test
mvn -Dtest=ProdutoTeste test 
```

