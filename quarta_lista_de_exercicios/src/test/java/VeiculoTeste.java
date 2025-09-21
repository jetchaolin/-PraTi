import org.junit.Test;
import org.junit.Assert;
import org.exercicios.entities.veiculo.*;
import java.util.List;
import java.util.Arrays;

public class VeiculoTeste {
        // @Test
        // public void criarBicicletaEAcelerarDepoisFrear() {
        //         Bicicleta bicicleta = new Bicicleta("Caloi");
        //
        //         Assert.assertEquals("Caloi", bicicleta.getNomeDoVeiculo());
        //         Assert.assertEquals(40, bicicleta.getLimiteDeVelocidade());
        //         Assert.assertEquals(8, bicicleta.getVariacaoDeVelocidade());
        //
        //         System.out.println("TESTE 1: criar bicicleta e acelerar depois frear");
        //         bicicleta.acelerar();
        //         bicicleta.frear();
        // }
        //
        // @Test
        // public void criarCarroEAcelerarDepoisFrear() {
        //         Carro carro = new Carro("Civic");
        //
        //         Assert.assertEquals("Civic", carro.getNomeDoVeiculo());
        //         Assert.assertEquals(120, carro.getLimiteDeVelocidade());
        //         Assert.assertEquals(13, carro.getVariacaoDeVelocidade());
        //
        //         System.out.println("TESTE 2: criar carro e acelerar depois frear");
        //         carro.acelerar();
        //         carro.frear();
        // }
        //
        // @Test
        // public void criarTremEAcelerarDepoisFreat() {
        //         Trem trem = new Trem("CPTM");
        //
        //         Assert.assertEquals("CPTM", trem.getNomeDoVeiculo());
        //         Assert.assertEquals(240, trem.getLimiteDeVelocidade());
        //         Assert.assertEquals(26, trem.getVariacaoDeVelocidade());
        //
        //         System.out.println("TESTE 3: criar trem e acelerar depois frear");
        //         trem.acelerar();
        //         trem.frear();
        // }

        @Test
        public void criarVeiculosAdicionalosAListaEDepoisIterar() {
                Bicicleta bicicleta = new Bicicleta("Caloi");
                Carro carro = new Carro("Civic");
                Trem trem = new Trem("CPTM");

                Assert.assertEquals("Caloi", bicicleta.getNomeDoVeiculo());
                Assert.assertEquals(40, bicicleta.getLimiteDeVelocidade());
                Assert.assertEquals(8, bicicleta.getVariacaoDeVelocidade());

                Assert.assertEquals("Civic", carro.getNomeDoVeiculo());
                Assert.assertEquals(120, carro.getLimiteDeVelocidade());
                Assert.assertEquals(13, carro.getVariacaoDeVelocidade());

                Assert.assertEquals("CPTM", trem.getNomeDoVeiculo());
                Assert.assertEquals(240, trem.getLimiteDeVelocidade());
                Assert.assertEquals(26, trem.getVariacaoDeVelocidade());

                List<Veiculo> veiculos = Arrays.asList(bicicleta, carro, trem);

                System.out.println("TESTE 1: criar veiculos adiciona-los ao array e depois iterar");

                veiculos.forEach(veiculo -> {
                        veiculo.acelerar();
                        veiculo.frear();
                });
        }
}
