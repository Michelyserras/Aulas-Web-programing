"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const vendaPaes_1 = require("../Model/vendaPaes");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
const Venda_1 = require("../Repository/Venda");
class VendaService {
    constructor() {
        this.vendaRepository = new Venda_1.VendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        // vendas fim
    }
    // vendas
    cadastrarCompra(compraData) {
        const { cpfCliente, itensComprados, valorTotal } = compraData;
        if (!cpfCliente || !itensComprados) {
            throw new Error("Informações incompletas");
        }
        if (this.estoqueRepository.consultaEstoqueId(itensComprados.estoqueId)) {
            const novaCompra = new vendaPaes_1.VendaPaes(cpfCliente, valorTotal, itensComprados);
            this.vendaRepository.realizarVenda(novaCompra);
            return novaCompra;
        }
        throw new Error("Estoque insuficiente ou não existente!");
    }
    ProcurarVendaPorID(id) {
        const numId = parseInt(id, 10);
        console.log(numId);
        return this.vendaRepository.filtrarVendaPorId(numId);
    }
}
exports.VendaService = VendaService;
