import org.junit.Assert;
import org.junit.Test;
import java.math.BigDecimal;
import org.exercicios.entities.funcionario.*;
import java.util.List;
import java.util.Arrays;

public class FuncionarioTeste {
        @Test(expected = IllegalArgumentException.class)
        public void falharAoAtribuirSalarioMenorQueZeroParaUmDesenvolvedor() {
                String NomeDoDesenvolvedor = "João";
                BigDecimal salario = BigDecimal.valueOf(-1);

                try {
                        new Desenvolvedor(NomeDoDesenvolvedor, salario);
                } catch (IllegalArgumentException e) {
                        Assert.assertEquals("Salário deve ser positivo", e.getMessage());

                        System.out.println("TESTE 1: falhar ao atribuir salário menor que zero");
                        System.out.println(e.getMessage());

                        throw new IllegalArgumentException(e.getMessage());
                }
        }

        @Test
        public void listarFuncionariosEImprimirOBonusDeCadaUm() {
                BigDecimal salarioBase = BigDecimal.valueOf(1000);

                List<Funcionario> funcionarios = Arrays.asList(
                        new Funcionario("Roberto", salarioBase),
                        new Desenvolvedor("Maria", salarioBase),
                        new Gerente("Erica", salarioBase)
                );
 
                System.out.println("TESTE 2: listar funcionários e imprimir o bônus de cada um");

                funcionarios.forEach(funcionario -> {
                        switch (funcionario) {
                                case Desenvolvedor dev -> dev.calcularBonus(dev.getSalario());
                                case Gerente gerente -> gerente.calcularBonus(gerente.getSalario());
                                case Funcionario func -> func.calcularBonus(func.getSalario());
                        }

                        BigDecimal bonus = funcionario.getSalario().subtract(salarioBase);

                        System.out.printf("Nome: %s - Salário: %s - Bonus: %s%n",
                        funcionario.getNome(),
                        funcionario.getSalario(),
                        bonus
                        );
                });
        }
}
