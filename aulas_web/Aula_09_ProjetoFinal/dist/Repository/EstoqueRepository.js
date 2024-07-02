"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const global_1 = require("../global/global");
class EstoqueRepository {
    constructor() {
        this.estoqueList = (0, global_1.getEstoque)();
        //Estoque fim
    }
    adicionarEstoque(produto) {
        this.estoqueList.push(produto);
    }
    listarEstoque() {
        return this.estoqueList;
    }
    consultaEstoqueId(idNum) {
        return this.estoqueList.find(Estoque => Estoque.id === idNum);
    }
    consultaEstoquePorMOD(idNum) {
        return this.estoqueList.find(Estoque => Estoque.modalidadeId === idNum);
    }
    alterarEstoque(produto) {
        const index = this.estoqueList.indexOf(produto);
        if (index !== -1) {
            this.estoqueList[index] = produto;
        }
        return index;
    }
    deletarEstoque(produto) {
        const index = this.estoqueList.indexOf(produto);
        if (index !== -1) {
            this.estoqueList.splice(index, 1);
        }
    }
}
exports.EstoqueRepository = EstoqueRepository;
