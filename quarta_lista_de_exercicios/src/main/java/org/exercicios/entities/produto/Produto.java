package org.exercicios.entities.produto;

import java.math.BigDecimal;

public class Produto {
        private String nome;
        private BigDecimal preco;
        private int quantidadeEmEstoque;

        public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) {
                setNome(nome);
                setPreco(preco);
                setQuantidade(quantidadeEmEstoque);
        }

        public Produto(String nome, double preco, int quantidadeEmEstoque) {
                this(nome, BigDecimal.valueOf(preco), quantidadeEmEstoque);
        }

        public void setNome(String nome) {
                if (nome == null || nome.trim().isEmpty()) {
                        throw new IllegalArgumentException("Nome não pode ser nulo ou vazio");
                }
                this.nome = nome;
        }

        public void setPreco(BigDecimal preco) {
                if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
                        throw new IllegalArgumentException("Preço deve ser positivo");
                }
                this.preco = preco;
        }

        public void setQuantidade(int quantidadeEmEstoque) {
                if (quantidadeEmEstoque < 0) {
                        throw new IllegalArgumentException("Quantidade deve ser positiva");
                }
                this.quantidadeEmEstoque = quantidadeEmEstoque;
        }

        public String getNome() {
                return nome;
        }

        public BigDecimal getPreco() {
                return preco;
        }

        public int getQuantidade() {
                return quantidadeEmEstoque;
        }

        @Override
        public String toString() {
                return String.format("%s - %.2f - %d unidades",
                                nome, preco, quantidadeEmEstoque);
        }
}
