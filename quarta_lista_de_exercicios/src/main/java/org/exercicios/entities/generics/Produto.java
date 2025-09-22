package org.exercicios.entities.generics;

public class Produto implements Identificavel<Integer> {
        private Integer id;
        private String name;
        private double preco;

        public Produto(Integer id, String name, double preco) {
                this.id = id;
                this.name = name;
                this.preco = preco;
        }

        @Override
        public Integer getId() {
                return this.id;
        }

        public String getNome() {
                return this.name;
        }

        public double getPreco() {
                return this.preco;
        }
}
