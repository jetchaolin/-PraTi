package org.exercicios.entities.pagamento;
import java.math.BigDecimal;

public class CartaoDeCredito extends FormaPagamento {
        String numeroDoCartao;
        BigDecimal valor;

        public CartaoDeCredito(String numeroDoCartao, BigDecimal valor) {
                super(valor);
                this.numeroDoCartao = numeroDoCartao;
                setNumeroDoCartao();
        }

        public void setNumeroDoCartao() {
                validarPagamento();
        }

        public String getNumeroDoCartao() {
                return this.numeroDoCartao;
        }

        @Override
        public BigDecimal getValor() {
                return super.getValor();
        }

        private static final String REGEX_CARTAO = "^[0-9]{4}[\\s\\-]?[0-9]{4}[\\s\\-]?[0-9]{4}[\\s\\-]?[0-9]{1,7}$";

        @Override
        public boolean validarPagamento() {
                if (numeroDoCartao == null || numeroDoCartao.isEmpty() || !numeroDoCartao.matches(REGEX_CARTAO)) {
                        this.numeroDoCartao = null;
                        throw new PagamentoInvalidoException("Cartao De Credito inválido");
                }
                return true;
        }
}
