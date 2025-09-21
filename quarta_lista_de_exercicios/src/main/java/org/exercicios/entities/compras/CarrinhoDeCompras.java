package org.exercicios.entities.compras;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CarrinhoDeCompras {
        private Map<Integer, ItemCarrinho> carrinhoDeCompras = new HashMap<>();
        BigDecimal valorTotal;
        int desconto;

        public CarrinhoDeCompras() {
                setCarrinhoDeCompras(carrinhoDeCompras);
                this.valorTotal = BigDecimal.ZERO;
                this.desconto = 0;
        }

        public void setCarrinhoDeCompras(Map<Integer, ItemCarrinho> carrinhoDeCompras) {
                this.carrinhoDeCompras = carrinhoDeCompras;
        }

        public void setValorTotal(BigDecimal valorTotal) {
                this.valorTotal = valorTotal.add(this.valorTotal);
        }

        public List<ItemCarrinho> listarItens() {
                return Collections.unmodifiableList(new ArrayList<>(carrinhoDeCompras.values()));
        }

        public List<ItemCarrinho> adicionarItem(ItemCarrinho item) {
                carrinhoDeCompras.put(item.getId(), item);
                setValorTotal(item.getProduto().getPreco().getValor()
                                .multiply(BigDecimal.valueOf(item.getQuantidade())));
                return listarItens();
        }

        public List<ItemCarrinho> removerItem(Integer id) {
                ItemCarrinho produto = carrinhoDeCompras.remove(id);
                setValorTotal(BigDecimal.valueOf(-1).multiply(produto.getProduto().getPreco().getValor()
                                .multiply(BigDecimal.valueOf(-produto.getQuantidade()))));
                return listarItens();
        }

        public void aplicarDesconto(int desconto) {
                if (desconto > 30 || desconto < 0) {
                        throw new IllegalArgumentException("O desconto deve estar entre 0 e 30%");
                } else {
                        this.desconto = desconto;
                        this.valorTotal = this.valorTotal
                                        .subtract(this.valorTotal.multiply(BigDecimal.valueOf(desconto)).divide(BigDecimal.valueOf(100)));
                }
        }

        public Map<Integer, ItemCarrinho> getCarrinhoDeCompras() {
                return carrinhoDeCompras;
        }

        public BigDecimal getValorTotal() {
                return valorTotal;
        }

        public int getDesconto() {
                return desconto;
        }
}
