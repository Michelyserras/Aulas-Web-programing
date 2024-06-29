"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const EstoqueRepository_1 = require("./EstoqueRepository");
class VendaRepository {
    constructor() {
        // venda
        this.vendasList = [];
        // venda fim
    }
    realizarVenda(compra) {
        this.vendasList.push(compra);
    }
    pegarPreco(id) {
        const item = EstoqueRepository_1.EstoqueRepository.find(item => item.id === id);
        return item ? item.precoVenda : undefined;
    }
    calcularTotal(itensComprados) {
        let soma = 0;
        for (const item of itensComprados) {
            const preco = this.pegarPreco(item.estoqueId);
            if (preco !== undefined) {
                soma += (preco * item.quantidade);
            }
        }
        return soma;
    }
    filtrarVendaPorId(id) {
        return this.vendasList.find(VendaPaes => VendaPaes.id === id);
    }
}
exports.VendaRepository = VendaRepository;
