package org.exercicios.entities.generics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class InMemoryRepository <T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
        private Map<ID, T> repositorio = new HashMap<>();

        @Override
        public void salvar(T entidade) {
                repositorio.put(entidade.getId(), entidade);
        }

        @Override
        public void remover(ID id) {
                if (id == null || !repositorio.containsKey(id)) {
                        throw new EntidadeNaoEncontradaException("ID nulo ou entidade nao encontrada.");
                }
                repositorio.remove(id);
        }

        @Override
        public Optional<T> buscarPorId(ID id) {
                return Optional.ofNullable(repositorio.get(id));
        }

        @Override
        public List<T> listarTodos() {
                return Collections.unmodifiableList(new ArrayList<>(repositorio.values()));
        }

}
