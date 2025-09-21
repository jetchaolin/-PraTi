package org.exercicios.entities.veiculo;

public abstract class Veiculo implements IMeioTransporte {
        String nomeDoVeiculo;
        int limiteDeVelocidade;
        int variacaoDeVelocidade;

        public Veiculo(String nomeDoVeiculo) {
                setNomeDoVeiculo(nomeDoVeiculo);
                this.limiteDeVelocidade = 40;
                this.variacaoDeVelocidade = 8;
        }

        private void setNomeDoVeiculo(String nomeDoVeiculo) {
                this.nomeDoVeiculo = nomeDoVeiculo;
        }

        public String getNomeDoVeiculo() {
                return nomeDoVeiculo;
        }

        public int getLimiteDeVelocidade() {
                return limiteDeVelocidade;
        }

        public int getVariacaoDeVelocidade() {
                return variacaoDeVelocidade;
        }

        public abstract void acelerar();

        public abstract void frear();
}
