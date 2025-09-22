import org.exercicios.entities.generics.*;
import org.junit.Assert;
import org.junit.Test;

public class GenericsTeste {

        @Test(expected = EntidadeNaoEncontradaException.class)
        public void falharAoTentarRemoverProdutoComIdInexistente() {
                IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();

                Produto produto1 = new Produto(1, "Produto 1", 100.0);
                Produto produto2 = new Produto(2, "Produto 2", 200.0);

                produtoRepository.salvar(produto1);
                produtoRepository.salvar(produto2);

                try {
                        produtoRepository.remover(3);
                } catch (EntidadeNaoEncontradaException e) {
                        Assert.assertEquals("ID nulo ou entidade nao encontrada.", e.getMessage());

                        System.out.println("TESTE 1: falhar ao tentar remover produto com id inexistente");
                        System.out.println(e.getMessage());

                        throw new EntidadeNaoEncontradaException(e.getMessage());
                }
        }

        @Test
        public void criarESalvarProdutosComSucesso() {
                IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();

                Produto produto1 = new Produto(1, "Produto 1", 100.0);
                Produto produto2 = new Produto(2, "Produto 2", 200.0);

                Assert.assertNotNull(produto1);
                Assert.assertNotNull(produto2);

                produtoRepository.salvar(produto1);
                produtoRepository.salvar(produto2);

                Assert.assertEquals(2, produtoRepository.listarTodos().size());

                System.out.println("TESTE 2: criar e salvar produtos com sucesso");
                for (Produto produto : produtoRepository.listarTodos()) {
                        System.out.printf("nome: %s, preco: %.2f%n",
                                        produto.getNome(), produto.getPreco());
                }
        }

        @Test
        public void criarESalvarFuncionariosComSucesso() {
                IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

                Funcionario funcionario1 = new Funcionario("1", "Funcionario 1", "Desenvolvedor");
                Funcionario funcionario2 = new Funcionario("2", "Funcionario 2", "Gerente");

                Assert.assertNotNull(funcionario1);
                Assert.assertNotNull(funcionario2);

                funcionarioRepository.salvar(funcionario1);
                funcionarioRepository.salvar(funcionario2);

                Assert.assertEquals(2, funcionarioRepository.listarTodos().size());

                System.out.println("TESTE 3: criar e salvar funcionarios com sucesso");
                for (Funcionario funcionario : funcionarioRepository.listarTodos()) {
                        System.out.printf("nome: %s, cargo: %s%n",
                                        funcionario.getNome(), funcionario.getCargo());
                }
        }
}
