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
        /* retirarEstoque(estoqueData: any): any{
             const estoque = this.ProcurarPorID(estoqueData);
     
             if(estoque){
                 return this.estoqueRepository.deletarQtd(estoque);
             }else{
                 throw new Error("Estoque informado não existe!");
             }
         }
     */
    }
    // Estoque 
    adicionarEstoque(produtoData) {
        const { modalidadeId, quantidade, precoVenda } = produtoData;
        if (!modalidadeId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const novoEstoque = new estoque_1.EstoquePaes(modalidadeId, quantidade, precoVenda); //instanciando novo estoque;
        const modalidadeExiste = this.modalidadeRepository.filtrarPorId(novoEstoque.modalidadeId); // verificando se a modalidade existe antes de add novo estoque;
        console.log("Verificando modalidade: ", modalidadeExiste);
        if (modalidadeExiste) {
            const estoqueExiste = this.estoqueRepository.consultaEstoquePorMOD(novoEstoque.modalidadeId); // verificando se existe um estoque com a mesma modalidade;
            console.log("Verificando se estoque existe", estoqueExiste);
            if (estoqueExiste) {
                throw new Error("Estoque já existe! Tente atualizar a quantidade... utilizando put");
            }
            this.estoqueRepository.adicionarEstoque(novoEstoque);
            return novoEstoque;
        }
        throw new Error("Modalidade não existe!");
    }
    ListaTodoEstoque() {
        const listaTamanho = this.estoqueRepository.estoqueList.length;
        if (listaTamanho > 0) {
            return this.estoqueRepository.listarEstoque();
        }
        else {
            throw new Error("Não há nenhum estoque cadastrado!");
        }
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
        const lista = this.estoqueRepository.estoqueList;
        let i = 0;
        for (i = 0; i < lista.length; i++) {
            if (estoqueData.id === lista[i].id) { // verifica se o id existe na lista
                if (estoqueData.quantidade <= lista[i].quantidade) { // verifica se a quantidade a ser retirada é menor a quantidade disponivel em estoque
                    lista[i].quantidade -= estoqueData.quantidade; // remove a quantidade do estoque
                    if (lista[i].quantidade === 0) { // se a quantidade for igual a 0, remove todo os dados do estoqye
                        lista.splice(i, 1);
                    }
                    return lista[i]; //retorna a lista atualizada
                }
                else {
                    throw new Error("O estoque não possui quantidade suficiente para ser removido.");
                }
            }
        }
        throw new Error("Estoque informado não existe!");
    }
}
exports.EstoqueService = EstoqueService;
