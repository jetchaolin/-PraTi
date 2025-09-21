import org.exercicios.entities.pagamento.*;
import org.junit.Assert;
import org.junit.Test;
import java.math.BigDecimal;
import java.time.LocalDate;

public class PagamentoTeste {
        @Test(expected = PagamentoInvalidoException.class)
        public void falharAoAtribuirAChavePixUmaStringVazia() {
                try {
                        new Pix("", BigDecimal.valueOf(100));

                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Chave Pix inválida", e.getMessage());

                        System.out.println("TESTE 1: falhar ao atribuir a chave pix uma string vazia");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharNaValidacaoComRegex() {
                try {
                        new Pix("3124123125412", BigDecimal.valueOf(100));
                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Chave Pix inválida", e.getMessage());

                        System.out.println("TESTE 2: falhar na validação com regex");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

        @Test
        public void criarUmPagamentoPixComSucesso() {
                Pix pagamento = new Pix("24988881111", BigDecimal.valueOf(100));

                Assert.assertEquals("24988881111", pagamento.getChavePix());
                Assert.assertEquals(BigDecimal.valueOf(100), pagamento.getValor());

                System.out.println("TESTE 3: criar um pagamento pix com sucesso");
                System.out.println("Chave Pix: " + pagamento.getChavePix() + " Valor: R$ " + pagamento.getValor());
        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharAoAtribuirDataForaDoPrazo() {
                try {
                        new Boleto(LocalDate.now().plusDays(1), BigDecimal.valueOf(100));
                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Data do Boleto inválida", e.getMessage());

                        System.out.println("TESTE 4: falhar ao atribuir data fora do prazo");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

        @Test
        public void criarUmPagamentoBoletoComSucesso() {
                Boleto pagamento = new Boleto(LocalDate.now(), BigDecimal.valueOf(100));
                boolean isNotExpired = true;

                Assert.assertEquals(isNotExpired, LocalDate.now().plusDays(1).isAfter(pagamento.getDataValidade()));
                Assert.assertEquals(BigDecimal.valueOf(100), pagamento.getValor());

                System.out.println("TESTE 5: criar um pagamento boleto com sucesso");
                System.out.println("Data de validade: " + pagamento.getDataValidade() + " Valor: R$ " + pagamento.getValor());
        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharAoAtribuirAoNumeroDoCartoUmaStringVazia() {
                try {
                        new CartaoDeCredito("", BigDecimal.valueOf(100));

                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Cartao De Credito inválido", e.getMessage());

                        System.out.println("TESTE 6: falhar ao atribuir ao numero do cartão uma string vazia");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharAoAtribuirAoNumeroDoCartaoUmNull() {
                try {
                        new CartaoDeCredito(null, BigDecimal.valueOf(100));

                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Cartao De Credito inválido", e.getMessage());

                        System.out.println("TESTE 7: falhar ao atribuir ao numero do cartão um null");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }

        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharNaValidacaoComRegexDoCartaoDeCredito() {
                try {
                        new CartaoDeCredito("123", BigDecimal.valueOf(100));
                } catch (PagamentoInvalidoException e) {
                        Assert.assertEquals("Cartao De Credito inválido", e.getMessage());

                        System.out.println("TESTE 8: falhar na validação com regex do cartao de credito");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

        @Test
        public void criarUmPagamentoComCartaoDeCreditoComSucesso() {
                CartaoDeCredito pagamento = new CartaoDeCredito("4532 1234 5678 9012", BigDecimal.valueOf(100));

                Assert.assertEquals("4532 1234 5678 9012", pagamento.getNumeroDoCartao());
                Assert.assertEquals(BigDecimal.valueOf(100), pagamento.getValor());

                System.out.println("TESTE 9: criar um pagamento com cartao de credito com sucesso");
                System.out.println("Numero do cartao: " + pagamento.getNumeroDoCartao() + " Valor: R$ " + pagamento.getValor());
        }

        @Test(expected = PagamentoInvalidoException.class)
        public void falharAoAtribuirValorAbaixoDeZero() {
                try {
                        new Pix("chave-pix", BigDecimal.valueOf(-1));
                } catch (PagamentoInvalidoException e ) {
                        Assert.assertEquals("Valor deve ser positivo", e.getMessage());

                        System.out.println("TESTE 10: falhar ao atribuir valor abaixo de zero");
                        System.out.println(e.getMessage());

                        throw new PagamentoInvalidoException(e.getMessage());
                }
        }

}
