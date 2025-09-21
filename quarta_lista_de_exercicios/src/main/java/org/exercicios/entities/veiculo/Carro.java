package org.exercicios.entities.veiculo;

public class Carro extends Veiculo {
        public Carro(String nomeDoVeiculo) {
                super(nomeDoVeiculo);
                this.limiteDeVelocidade = (limiteDeVelocidade * 3);
                this.variacaoDeVelocidade = (variacaoDeVelocidade + 5);
        }

        @Override
        public void acelerar() {
                System.out.printf("O carro %s acelerou até %s Km/h em %s segundos %n", this.getNomeDoVeiculo(),
                                this.getLimiteDeVelocidade(),
                                this.getVariacaoDeVelocidade());
        }

        @Override
        public void frear() {
                System.out.printf("O carro %s freou %n", this.getNomeDoVeiculo());
        }
}
