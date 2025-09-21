package org.exercicios.entities.pagamento;
import java.math.BigDecimal;
import java.time.LocalDate;

public class Boleto extends FormaPagamento {
        LocalDate dataDeValidade;
        BigDecimal valor;

        public Boleto(LocalDate dataDeValidade, BigDecimal valor) {
                super(valor);
                this.dataDeValidade = dataDeValidade;
                setDataValidade();
        }

        public void setDataValidade() {
                validarPagamento();
        }

        public LocalDate getDataValidade() {
                return this.dataDeValidade;
        }

        @Override
        public BigDecimal getValor() {
                return super.getValor();
        }

        @Override
        public boolean validarPagamento() {
                if (dataDeValidade.isAfter(LocalDate.now())) {
                        this.dataDeValidade = null;
                        throw new PagamentoInvalidoException("Data do Boleto inválida");
                }
                return true;
        }
}
