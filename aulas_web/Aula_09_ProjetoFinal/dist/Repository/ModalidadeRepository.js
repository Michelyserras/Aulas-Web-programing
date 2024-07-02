"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeRepository = void 0;
const global_1 = require("../global/global");
class ModalidadeRepository {
    constructor() {
        // Modalidade
        this.modalidadeList = (0, global_1.getModalidade)();
        //Modalidade Fim
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
}
exports.ModalidadeRepository = ModalidadeRepository;
