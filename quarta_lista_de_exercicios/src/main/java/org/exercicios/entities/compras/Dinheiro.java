package org.exercicios.entities.compras;

import java.math.BigDecimal;

import org.exercicios.entities.compras.enums.Moeda;

public class Dinheiro {
        private BigDecimal valor;
        private Moeda moeda;

        public Dinheiro(BigDecimal valor, Moeda moeda) {
                this.valor = valor;
                this.moeda = moeda;
        }

        public BigDecimal getValor() {
                return this.valor;
        }

        public Moeda getMoeda() {
                return this.moeda;
        }

        public boolean equals(Object obj) {
                if (this == obj)
                        return true;
                if (obj == null || getClass() != obj.getClass())
                        return false;
                Dinheiro dinheiro = (Dinheiro) obj;
                return valor.equals(dinheiro.valor);
        }
}
