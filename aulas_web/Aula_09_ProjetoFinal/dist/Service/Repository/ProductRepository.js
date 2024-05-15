"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        // Modalidade
        this.modalidadeList = [];
        //Modalidade Fim
        // Estoque
        this.estoqueList = [];
        //Estoque fim
        // venda
        this.vendasList = [];
        this.itensList = [];
        // venda fim
    }
    cadastrarModalidade(product) {
        this.modalidadeList.push(product);
    }
    filtrarPorId(id) {
        return this.modalidadeList.find(Modalidade => Modalidade.id === id);
    }
    exibeTodasModalidade() {
        return this.modalidadeList;
    }
    alterarModalidade(produto) {
        const index = this.modalidadeList.indexOf(produto);
        if (index !== -1) {
            this.modalidadeList[index] = produto;
        }
        return index;
    }
    deletaModalidade(product) {
        //this.modalidadeList = this.modalidadeList.filter((item) => item !== product);
        const index = this.modalidadeList.indexOf(product);
        if (index !== -1) {
            this.modalidadeList.splice(index, 1);
        }
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
    realizarVenda(compra) {
        this.vendasList.push(compra);
    }
    soma() {
        let soma = 0;
        for (let i = 0; i <= this.itensList.length; i++) {
            if (this.estoqueList[i].quantidade === 0) {
                throw new Error("Infelizmente o estoque está vazio!");
            }
            soma += this.itensList[i].quantidade * this.estoqueList[i].precoVenda;
        }
        return soma;
    }
}
exports.ProductRepository = ProductRepository;
