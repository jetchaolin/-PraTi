package org.exercicios.entities.pagamento;

public class PagamentoInvalidoException extends RuntimeException {
        public PagamentoInvalidoException(String message) {
                super(message);
        }
}
