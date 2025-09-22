package org.exercicios.entities.generics;

import java.util.List;
import java.util.Optional;

public interface IRepository<T extends Identificavel<ID>, ID> {
        void salvar(T entidade);
        void remover(ID id);
        Optional<T> buscarPorId(ID id);
        List<T> listarTodos();
}
