package org.exercicios.entities.pagamento;

import java.math.BigDecimal;

public class Pix extends FormaPagamento {
        String chavePix;
        BigDecimal valor;

        public Pix(String chavePix, BigDecimal valor) {
                super(valor);
                this.chavePix = chavePix;
                setChavePix();
        }

        public void setChavePix() {
                validarPagamento();
        }

        public String getChavePix() {
                return this.chavePix;
        }

        @Override
        public BigDecimal getValor() {
                return super.getValor();
        }

        private static final String REGEX_TELEFONE = "^(?:\\+55\\s?)?(?:\\(?0?[1-9]{2}\\)?\\s?)?(?:[2-9]\\d{3,4})-?\\d{4}$";

        @Override
        public boolean validarPagamento() {
                if (chavePix == null || chavePix.isEmpty() || !chavePix.matches(REGEX_TELEFONE)) {
                        this.chavePix = null;
                        throw new PagamentoInvalidoException("Chave Pix inválida");
                }
                return true;
        }
}
