package org.exercicios.entities.compras;

public class Produto {
        private Integer id;
        private String nome;
        private Dinheiro preco;

        public Produto(Integer id, String name, Dinheiro preco) {
                this.id = id;
                setNome(name);
                setPreco(preco);
        }

        public Integer getId() {
                return this.id;
        }

        public String getNome() {
                return this.nome;
        }

        public Dinheiro getPreco() {
                return this.preco;
        }

        public void setId(Integer id) {
                this.id = id;
        }

        public void setNome(String name) {
                this.nome = name;
        }

        public void setPreco(Dinheiro preco) {
                this.preco = preco;
        }


}

