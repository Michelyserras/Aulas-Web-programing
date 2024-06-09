"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../Model/Product");
const ProductRepository_1 = require("./Repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
        // vendas fim
    }
    //Modalidade
    cadastrarModalidade(ModalidadeData) {
        const { id, nome, vegano } = ModalidadeData;
        if (!id || !nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new Product_1.Modalidade(id, nome, vegano);
        this.productRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtrarPorId(idNumber);
    }
    getModalidades() {
        return this.productRepository.exibeTodasModalidade();
    }
    alterarModalidade(produto) {
        const { id, nome, vegano } = produto;
        if (!id || !nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        let novoP = this.consultarModalidade(id);
        if (!novoP) {
            throw new Error(" Modalidade não cadastrada");
        }
        novoP.id = id;
        novoP.nome = nome;
        novoP.vegano = vegano;
        this.productRepository.alterarModalidade(novoP);
        return novoP;
    }
    excluirModalidade(ModalidadeData) {
        const produto = this.consultarModalidade(ModalidadeData);
        if (produto) {
            return this.productRepository.deletaModalidade(produto);
        }
        else {
            throw new Error("Modalidade não existe!");
        }
    }
    // Modalidade Fim~
    // Estoque 
    adicionarEstoque(Produtodata) {
        const { id, modalidadeId, quantidade, precoVenda } = Produtodata;
        if (!modalidadeId || !quantidade || !precoVenda) {
            throw new Error("Informaações incompletas");
        }
        if (this.productRepository.filtrarPorId(modalidadeId)) {
            const novoProduto = new Product_1.EstoquePaes(id, modalidadeId, quantidade, precoVenda);
            this.productRepository.adicionarEstoque(novoProduto);
            return novoProduto;
        }
        throw new Error("Modalidade informada não existe");
    }
    ListaTodoEstoque() {
        return this.productRepository.listarEstoque();
    }
    ProcurarPorID(id) {
        const numId = parseInt(id, 10);
        console.log(numId);
        return this.productRepository.consultaEstoqueId(numId);
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
        novoP.quantidade = quantidade;
        novoP.precoVenda = precoVenda;
        this.productRepository.alterarEstoque(novoP);
        return novoP;
    }
    deletarEstoque(estoqueData) {
        const estoque = this.ProcurarPorID(estoqueData);
        if (estoque) {
            return this.productRepository.deletarEstoque(estoque);
        }
        else {
            throw new Error("Estoque informado não existe!");
        }
    }
    // Estoque fim
    // vendas
    cadastrarCompra(compraData) {
        let { cpfCliente, itensComprados, valorTotal } = compraData;
        if (!cpfCliente || !itensComprados) {
            throw new Error("Informações incompletas");
        }
        if (this.ProcurarPorID(itensComprados)) {
            this.productRepository.totalCompra();
            const novaCompra = new Product_1.VendaPaes(cpfCliente, valorTotal, itensComprados);
            this.productRepository.realizarVenda(novaCompra);
            return novaCompra;
        }
        throw new Error("Estoque insuficiente ou não existente!");
    }
}
exports.ProductService = ProductService;
