package org.exercicios.entities.frete;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashMap;
import java.util.Map;

public class Pac extends Estrategia {
        private Map<String, BigDecimal> tabelaDeEntrega = new HashMap<>();

        public Pac() {
                tratarTabela();
        }

        @Override
        public String toString() {
                return "PAC";
        }

        public Map<String, BigDecimal> getTabelaDeEntrega() {
                return tabelaDeEntrega;
        }

        public void tratarTabela() {
                Map<String, BigDecimal> novaTabela = super.tabelaDePrecos;
                novaTabela.forEach((estado, valor) -> {
                        this.tabelaDeEntrega.put(estado, valor.multiply(BigDecimal.valueOf(1.02)).setScale(2, RoundingMode.HALF_EVEN));
                });
        }
}
