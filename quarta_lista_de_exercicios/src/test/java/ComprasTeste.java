import java.math.BigDecimal;

import org.exercicios.entities.compras.CarrinhoDeCompras;
import org.exercicios.entities.compras.Dinheiro;
import org.exercicios.entities.compras.ItemCarrinho;
import org.exercicios.entities.compras.Produto;
import org.exercicios.entities.compras.enums.Moeda;
import org.junit.Assert;
import org.junit.Test;

public class ComprasTeste {

        @Test(expected = IllegalArgumentException.class)
        public void falharAoAtribuirQuantidadeAbaixoDeZero() {
                Produto produto = new Produto(1, "Produto 1",
                                new Dinheiro(BigDecimal.valueOf(100.0), Moeda.REAL));

                try {
                        new ItemCarrinho(1, produto, -5);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("A quantidade deve ser maior que zero.", e.getMessage());

                        System.out.println("TESTE 1: falhar ao atribuir quantidade abaixo de zero");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IllegalArgumentException.class)
        public void falharAoAtribuirDescontoAbaixoDeZeroEAcimaDeTrinta() {
                CarrinhoDeCompras carrinho = new CarrinhoDeCompras();

                Produto produto = new Produto(1, "Produto 1",
                                new Dinheiro(BigDecimal.valueOf(100.0), Moeda.REAL));

                carrinho.adicionarItem(new ItemCarrinho(1, produto, 5));

                System.out.println("TESTE 2: falhar ao atribuir desconto abaixo de 0% e acima de 30%");

                try {
                        carrinho.aplicarDesconto(50);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("O desconto deve estar entre 0 e 30%", e.getMessage());

                        System.out.println(e.getMessage());
                }

                try {
                        carrinho.aplicarDesconto(-1);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("O desconto deve estar entre 0 e 30%", e.getMessage());

                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test
        public void criarUmProdutoComSucesso() {
                Dinheiro valor1 = new Dinheiro(BigDecimal.valueOf(100.0), Moeda.REAL);
                Produto produto1 = new Produto(1, "Produto 1", valor1);

                System.out.println("TESTE 3: criar um produto com sucesso");
                System.out.printf("Nome: %s preco: %s\n",
                                produto1.getNome(), produto1.getPreco().getValor());

                Assert.assertEquals(1, produto1.getId().intValue());
                Assert.assertEquals("Produto 1", produto1.getNome());
        }

        @Test
        public void adicionarItensAoItemCarrinho() {
                Dinheiro valor1 = new Dinheiro(BigDecimal.valueOf(100.0), Moeda.REAL);
                Dinheiro valor2 = new Dinheiro(BigDecimal.valueOf(200.0), Moeda.REAL);

                Produto produto1 = new Produto(1, "Produto 1", valor1);
                Produto produto2 = new Produto(2, "Produto 2", valor2);

                ItemCarrinho item1 = new ItemCarrinho(1, produto1, 2);
                ItemCarrinho item2 = new ItemCarrinho(2, produto2, 3);

                Assert.assertEquals(1, item1.getId());
                Assert.assertEquals(2, item2.getId());

                System.out.println("TESTE 4: adicionar itens ao item carrinho");
                System.out.printf("Item 1: %s, quantidade: %d, valor total: %.2f\n",
                                item1.getProduto().getNome(), item1.getQuantidade(), item1.valorTotal());
                System.out.printf("Item 2: %s, quantidade: %d, valor total: %.2f\n",
                                item2.getProduto().getNome(), item2.getQuantidade(), item2.valorTotal());
        }

        @Test
        public void adicionarItensAoCarrinhoDeCompras() {
                CarrinhoDeCompras carrinho = new CarrinhoDeCompras();

                Dinheiro valor1 = new Dinheiro(BigDecimal.valueOf(300.0), Moeda.REAL);
                Dinheiro valor2 = new Dinheiro(BigDecimal.valueOf(150.0), Moeda.REAL);

                Produto produto1 = new Produto(1, "Produto 1", valor1);
                Produto produto2 = new Produto(2, "Produto 2", valor2);

                ItemCarrinho item1 = new ItemCarrinho(1, produto1, 4);
                ItemCarrinho item2 = new ItemCarrinho(2, produto2, 8);

                carrinho.adicionarItem(item1);
                carrinho.adicionarItem(item2);
 
                Assert.assertEquals(2, carrinho.listarItens().size());

                System.out.println("TESTE 5: adicionar itens ao carrinho de compras");
                carrinho.listarItens().forEach(item -> {
                        System.out.printf("Item: %s, quantidade: %d, valor total: %.2f\n",
                                        item.getProduto().getNome(), item.getQuantidade(), item.valorTotal());
                });
        }

        @Test
        public void aplicarDescontoAoCarrinhoDeCompras() {
                CarrinhoDeCompras carrinho = new CarrinhoDeCompras();

                Dinheiro valor1 = new Dinheiro(BigDecimal.valueOf(300.0), Moeda.REAL);
                Dinheiro valor2 = new Dinheiro(BigDecimal.valueOf(150.0), Moeda.REAL);

                Produto produto1 = new Produto(1, "Produto 1", valor1);
                Produto produto2 = new Produto(2, "Produto 2", valor2);

                ItemCarrinho item1 = new ItemCarrinho(1, produto1, 4);
                ItemCarrinho item2 = new ItemCarrinho(2, produto2, 8);

                carrinho.adicionarItem(item1);
                carrinho.adicionarItem(item2);

                System.out.println("TESTE 6: aplicar desconto ao carrinho de compras");
                System.out.printf("Valor total antes do desconto: %.2f\n", carrinho.getValorTotal());

                carrinho.aplicarDesconto(10);

                Assert.assertEquals(10, carrinho.getDesconto());

                System.out.printf("Valor total apos o desconto de 10%%: %.2f\n", carrinho.getValorTotal());
        }
}
