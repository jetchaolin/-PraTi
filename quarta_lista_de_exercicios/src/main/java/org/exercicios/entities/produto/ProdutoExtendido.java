package org.exercicios.entities.produto;

import java.math.BigDecimal;

public class ProdutoExtendido extends Produto {
        private double descontoAplicado;

        public ProdutoExtendido(String nome, BigDecimal preco, int quantidadeEmEstoque) {
                super(nome, preco, quantidadeEmEstoque);
                this.descontoAplicado = 0;
        }

        public ProdutoExtendido(String nome, double preco, int quantidadeEmEstoque) {
                this(nome, BigDecimal.valueOf(preco), quantidadeEmEstoque);
        }

        public void setDescontoAplicado(double descontoAplicado) {
                this.descontoAplicado = descontoAplicado;
        }

        @Override
        public String toString() {
                if (descontoAplicado != 0) {
                        BigDecimal precoAntigo = super.getPreco();
                        BigDecimal total = BigDecimal.valueOf(1.0);
                        BigDecimal diferenca = total.subtract(BigDecimal.valueOf(descontoAplicado / 100));
                        precoAntigo = precoAntigo.divide(diferenca);

                        return String.format("%s - R$ %.2f - %d unidades - R$ %.2f",
                                        super.getNome(), super.getPreco(), super.getQuantidade(), precoAntigo);
                }
                return String.format("%s - R$ %.2f - %d - sem desconto",
                                        super.getNome(), super.getPreco(), super.getQuantidade());
        }

        public void aplicarDesconto(double percentual) {
                if (percentual < 0 || percentual > 50) {
                        throw new IllegalArgumentException("Percentual deve estar entre 0 e 50");
                }
                BigDecimal desconto = super.getPreco().multiply(BigDecimal.valueOf(percentual / 100));
                super.setPreco(super.getPreco().subtract(desconto));
                this.setDescontoAplicado(percentual);
        }
}
