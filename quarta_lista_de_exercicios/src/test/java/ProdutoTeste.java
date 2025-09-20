import org.junit.Assert;
import org.junit.Test;
import java.math.BigDecimal;
import org.exercicios.entities.produto.Produto;

public class ProdutoTeste {
        @Test(expected = IllegalArgumentException.class)
        public void falharAoNomearOProdutoComUmaStringVazia() {
                String nomeDoProduto = "";
                float preco = 100f;
                int quantidadeEmEstoque = 10;

                try {
                        new Produto(nomeDoProduto, preco, quantidadeEmEstoque);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Nome não pode ser nulo ou vazio", e.getMessage());

                        System.out.println("TESTE 1: falhar ao nomear o produto com uma string vazia");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IllegalArgumentException.class)
        public void falharAoNomearOProdutoComNull() {
                String nomeDoProduto = null;
                float preco = 100f;
                int quantidadeEmEstoque = 10;

                try {
                        new Produto(nomeDoProduto, preco, quantidadeEmEstoque);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Nome não pode ser nulo ou vazio", e.getMessage());

                        System.out.println("TESTE 2: falhar ao nomear o produto com null");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IllegalArgumentException.class)
        public void falharAoDefinirPrecoAbaixoDeZero() {
                String nomeDoProduto = "Produto com preço negativo";
                float preco = -1f;
                int quantidadeEmEstoque = 10;

                try {
                        new Produto(nomeDoProduto, preco, quantidadeEmEstoque);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Preço deve ser positivo", e.getMessage());

                        System.out.println("TESTE 3: falhar ao definir preço abaixo de zero");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IllegalArgumentException.class)
        public void falharAoDefinirQuantidadeAbaixoDeZero() {
                String nomeDoProduto = "Produto com preço negativo";
                float preco = 100f;
                int quantidadeEmEstoque = -1;

                try {
                        new Produto(nomeDoProduto, preco, quantidadeEmEstoque);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Quantidade deve ser positiva", e.getMessage());

                        System.out.println("TESTE 4: falhar ao definir quantidade abaixo de zero");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test
        public void oProdutoSerCriadoComSucesso() {
                String nomeDoProduto = "Calça";
                float preco = 100f;
                int quantidadeEmEstoque = 10;

                Produto produto1 = new Produto(nomeDoProduto, preco, quantidadeEmEstoque);

                System.out.println("TESTE 5: o produto ser criado com sucesso");
                System.out.println("Produto" + " - " + "Preço" + " - " + "Quantidade");
                System.out.println(produto1);

                Assert.assertEquals(nomeDoProduto, produto1.getNome());
                Assert.assertEquals(0, produto1.getPreco().compareTo(BigDecimal.valueOf(preco)));
                Assert.assertEquals(quantidadeEmEstoque, produto1.getQuantidade());
        }
}
