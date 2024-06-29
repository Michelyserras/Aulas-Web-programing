"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const ModalidadeRepository_1 = require("../Repository/ModalidadeRepository");
const estoque_1 = require("../Model/estoque");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadeRepository();
    }
    // Estoque 
    adicionarEstoque(Produtodata) {
        const { modalidadeId, quantidade, precoVenda } = Produtodata;
        if (!modalidadeId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const modalidade = this.modalidadeRepository.filtrarPorId(modalidadeId);
        if (modalidade) {
            const novoProduto = new estoque_1.EstoquePaes(modalidadeId, quantidade, precoVenda);
            this.estoqueRepository.adicionarEstoque(novoProduto);
            return novoProduto;
        }
        throw new Error("Modalidade informada não existe");
    }
    ListaTodoEstoque() {
        return this.estoqueRepository.listarEstoque();
    }
    ProcurarPorID(id) {
        const numId = parseInt(id, 10);
        console.log(numId);
        return this.estoqueRepository.consultaEstoqueId(numId);
    }
    atualizarEstoque(estoqueData) {
        const { id, quantidade, precoVenda } = estoqueData;
        if (!id || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        let novoP = this.ProcurarPorID(id);
        if (!novoP) {
            throw new Error(" Estoque não cadastrado");
        }
        novoP.id = id;
        novoP.quantidade += quantidade;
        novoP.precoVenda = precoVenda;
        this.estoqueRepository.alterarEstoque(novoP);
        return novoP;
    }
    deletarEstoque(estoqueData) {
        const estoque = this.ProcurarPorID(estoqueData);
        if (estoque) {
            return this.estoqueRepository.deletarEstoque(estoque);
        }
        else {
            throw new Error("Estoque informado não existe!");
        }
    }
}
exports.EstoqueService = EstoqueService;
