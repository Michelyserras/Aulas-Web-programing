"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeService = void 0;
const ModalidadePaes_1 = require("../Model/ModalidadePaes");
const ModalidadeRepository_1 = require("../Repository/ModalidadeRepository");
class ModalidadeService {
    constructor() {
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadeRepository();
        // Modalidade Fim~
    }
    //Modalidade
    cadastrarModalidade(ModalidadeData) {
        const { nome, vegano } = ModalidadeData;
        if (!nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new ModalidadePaes_1.Modalidade(nome, vegano);
        this.modalidadeRepository.cadastrarModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.modalidadeRepository.filtrarPorId(idNumber);
    }
    getModalidades() {
        return this.modalidadeRepository.exibeTodasModalidade();
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
        this.modalidadeRepository.alterarModalidade(novoP);
        return novoP;
    }
    excluirModalidade(ModalidadeData) {
        const produto = this.consultarModalidade(ModalidadeData);
        if (produto) {
            return this.modalidadeRepository.deletaModalidade(produto);
        }
        else {
            throw new Error("Modalidade não existe!");
        }
    }
}
exports.ModalidadeService = ModalidadeService;
