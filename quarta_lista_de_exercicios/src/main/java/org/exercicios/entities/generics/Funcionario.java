package org.exercicios.entities.generics;

public class Funcionario implements Identificavel<String> {
        private final String id;
        private final String name;
        private final String cargo;

        public Funcionario(String id, String name, String cargo) {
                this.id = id;
                this.name = name;
                this.cargo = cargo;
        }

        @Override
        public String getId() {
                return this.id;
        }

        public String getNome() {
                return this.name;
        }

        public String getCargo() {
                return this.cargo;
        }
}
