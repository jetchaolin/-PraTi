package org.exercicios.entities.veiculo;

public class Trem extends Veiculo{
        public Trem(String nomeDoVeiculo) {
                super(nomeDoVeiculo);
                this.limiteDeVelocidade = (( limiteDeVelocidade * 3 ) * 2);
                this.variacaoDeVelocidade = ((variacaoDeVelocidade + 5) * 2);
        }

        @Override
        public void acelerar() {
                System.out.printf("O trem da %s acelerou até %s Km/h em %s segundos %n", this.getNomeDoVeiculo(),
                                this.getLimiteDeVelocidade(),
                                this.getVariacaoDeVelocidade());
        }

        @Override
        public void frear() {
                System.out.printf("O trem da %s freou %n", this.getNomeDoVeiculo());
        }

}
