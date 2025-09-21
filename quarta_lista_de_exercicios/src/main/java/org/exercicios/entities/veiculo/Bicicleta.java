package org.exercicios.entities.veiculo;

public class Bicicleta extends Veiculo {
        public Bicicleta(String nomeDoVeiculo) {
                super(nomeDoVeiculo);
        }

        @Override
        public void acelerar() {
                System.out.printf("A %s acelerou até %s Km/h em %s segundos %n", this.getNomeDoVeiculo(),
                                this.getLimiteDeVelocidade(),
                                this.getVariacaoDeVelocidade());
        }

        @Override
        public void frear() {
                System.out.printf("A %s freou %n", this.getNomeDoVeiculo());
        }
}
