package org.exercicios.entities.frete;

import java.math.BigDecimal;
import java.math.RoundingMode;

public interface CalcularadoraFrete {
        public static BigDecimal calcularFrete(Pedido pedido) {
                BigDecimal taxaBase = BigDecimal.valueOf(10.0);
                BigDecimal taxaPorKg = BigDecimal.valueOf(2.0);

                return taxaBase.add(taxaPorKg.multiply(pedido.getPeso())).add(pedido.getFrete()).setScale(2, RoundingMode.HALF_EVEN);
        }
}
