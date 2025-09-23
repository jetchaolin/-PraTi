import java.io.IOException;
import java.math.BigDecimal;

import org.exercicios.entities.frete.BuscarCep;
import org.exercicios.entities.frete.Pac;
import org.exercicios.entities.frete.Pedido;
import org.exercicios.entities.frete.RetiradaNaLoja;
import org.exercicios.entities.frete.Sedex;
import org.junit.Assert;
import org.junit.Test;

public class FreteTeste {

        @Test(expected = IllegalArgumentException.class)
        public void falharCriarPedidoComValorNegativo() {
                BigDecimal valor = BigDecimal.valueOf(-50.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();

                try {
                        Pedido pedido = new Pedido(valor, peso, endereco, estrategia);
                        Assert.fail("Deveria ter lançado uma exceção para valor negativo");
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Valor do pedido não pode ser negativo", e.getMessage());

                        System.out.println("Exceção capturada com sucesso: " + e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IllegalArgumentException.class)
        public void falharCriarPedidoComPesoNegativo() {
                BigDecimal valor = BigDecimal.valueOf(50.0);
                BigDecimal peso = BigDecimal.valueOf(-5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();

                try {
                        new Pedido(valor, peso, endereco, estrategia);
                        Assert.fail("Deveria ter lançado uma exceção para peso negativo");
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Peso do pedido não pode ser negativo", e.getMessage());

                        System.out.println("Exceção capturada com sucesso: " + e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test(expected = IOException.class)
        public void falharCriarPedidoComCepInvalido() throws IOException {
                BuscarCep buscarCep = new BuscarCep();
                String endereco = "00000-00";

                try {
                        buscarCep.buscarEstadoPorCep(endereco);
                } catch (IOException e) {
                        System.out.println("Erro ao buscar CEP: " + e.getMessage());
                        Assert.assertEquals("CEP deve ter 8 dígitos", e.getMessage());

                        System.out.println("Exceção capturada com sucesso: " + e.getMessage());

                        throw new IOException(e.getMessage());
                }
        }

        @Test
        public void criarPedidoComSucesso() {
                BigDecimal valor = BigDecimal.valueOf(50.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);

                System.out.printf("Preco: %s Peso: %s Endereço: %s Entrega: %s via %s Valor total: %s\n",
                                pedido.getPreco(), pedido.getPeso(),
                                pedido.getEndereco(), pedido.CalcularadoraFrete(), estrategia.toString(),
                                pedido.getValorTotal());

                Assert.assertEquals(BigDecimal.valueOf(50.0), pedido.getPreco());
                Assert.assertEquals(BigDecimal.valueOf(5.0), pedido.getPeso());
                Assert.assertEquals("RJ", pedido.getEndereco());
        }

        @Test
        public void criarPedidoViaSedexComSucesso() {
                BigDecimal valor = BigDecimal.valueOf(50.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Sedex estrategia = new Sedex();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);

                System.out.printf("Preco: %s Peso: %s Endereço: %s Entrega: %s via %s Valor total: %s\n",
                                pedido.getPreco(), pedido.getPeso(),
                                pedido.getEndereco(), pedido.CalcularadoraFrete(), estrategia.toString(),
                                pedido.getValorTotal());

                Assert.assertEquals(BigDecimal.valueOf(50.0), pedido.getPreco());
                Assert.assertEquals(BigDecimal.valueOf(5.0), pedido.getPeso());
                Assert.assertEquals("RJ", pedido.getEndereco());
        }

        @Test
        public void criarPedidoComRetiradaNaLojaComSucesso() {
                BigDecimal valor = BigDecimal.valueOf(50.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                RetiradaNaLoja estrategia = new RetiradaNaLoja();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);

                System.out.printf("Preco: %s Peso: %s Endereço: %s Entrega: %s via %s Valor total: %s\n",
                                pedido.getPreco(), pedido.getPeso(),
                                pedido.getEndereco(), pedido.CalcularadoraFrete(), estrategia.toString(),
                                pedido.getValorTotal());

                Assert.assertEquals(BigDecimal.valueOf(50.0), pedido.getPreco());
                Assert.assertEquals(BigDecimal.valueOf(5.0), pedido.getPeso());
                Assert.assertEquals("RJ", pedido.getEndereco());
        }

        @Test
        public void buscarCepRetornarEndereco() {
                String endereco = "25815-280";
                BuscarCep buscarCep = new BuscarCep();

                try {
                        String estado = buscarCep.buscarEstadoPorCep(endereco);
                        System.out.println("Estado: " + estado);
                } catch (IOException e) {
                        System.err.println("Erro: " + e.getMessage());
                }

        }

        @Test
        public void verificarCalculoFrete() {
                BigDecimal valor = BigDecimal.valueOf(100.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);
                BigDecimal freteCalculado = pedido.CalcularadoraFrete();

                System.out.printf("Frete Calculado: %s\n", freteCalculado);

                Assert.assertEquals(BigDecimal.valueOf(41.42).setScale(2), freteCalculado.setScale(2));
        }

        @Test
        public void verificarPromocao() {
                BigDecimal valor = BigDecimal.valueOf(101.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);

                pedido.getValorTotal();

                System.out.printf("Preço com Desconto: %s\n", pedido.getValorTotal());

                Assert.assertEquals(BigDecimal.valueOf(101.0).setScale(2), pedido.getValorTotal().setScale(2));
        }

        @Test
        public void alterarEstrategiaPedido() {
                BigDecimal valor = BigDecimal.valueOf(100.0);
                BigDecimal peso = BigDecimal.valueOf(5.0);
                String endereco = "25815-280";
                Pac estrategia = new Pac();
                RetiradaNaLoja retiradaNaLoja = new RetiradaNaLoja();

                Pedido pedido = new Pedido(valor, peso, endereco, estrategia);

                System.out.printf("Entrega: %s Preço: %s\n", pedido.getEstrategia().toString(),
                                pedido.getValorTotal());

                pedido.setEstrategia(retiradaNaLoja);
                pedido.setValorTotal();

                System.out.printf("Entrega: %s Preço: %s\n", pedido.getEstrategia().toString(),
                                pedido.getValorTotal());

                Assert.assertEquals("Retirada na Loja", pedido.getEstrategia().toString());
        }
}
