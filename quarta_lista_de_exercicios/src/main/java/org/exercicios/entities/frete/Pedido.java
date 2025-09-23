package org.exercicios.entities.frete;

import java.io.IOException;
import java.math.BigDecimal;

public class Pedido implements CalcularadoraFrete {
        private BigDecimal preco;
        private BigDecimal peso;
        private BigDecimal valorTotal;
        private String endereco;
        private Estrategia estrategia;

        public Pedido(BigDecimal preco, BigDecimal peso, String endereco, Estrategia estrategia) {
                setPreco(preco);
                setPeso(peso);
                setEndereco(endereco);
                setEstrategia(estrategia);
                setValorTotal();
        }

        public BigDecimal CalcularadoraFrete() {
                return CalcularadoraFrete.calcularFrete(this);
        }

        public void aplicarDesconto() {
                if (this.estrategia.promocaoAtiva(this.preco)) {
                        this.valorTotal = this.valorTotal.subtract(CalcularadoraFrete());
                }
        }

        public Estrategia getEstrategia() {
                return estrategia;
        }

        public BigDecimal getFrete() {
                BigDecimal frete = this.estrategia.getTabelaDeEntrega().get(this.endereco);
                return frete;
        }

        public void setEstrategia(Estrategia estrategia) {
                this.estrategia = estrategia;
        }

        public BigDecimal getPreco() {
                return preco;
        }

        public BigDecimal getPeso() {
                return peso;
        }

        public String getEndereco() {
                return endereco;
        }

        public void setPreco(BigDecimal preco) {
                if (preco.compareTo(BigDecimal.ZERO) < 0) {
                        throw new IllegalArgumentException("Valor do pedido não pode ser negativo");
                } else {
                        this.preco = preco;
                }
        }

        public void setPeso(BigDecimal peso) {
                if (peso.compareTo(BigDecimal.ZERO) < 0) {
                        throw new IllegalArgumentException("Peso do pedido não pode ser negativo");
                } else {
                        this.peso = peso;
                }
        }

        public void setEndereco(String endereco) {
                BuscarCep buscarCep = new BuscarCep();
                String estado;

                try {
                        estado = buscarCep.buscarEstadoPorCep(endereco);
                } catch (IOException e) {
                        System.err.println("Erro: " + e.getMessage());
                        return;
                }
                this.endereco = estado;
        }

        public BigDecimal getValorTotal() {
                return valorTotal;
        }

        public void setValorTotal() {
                if (this.estrategia.promocaoAtiva(this.preco)) {
                        this.valorTotal = this.preco.add(CalcularadoraFrete());
                        aplicarDesconto();
                } else {
                        this.valorTotal = preco.add(CalcularadoraFrete());
                }
        }
}
