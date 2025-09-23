package org.exercicios.entities.frete;

import java.math.BigDecimal;
import java.util.Map;

public abstract class Estrategia {
        protected Map<String, BigDecimal> tabelaDePrecos = Map.of(
                        "SP", new BigDecimal("16.00"),
                        "RJ", new BigDecimal("21.00"),
                        "MG", new BigDecimal("18.00"),
                        "ES", new BigDecimal("20.00"),
                        "Outros", new BigDecimal("26.00"));

        public Estrategia() {
        }

        public abstract Map<String, BigDecimal> getTabelaDeEntrega();

        public boolean promocaoAtiva(BigDecimal valor) {
                if (valor.compareTo(BigDecimal.valueOf(100.0)) > 0) {
                        return true;
                }
                return false;
        }
}
