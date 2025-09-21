package org.exercicios.entities.funcionario;

import java.math.BigDecimal;

public class Funcionario {
        protected String nome;
        protected BigDecimal salario;

        public Funcionario(String nome, BigDecimal salario) {
                setNome(nome);
                setSalario(salario);
        }

        public BigDecimal getSalario() {
                return salario;
        }

        public void setSalario(BigDecimal salario) {
                if (salario.compareTo(BigDecimal.ZERO) < 0) {
                        throw new IllegalArgumentException("Salário deve ser positivo");
                } else {
                        this.salario = salario;
                }
        }

        public String getNome() {
                return nome;
        }

        public void setNome(String nome) {
                this.nome = nome;
        }

        public void calcularBonus(BigDecimal salario) {
                BigDecimal salarioSemBonus = this.getSalario();
                BigDecimal bonus = salarioSemBonus.add(BigDecimal.ZERO);
                salario = salario.add(bonus);
        }
}
