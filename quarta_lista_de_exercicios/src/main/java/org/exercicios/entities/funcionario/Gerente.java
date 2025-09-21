package org.exercicios.entities.funcionario;
import java.math.BigDecimal;

public class Gerente extends Funcionario{
        private double bonusSalarial;

        public Gerente(String nome, BigDecimal salario) {
                super(nome, salario);
                this.bonusSalarial = 20;
        }

        @Override
        public void calcularBonus(BigDecimal salario) {
                BigDecimal salarioSemBonus = this.getSalario();
                BigDecimal bonus = salarioSemBonus.multiply(BigDecimal.valueOf(bonusSalarial / 100));
                super.setSalario(super.getSalario().add(bonus));
        }

}
