package org.exercicios.entities.compras;

import java.math.BigDecimal;

public class ItemCarrinho {
        private int id;
        private Produto produto;
        private int quantidade;

        public ItemCarrinho(int id, Produto produto, int quantidade) {
                setId(id);
                setProduto(produto);
                setQuantidade(quantidade);
        }

        public int getId() {
                return id;
        }

        public Produto getProduto() {
                return this.produto;
        }

        public int getQuantidade() {
                return this.quantidade;
        }

        public void setId(int id) {
                if (id <= 0) {
                        throw new IllegalArgumentException("O id deve ser maior que zero.");
                } else {
                        this.id = id;
                }
        }

        public void setProduto(Produto produto) {
                if (produto == null) {
                        throw new IllegalArgumentException("O produto nao pode ser nulo.");
                } else {
                        this.produto = produto;
                }
        }

        public void setQuantidade(int quantidade) {
                if (quantidade <= 0) {
                        throw new IllegalArgumentException("A quantidade deve ser maior que zero.");
                } else {
                        this.quantidade = quantidade;
                }
        }

        public BigDecimal valorTotal() {
                return this.produto.getPreco().getValor().multiply(BigDecimal.valueOf(this.quantidade));
        }
}
