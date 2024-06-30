"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const vendaPaes_1 = require("../Model/vendaPaes");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
const VendaRepository_1 = require("../Repository/VendaRepository");
const EstoqueService_1 = require("./EstoqueService");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.estoqueService = new EstoqueService_1.EstoqueService();
    }
    // vendas
    cadastrarCompra(compraData) {
        const { cpfCliente, itensComprados } = compraData;
        let valorTotal = 0;
        if (!cpfCliente || itensComprados.length == 0) {
            throw new Error("Informações incompletas");
        }
        // verificando se estoque existe e somando o mesmo;
        for (const item of itensComprados) {
            const estoque = this.estoqueService.ProcurarPorID(item.estoqueId);
            if (!estoque || estoque.quantidade < item.quantidade) {
                throw new Error("Produto fora de estoque");
            }
            valorTotal += estoque.precoVenda * item.quantidade;
        }
        const novaCompra = new vendaPaes_1.VendaPaes(cpfCliente, valorTotal, itensComprados);
        this.vendaRepository.realizarVenda(novaCompra);
        for (const item of itensComprados) {
            const estoqueItem = this.estoqueService.ProcurarPorID(item.estoqueId);
            if (estoqueItem) {
                estoqueItem.quantidade -= item.quantidade;
                this.estoqueService.atualizarEstoque(estoqueItem);
            }
        }
        return novaCompra;
    }
}
exports.VendaService = VendaService;
