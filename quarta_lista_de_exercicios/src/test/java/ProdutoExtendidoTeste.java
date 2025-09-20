import org.junit.Assert;
import org.junit.Test;
import java.math.BigDecimal;
import org.exercicios.entities.produto.ProdutoExtendido;

public class ProdutoExtendidoTeste {

        @Test(expected = IllegalArgumentException.class)
        public void falharEmAplicarDescontoMenorQueZero() {
                String nomeDoProduto = "Produto 1";
                float preco = 100f;
                int quantidadeEmEstoque = 10;
                int desconto = -20;

                try {
                        ProdutoExtendido produto1 = new ProdutoExtendido(nomeDoProduto, preco, quantidadeEmEstoque);
                        produto1.aplicarDesconto(desconto);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Percentual deve estar entre 0 e 50", e.getMessage());

                        System.out.println("TESTE 1: falhar em aplicar desconto menor que zero");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test
        public void exibirProdutoSemDesconto() {
                String nomeDoProduto = "Produto 2";
                float preco = 100f;
                int quantidadeEmEstoque = 10;
                int desconto = 0;

                ProdutoExtendido produto1 = new ProdutoExtendido(nomeDoProduto, preco, quantidadeEmEstoque);
                produto1.aplicarDesconto(desconto);
                Assert.assertEquals(0, produto1.getPreco().compareTo(BigDecimal.valueOf(100)));

                System.out.println("TESTE 2: exibir produto sem desconto");
                System.out.println("Produto" + " - " + "Preço Atual" + " - " + "Quantidade" + " - " + "Preço Original");
                System.out.println(produto1);

        }


        @Test
        public void exibirProdutoComDescontoAplicadoCorretamente() {
                String nomeDoProduto = "Produto 2";
                float preco = 100f;
                int quantidadeEmEstoque = 10;
                int desconto = 10;

                ProdutoExtendido produto1 = new ProdutoExtendido(nomeDoProduto, preco, quantidadeEmEstoque);
                produto1.aplicarDesconto(desconto);
                Assert.assertEquals(0, produto1.getPreco().compareTo(BigDecimal.valueOf(90)));

                System.out.println("TESTE 3: exibir produto com desconto aplicado corretamente");
                System.out.println("Produto" + " - " + "Preço Atual" + " - " + "Quantidade" + " - " + "Preço Original");
                System.out.println(produto1);
        }

}
