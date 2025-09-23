
package org.exercicios.entities.frete;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.math.RoundingMode;

public class RetiradaNaLoja extends Estrategia {
        private Map<String, BigDecimal> tabelaDeEntrega = new HashMap<>();

        public RetiradaNaLoja() {
                tratarTabela();
        }

        @Override
        public String toString() {
                return "Retirada na Loja";
        }

        public Map<String, BigDecimal> getTabelaDeEntrega() {
                return tabelaDeEntrega;
        }

        public void tratarTabela() {
                Map<String, BigDecimal> novaTabela = super.tabelaDePrecos;
                novaTabela.forEach((estado, valor) -> {
                        this.tabelaDeEntrega.put(estado, valor.multiply(BigDecimal.valueOf(0.2)).setScale(2, RoundingMode.HALF_EVEN));
                });
        }
}

