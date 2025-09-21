package org.exercicios.entities.pagamento;

import java.math.BigDecimal;

public abstract class FormaPagamento {
        BigDecimal valor;

        public FormaPagamento(BigDecimal valor) {
                setValor(valor);
        }

        public void setValor(BigDecimal valor) {
                if (processarPagamento(valor)) {
                        this.valor = valor;
                }
        }

        public BigDecimal getValor() {
                return this.valor;
        }

        public abstract boolean validarPagamento();

        public boolean processarPagamento(BigDecimal valor) {
                if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
                        throw new PagamentoInvalidoException("Valor deve ser positivo");
                }
                return true;
        }
}
