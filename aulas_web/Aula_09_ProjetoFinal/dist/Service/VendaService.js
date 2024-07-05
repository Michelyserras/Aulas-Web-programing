"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const vendaPaes_1 = require("../Model/vendaPaes");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
const VendaRepository_1 = require("../Repository/VendaRepository");
const ModalidadeRepository_1 = require("../Repository/ModalidadeRepository");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadeRepository();
    }
    // vendas
    cadastrarCompra(compraData) {
        const { cpfCliente, itensComprados } = compraData;
        let total = 0;
        if (!cpfCliente || !itensComprados) {
            throw new Error("Informações incompletas");
        }
        for (let i = 0; i < itensComprados.length; i++) { // loop usado para percorrer a lista de itens 
            const estoque = this.estoqueRepository.consultaEstoqueId(itensComprados[i].estoqueId);
            //verificando se o estoque existe
            if (!estoque) {
                throw new Error("Produto não existe!");
            }
            // a compra apenas sera realizada se houver um estoque disponivel
            if (itensComprados[i].quantidade > estoque.quantidade) { // se o a quantidade disponivel de produtos for menor que a quantidade comprada
                throw new Error(`O produto ${itensComprados[i].nome} está esgotado, não será possível efetivar a compra!`);
            }
            // caso contrário a venda será realizada
            if (estoque.quantidade <= estoque.quantidade) {
                itensComprados[i].nome = this.modalidadeRepository.buscarPorNome(estoque.modalidadeId); // adicionando o nome do produto na venda
                console.log("estoque atual", estoque);
                total += itensComprados[i].quantidade * estoque.precoVenda; // somando valor total
                console.log("somando valores", total);
            }
        }
        const produtos = itensComprados;
        const novaCompra = new vendaPaes_1.VendaPaes(cpfCliente, total, produtos);
        this.vendaRepository.realizarVenda(novaCompra);
        console.log("Compra realizada com sucesso!", novaCompra);
        //atualizando o estoque após a venda
        for (let i = 0; i < itensComprados.length; i++) {
            const estoque = this.estoqueRepository.consultaEstoqueId(itensComprados[i].estoqueId);
            if (estoque) { // apenas se o estoque existir a quantidade será retirada.
                estoque.quantidade -= itensComprados[i].quantidade;
                console.log(`Estoque atualizado para o produto ${itensComprados[i].nome}: ${estoque.quantidade}`);
            }
        }
        return novaCompra;
    }
    procurarCompras(idNum) {
        const id = parseInt(idNum, 10);
        console.log(idNum);
        return this.vendaRepository.consultaCompraId(id);
    }
    listarCompras() {
        if (this.vendaRepository.vendasList.length > 0) {
            return this.vendaRepository.listarCompras();
        }
        else {
            throw new Error("Não há nenhuma venda cadastrada!");
        }
    }
}
exports.VendaService = VendaService;
